import React, {
  type InputHTMLAttributes,
  type ReactNode,
  type MutableRefObject,
  forwardRef,
  useRef,
  useCallback,
  useImperativeHandle,
  useState
} from 'react';

import useAddEventListener from '../../../hooks/useAddEventListener';
import useConfig from '../../../hooks/useConfig';
import useTheme from '../../../hooks/useTheme';
import { mergeClasses } from '../../../utils/utils';
import InputClearance, { type InputClearanceProps } from './InputClearance';
import InputContainer, { type InputContainerProps } from './InputContainer';
import InputDecorator, { type InputDecoratorProps } from './InputDecorator';
import InputFieldset, { type InputFieldsetProps } from './InputFieldset';
import InputLabel, { type InputLabelProps } from './InputLabel';
import inputConfig from './inputConfig';
import useMergeRefs from '../../../hooks/useMergeRefs';

export type InputDefaultProps = {
  variant?: InputVariants;
  color?: Colors;
  block?: boolean;
  valid?: boolean;
  invalid?: boolean;
};

export type InputProps = InputHTMLAttributes<HTMLInputElement> &
InputDefaultProps & {
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
    placeholder,
    id,
    disabled,
    value,
    defaultClassName,
    className,
    ...restProps
  } = useConfig('input', inputConfig.defaultProps.input, props);
  const theme = useTheme();

  const ref = useRef<HTMLInputElement | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const mergedRefs = useMergeRefs(ref, inputRef);

  useImperativeHandle<HTMLDivElement | null, HTMLDivElement | null>(
    forwardedRef,
    () => containerRef.current,
    []
  );

  const [isFocused, setIsFocused] = useState(false);

  /* --- Set focus handlers --- */
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
  const styles = inputConfig.styles.input;

  const mergedClassName = mergeClasses(styles.base, styles.colors[theme], className);

  return (
    <InputContainer
      block={block}
      isFocused={isFocused}
      disabled={disabled}
      inputRef={ref}
      defaultClassName={defaultClassName}
      ref={containerRef}
      {...containerProps}
    >
      <InputDecorator
        position="left"
        variant={variant}
        theme={theme}
        color={color}
        valid={valid}
        invalid={invalid}
        disabled={disabled}
        {...leftDecoratorProps}
      >
        {leftDecoration}
      </InputDecorator>
      <InputFieldset
        variant={variant}
        theme={theme}
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
            variant={variant}
            theme={theme}
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
          placeholder={isFocused ? placeholder : undefined}
          id={id}
          disabled={disabled}
          value={value}
          className={mergedClassName}
          ref={mergedRefs}
          {...restProps}
        />
      </InputFieldset>
      <InputDecorator
        position="right"
        variant={variant}
        theme={theme}
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
