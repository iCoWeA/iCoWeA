import React, {
  type MutableRefObject,
  forwardRef,
  useRef,
  useImperativeHandle,
  useCallback
} from 'react';

import useAddEventListener from '../../../hooks/useAddEventListener';
import { mergeClasses } from '../../../utils/utils';
import Flex, { type FlexProps } from '../../layouts/Flex/Flex';
import inputConfig from './inputConfig';

export type InputContianerDefaultProps = FlexProps;

export type InputContainerProps = InputContianerDefaultProps & {
  isFocused: boolean;
  inputRef: MutableRefObject<HTMLInputElement | null>;
  defaultClassName?: string;
};

const InputContainer = forwardRef<HTMLDivElement, InputContainerProps>(
  ({ isFocused, inputRef, disabled, defaultClassName, className, ...restProps }, forwardedRef) => {
    const ref = useRef<HTMLDivElement>(null);

    useImperativeHandle<HTMLDivElement | null, HTMLDivElement | null>(
      forwardedRef,
      () => ref.current,
      []
    );

    /* --- Set handlers --- */
    const focusHandler = useCallback((event: FocusEvent): void => {
      if (ref.current === event.target || inputRef.current === event.target) {
        inputRef.current?.focus();
      }
    }, []);

    useAddEventListener(ref, 'focus', focusHandler);

    /* --- Set classes --- */
    const styles = inputConfig.styles.root;
    const isShifted = typeof inputRef.current?.value === 'string' && inputRef.current?.value !== '';

    const mergedClassName = mergeClasses(
      styles.base,
      disabled && styles.disabled,
      isShifted && styles.shift,
      isFocused && styles.focus,
      defaultClassName,
      className
    );

    return (
      <Flex
        direction="row"
        justify="start"
        align="stretch"
        wrap="nowrap"
        gap="none"
        className={mergedClassName}
        tabIndex={-1}
        ref={ref}
        {...restProps}
      />
    );
  }
);

InputContainer.displayName = 'InputContainer';

export default InputContainer;
