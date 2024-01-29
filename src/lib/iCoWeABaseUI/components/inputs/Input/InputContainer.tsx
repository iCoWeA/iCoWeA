import React, { type MutableRefObject, forwardRef, useRef, useImperativeHandle } from 'react';

import { mergeClasses } from '../../../../iCoWeAUI/utils/utils';
import useAddEventListener from '../../../hooks/useAddEventListener';
import Flex, { type FlexProps } from '../../layouts/Flex/Flex';
import inputConfig from './inputConfig';

export type InputContianerDefaultProps = FlexProps;

export type InputContainerProps = InputContianerDefaultProps & {
  block: boolean;
  isFocused: boolean;
  inputRef: MutableRefObject<HTMLInputElement | null>;
  defaultClassName?: string;
};

const InputContainer = forwardRef<HTMLDivElement, InputContainerProps>(
  (
    { block, isFocused, inputRef, disabled, defaultClassName, className, ...restProps },
    forwardedRef
  ) => {
    const ref = useRef<HTMLDivElement>(null);

    useImperativeHandle<HTMLDivElement | null, HTMLDivElement | null>(
      forwardedRef,
      () => ref.current,
      []
    );

    /* --- Set event handlers --- */
    const focusHandler = (event: FocusEvent): void => {
      if (ref.current === event.target || inputRef.current === event.target) {
        inputRef.current?.focus();
      }
    };

    useAddEventListener(ref, 'focus', focusHandler);

    /* --- Set classes --- */
    const styles = inputConfig.styles.root;
    const isShifted = typeof inputRef.current?.value === 'string' && inputRef.current?.value !== '';

    const mergedClassName = mergeClasses(
      styles.base,
      block && styles.block,
      disabled && styles.disabled,
      isShifted && styles.shift,
      isFocused && styles.focus,
      defaultClassName,
      className
    );

    return (
      <Flex
        direction="row"
        wrap="nowrap"
        justify="start"
        align="stretch"
        gap="none"
        grow={false}
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
