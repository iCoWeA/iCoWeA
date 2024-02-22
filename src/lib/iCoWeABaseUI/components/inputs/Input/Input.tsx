import React, {
  type FocusEvent,
  type InputHTMLAttributes,
  type MutableRefObject,
  type ReactNode,
  forwardRef,
  useCallback,
  useImperativeHandle,
  useMemo,
  useRef,
  useState
} from 'react';

import useTheme from '../../../../iCoWeAUI/hooks/useTheme';
import { mergeClasses } from '../../../../iCoWeAUI/utils/utils';
import useConfig from '../../../hooks/useConfig';
import useMergeRefs from '../../../hooks/useMergeRefs';
import InputClearance, { type InputClearanceDefaultProps } from './InputClearance';
import InputContainer, { type InputContainerDefaultProps } from './InputContainer';
import InputDecorator, { type InputDecoratorDefaultProps } from './InputDecorator';
import InputFieldset, { type InputFieldsetDefaultProps } from './InputFieldset';
import InputLabel, { type InputLabelDefaultProps } from './InputLabel';
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
  containerProps?: InputContainerDefaultProps;
  fieldsetProps?: InputFieldsetDefaultProps;
  leftDecoratorProps?: InputDecoratorDefaultProps;
  rightDecoratorProps?: InputDecoratorDefaultProps;
  labelProps?: InputLabelDefaultProps;
  clearanceProps?: InputClearanceDefaultProps;
  inputRef?: MutableRefObject<HTMLInputElement> | null;
};

const Input = forwardRef<HTMLDivElement, InputProps>((props, forwardedRef) => {
  const {
    onFocus,
    onBlur,
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
  const focusHandler = useCallback(
    (event: FocusEvent<HTMLInputElement>): void => {
      setIsFocused(true);

      if (onFocus) {
        onFocus(event);
      }
    },
    [onFocus]
  );

  const blurHandler = useCallback(
    (event: FocusEvent<HTMLInputElement>): void => {
      if (event.relatedTarget === null || event.relatedTarget !== containerRef.current) {
        setIsFocused(false);
      }

      if (onBlur) {
        onBlur(event);
      }
    },
    [onBlur]
  );

  /* --- Set classes --- */
  const mergedClassName = useMemo(() => {
    const styles = inputConfig.styles.input;

    return mergeClasses(styles.base, styles.colors[theme][color], defaultClassName, className);
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
          onFocus={focusHandler}
          onBlur={blurHandler}
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
