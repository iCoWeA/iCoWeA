import React, {
  type FocusEvent,
  type MutableRefObject,
  forwardRef,
  useCallback,
  useImperativeHandle,
  useMemo,
  useRef
} from 'react';

import { mergeClasses } from '../../../../iCoWeAUI/utils/utils';
import Flex, { type FlexProps } from '../../layouts/Flex/Flex';
import inputConfig from './inputConfig';

export type InputContainerDefaultProps = FlexProps;

export type InputContainerProps = InputContainerDefaultProps & {
  block: boolean;
  isFocused: boolean;
  inputRef: MutableRefObject<HTMLInputElement | null>;
  disabled?: boolean;
  value?: string | number | readonly string[];
};

const InputContainer = forwardRef<HTMLDivElement, InputContainerProps>(
  (
    { onFocus, block, isFocused, inputRef, className, disabled, value, ...restProps },
    forwardedRef
  ) => {
    const ref = useRef<HTMLDivElement>(null);

    useImperativeHandle<HTMLDivElement | null, HTMLDivElement | null>(
      forwardedRef,
      () => ref.current,
      []
    );

    /* --- Set event handlers --- */
    const focusHandler = useCallback(
      (event: FocusEvent<HTMLDivElement>): void => {
        if (ref.current === event.target) {
          inputRef.current?.focus();
        }

        if (onFocus) {
          onFocus(event);
        }
      },
      [onFocus]
    );

    /* --- Set classes --- */
    const mergedClassName = useMemo(() => {
      const styles = inputConfig.styles.root;

      return mergeClasses(
        styles.base,
        block && styles.block,
        value && styles.shift,
        isFocused && styles.focus,
        className
      );
    }, [value, block, isFocused, className]);

    return (
      <Flex
        onFocus={focusHandler}
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

InputContainer.displayName = 'InputContainer';

export default InputContainer;
