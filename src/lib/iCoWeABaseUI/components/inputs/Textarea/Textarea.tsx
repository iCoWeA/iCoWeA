import React, {
  type TextareaHTMLAttributes,
  type ReactNode,
  type MutableRefObject,
  forwardRef,
  useRef,
  useState,
  useImperativeHandle,
  useCallback,
  useMemo
} from 'react';

import useTheme from '../../../../iCoWeAUI/hooks/useTheme';
import { mergeClasses } from '../../../../iCoWeAUI/utils/utils';
import useAddEventListener from '../../../hooks/useAddEventListener';
import useConfig from '../../../hooks/useConfig';
import useMergeRefs from '../../../hooks/useMergeRefs';
import { getInputVariant } from '../../../utils/utils';
import TextareaClearance, { type TextareaClearanceProps } from './TextareaClearance';
import TextareaContainer, { type TextareaContainerProps } from './TextareaContainer';
import TextareaDecorator, { type TextareaDecoratorProps } from './TextareaDecorator';
import TextareaFieldset, { type TextareaFieldsetProps } from './TextareaFieldset';
import TextareaLabel, { type TextareaLabelProps } from './TextareaLabel';
import inputConfig from './textareaConfig';

export type TextareaDefaultProps = {
  variant?: InputVariants;
  color?: DefaultTextColors;
  block?: boolean;
};

export type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> &
TextareaDefaultProps & {
  valid?: boolean;
  invalid?: boolean;
  label?: ReactNode;
  leftDecoration?: ReactNode;
  rightDecoration?: ReactNode;
  containerProps?: TextareaContainerProps;
  fieldsetProps?: TextareaFieldsetProps;
  leftDecoratorProps?: TextareaDecoratorProps;
  rightDecoratorProps?: TextareaDecoratorProps;
  labelProps?: TextareaLabelProps;
  clearanceProps?: TextareaClearanceProps;
  inputRef?: MutableRefObject<HTMLTextAreaElement> | null;
};

const Textarea = forwardRef<HTMLDivElement, TextareaProps>((props, forwardedRef) => {
  const {
    variant,
    color,
    block,
    valid,
    invalid,
    label,
    leftDecoration,
    rightDecoration,
    containerProps,
    fieldsetProps,
    leftDecoratorProps,
    rightDecoratorProps,
    labelProps,
    clearanceProps,
    inputRef,
    defaultClassName,
    className,
    disabled,
    id,
    placeholder,
    value,
    ...restProps
  } = useConfig('input', inputConfig.defaultProps, props);

  const theme = useTheme();

  const ref = useRef<HTMLTextAreaElement | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const mergedRefs = useMergeRefs(ref, inputRef);

  const [isFocused, setIsFocused] = useState(false);

  useImperativeHandle<HTMLDivElement | null, HTMLDivElement | null>(
    forwardedRef,
    () => containerRef.current,
    []
  );

  /* --- Set event handlers --- */
  const focusHandler = useCallback((event: FocusEvent): void => {
    if (ref.current === event.target) {
      setIsFocused(true);
    }
  }, []);

  const blurHandler = useCallback((event: FocusEvent): void => {
    if (event.relatedTarget === null || event.relatedTarget !== containerRef.current) {
      setIsFocused(false);
    }
  }, []);

  useAddEventListener(ref, 'focus', focusHandler);

  useAddEventListener(ref, 'blur', blurHandler);

  /* --- Set classes --- */
  const mergedClassName = useMemo(() => {
    const styles = inputConfig.styles.textarea;
    const inputVariant = getInputVariant(color);

    return mergeClasses(
      styles.base,
      styles.color[inputVariant][theme],
      defaultClassName,
      className
    );
  }, [color, theme, defaultClassName, className]);

  return (
    <TextareaContainer
      block={block}
      isFocused={isFocused}
      inputRef={ref}
      disabled={disabled}
      ref={containerRef}
      {...containerProps}
    >
      <TextareaDecorator
        placement="left"
        theme={theme}
        inputVariant={variant}
        color={color}
        valid={valid}
        invalid={invalid}
        disabled={disabled}
        {...leftDecoratorProps}
      >
        {leftDecoration}
      </TextareaDecorator>
      <TextareaFieldset
        theme={theme}
        inputVariant={variant}
        color={color}
        valid={valid}
        invalid={invalid}
        disabled={disabled}
        {...fieldsetProps}
      >
        {label && variant === 'outlined' && (
          <TextareaClearance {...clearanceProps}>{label}</TextareaClearance>
        )}
        {label && (
          <TextareaLabel
            theme={theme}
            variant={variant}
            color={color}
            valid={valid}
            invalid={invalid}
            htmlFor={id}
            disabled={disabled}
            {...labelProps}
          >
            {label}
          </TextareaLabel>
        )}
        <textarea
          className={mergedClassName}
          disabled={disabled}
          id={id}
          placeholder={isFocused ? placeholder : undefined}
          value={value}
          ref={mergedRefs}
          {...restProps}
        />
      </TextareaFieldset>
      <TextareaDecorator
        placement="right"
        theme={theme}
        inputVariant={variant}
        color={color}
        valid={valid}
        invalid={invalid}
        disabled={disabled}
        {...rightDecoratorProps}
      >
        {rightDecoration}
      </TextareaDecorator>
    </TextareaContainer>
  );
});

Textarea.displayName = 'Textarea';

export default Textarea;
