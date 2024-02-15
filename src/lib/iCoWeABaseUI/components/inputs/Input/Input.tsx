import React, {
  type InputHTMLAttributes,
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
import InputClearance, { type InputClearanceProps } from './InputClearance';
import InputContainer, { type InputContainerProps } from './InputContainer';
import InputDecorator, { type InputDecoratorProps } from './InputDecorator';
import InputFieldset, { type InputFieldsetProps } from './InputFieldset';
import InputLabel, { type InputLabelProps } from './InputLabel';
import inputConfig from './inputConfig';

export type InputDefaultProps = {
  variant?: InputVariants;
  color?: DefaultTextColors;
  block?: boolean;
};

export type InputProps = InputHTMLAttributes<HTMLInputElement> &
InputDefaultProps & {
  valid?: boolean;
  invalid?: boolean;
  label?: ReactNode;
  leftDecoration?: ReactNode;
  rightDecoration?: ReactNode;
  containerProps?: InputContainerProps;
  fieldsetProps?: InputFieldsetProps;
  leftDecoratorProps?: InputDecoratorProps;
  rightDecoratorProps?: InputDecoratorProps;
  labelProps?: InputLabelProps;
  clearanceProps?: InputClearanceProps;
  inputRef?: MutableRefObject<HTMLInputElement> | null;
};

const Input = forwardRef<HTMLDivElement, InputProps>((props, forwardedRef) => {
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

  const ref = useRef<HTMLInputElement | null>(null);
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
    const styles = inputConfig.styles.input;
    const inputVariant = getInputVariant(color);

    return mergeClasses(
      styles.base,
      styles.color[inputVariant][theme],
      defaultClassName,
      className
    );
  }, [color, theme, defaultClassName, className]);

  return (
    <InputContainer
      block={block}
      isFocused={isFocused}
      inputRef={ref}
      disabled={disabled}
      value={value}
      ref={containerRef}
      {...containerProps}
    >
      <InputDecorator
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
      </InputDecorator>
      <InputFieldset
        theme={theme}
        inputVariant={variant}
        color={color}
        valid={valid}
        invalid={invalid}
        disabled={disabled}
        {...fieldsetProps}
      >
        {label && variant === 'outlined' && (
          <InputClearance {...clearanceProps}>{label}</InputClearance>
        )}
        {label && (
          <InputLabel
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
          </InputLabel>
        )}
        <input
          className={mergedClassName}
          disabled={disabled}
          id={id}
          placeholder={isFocused ? placeholder : undefined}
          type="text"
          value={value}
          ref={mergedRefs}
          {...restProps}
        />
      </InputFieldset>
      <InputDecorator
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
      </InputDecorator>
    </InputContainer>
  );
});

Input.displayName = 'Input';

export default Input;
