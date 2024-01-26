import React, { type MutableRefObject, forwardRef, useRef, useImperativeHandle } from 'react';

import useAddEventListener from '../../../hooks/useAddEventListener';
import { mergeClasses } from '../../../utils/utils';
import Flex, { type FlexProps } from '../../layouts/Flex/Flex';
import textareaConfig from './textareaConfig';

export type TextareaContianerDefaultProps = FlexProps;

export type TextareaContainerProps = TextareaContianerDefaultProps & {
  block: boolean;
  isFocused: boolean;
  textareaRef: MutableRefObject<HTMLTextAreaElement | null>;
  defaultClassName?: string;
};

const TextareaContainer = forwardRef<HTMLDivElement, TextareaContainerProps>(
  (
    { block, isFocused, textareaRef, disabled, defaultClassName, className, ...restProps },
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
      if (ref.current === event.target || textareaRef.current === event.target) {
        textareaRef.current?.focus();
      }
    };

    useAddEventListener(ref, 'focus', focusHandler);

    /* --- Set classes --- */
    const styles = textareaConfig.styles.root;
    const isShifted =
      typeof textareaRef.current?.value === 'string' && textareaRef.current?.value !== '';

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

TextareaContainer.displayName = 'TextareaContainer';

export default TextareaContainer;
