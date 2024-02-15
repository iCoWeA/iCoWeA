import React, {
  type MutableRefObject,
  forwardRef,
  useRef,
  useImperativeHandle,
  useCallback,
  useMemo
} from 'react';

import { mergeClasses } from '../../../../iCoWeAUI/utils/utils';
import useAddEventListener from '../../../hooks/useAddEventListener';
import Flex, { type FlexProps } from '../../layouts/Flex/Flex';
import inputConfig from './textareaConfig';

export type TextareaContianerDefaultProps = FlexProps;

export type TextareaContainerProps = TextareaContianerDefaultProps & {
  block: boolean;
  isFocused: boolean;
  inputRef: MutableRefObject<HTMLTextAreaElement | null>;
  disabled?: boolean;
  value?: string | number | readonly string[];
};

const TextareaContainer = forwardRef<HTMLDivElement, TextareaContainerProps>(
  ({ block, isFocused, inputRef, className, disabled, value, ...restProps }, forwardedRef) => {
    const ref = useRef<HTMLDivElement>(null);

    useImperativeHandle<HTMLDivElement | null, HTMLDivElement | null>(
      forwardedRef,
      () => ref.current,
      []
    );

    /* --- Set event handlers --- */
    const focusHandler = useCallback((event: FocusEvent): void => {
      if (ref.current === event.target || inputRef.current === event.target) {
        inputRef.current?.focus();
      }
    }, []);

    useAddEventListener(ref, 'focus', focusHandler);

    /* --- Set classes --- */
    const mergedClassName = useMemo(() => {
      const styles = inputConfig.styles.root;
      const isShifted = value && value !== '';

      return mergeClasses(
        styles.base,
        block && styles.block,
        isShifted && styles.shift,
        isFocused && styles.focus,
        className
      );
    }, [value, block, isFocused, className]);

    return (
      <Flex
        direction="row"
        wrap="nowrap"
        justify="start"
        align="stretch"
        gap="none"
        className={mergedClassName}
        tabIndex={disabled ? undefined : -1}
        ref={ref}
        {...restProps}
      />
    );
  }
);

TextareaContainer.displayName = 'TextareaContainer';

export default TextareaContainer;
