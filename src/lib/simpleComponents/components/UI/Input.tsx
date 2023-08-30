import React, {
  forwardRef,
  useContext,
  type ReactNode,
  useState,
  useRef,
  useImperativeHandle,
  type FocusEvent,
  type InputHTMLAttributes,
  useCallback,
  type BaseHTMLAttributes,
  type FieldsetHTMLAttributes,
  type FocusEventHandler,
  type LabelHTMLAttributes,
  type MutableRefObject,
  useEffect
} from 'react';
import { type InputVariants } from '../../configs/inputConfig';
import themeContext from '../../contexts/theme';
import useOutsideClick from '../../hooks/useOutsideClick';
import { mergeClasses, mergeProps } from '../../utils/propsHelper';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  variant?: InputVariants;
  color?: Colors;
  valid?: boolean;
  invalid?: boolean;
  label?: ReactNode;
  startAdornment?: ReactNode;
  endAdornment?: ReactNode;
  containerProps?: BaseHTMLAttributes<HTMLDivElement>;
  fieldsetProps?: FieldsetHTMLAttributes<HTMLFieldSetElement>;
  legendProps?: BaseHTMLAttributes<HTMLLegendElement>;
  labelProps?: LabelHTMLAttributes<HTMLLabelElement>;
  inputRef?: MutableRefObject<HTMLInputElement> | null;
  onFocus?: FocusEventHandler<HTMLInputElement>;
  autoFocus?: boolean;
  disabled?: boolean;
  value?: string;
  className?: string;
}

const Input = forwardRef<HTMLDivElement, InputProps>((inputProps, containerRef) => {
  const { theme, config } = useContext(themeContext);
  const { defaultProps, styles } = config.input;
  const {
    variant,
    color,
    valid,
    invalid,
    label,
    startAdornment,
    endAdornment,
    containerProps,
    fieldsetProps,
    legendProps,
    labelProps,
    inputRef,
    onFocus: onInputFocus,
    autoFocus: inputAutoFocus,
    disabled: inputDisabled,
    value: inputValue,
    className: inputClassName,
    ...restInputProps
  } = mergeProps(defaultProps, inputProps);
  let labelNode: ReactNode;

  const componentsRef = useRef<{ container: HTMLDivElement | null; input: HTMLInputElement | null }>({ container: null, input: null });

  useImperativeHandle<HTMLDivElement | null, HTMLDivElement | null>(containerRef, () => componentsRef.current.container, []);

  const [isShifted, setIsShifted] = useState(inputValue !== '' || (inputAutoFocus && !inputDisabled));
  const [isFocused, setIsFocused] = useState(inputAutoFocus && !inputDisabled);

  const outsideClickHandler = useCallback((event: MouseEvent) => {
    if (componentsRef.current.container?.contains(event.target as Node) ?? false) {
      componentsRef.current.input?.focus();
    } else {
      if (componentsRef.current.input?.value === '') {
        setIsShifted(false);
        setIsFocused(false);
      } else {
        setIsFocused(false);
      }
    }
  }, []);

  useOutsideClick(outsideClickHandler);

  useEffect(() => {
    if (inputValue !== '') {
      setIsShifted(true);
    }

    if (inputValue === '' && !isFocused) {
      setIsShifted(false);
    }

    if (inputAutoFocus) {
      setIsShifted(true);
      setIsFocused(true);
    }
  }, [inputValue, isFocused, inputAutoFocus]);

  /* Set container props */
  const containerStyles = styles.container;
  const { className: containerClassName, ...restContainerProps } = containerProps;

  const setContainerRef = (element: HTMLDivElement): void => {
    componentsRef.current.container = element;
  };

  const mergedContainerClassName = mergeClasses(
    containerStyles.base,
    isFocused && containerStyles.focused,
    isShifted && containerStyles.shifted,
    containerClassName
  );

  /* Set input props */
  const inputStyles = styles.input;
  const focusInputHandler = (event: FocusEvent<HTMLInputElement>): void => {
    setIsShifted(true);
    setIsFocused(true);

    if (onInputFocus !== undefined) {
      onInputFocus(event);
    }
  };

  const setInputRef = (element: HTMLInputElement): void => {
    componentsRef.current.input = element;

    if (inputRef !== undefined && inputRef !== null) {
      inputRef.current = element;
    }
  };

  const mergedInputClassName = mergeClasses(
    inputStyles.base,
    inputStyles.variants[variant],
    !valid && !invalid && inputStyles.colors[theme][color],
    valid && inputStyles.valid[theme],
    invalid && inputStyles.invalid[theme],
    inputClassName
  );

  /* Set fieldset props */
  const fieldsetStyles = styles.fieldset;
  const { disabled: fieldsetDisabled = inputDisabled, className: fieldsetClassName, ...restFieldsetProps } = fieldsetProps;

  const mergedFieldsetClassName = mergeClasses(
    fieldsetStyles.base,
    !valid && !invalid && fieldsetStyles.variants[variant][theme][color],
    valid && fieldsetStyles.valid[variant][theme],
    invalid && fieldsetStyles.invalid[variant][theme],
    fieldsetClassName
  );

  /* Set label props */
  if (label !== undefined) {
    const labelStyles = styles.label;
    const { className: labelClassName, ...restLabelProps } = labelProps;

    const mergedLabelClassName = mergeClasses(
      labelStyles.base,
      labelStyles.variants[variant],
      !valid && !invalid && labelStyles.colors[theme][color],
      valid && labelStyles.valid[theme],
      invalid && labelStyles.invalid[theme],
      startAdornment !== undefined && labelStyles.startAdornment,
      labelClassName
    );

    labelNode = (
      <label
        className={mergedLabelClassName}
        {...restLabelProps}
      >
        {label}
      </label>
    );
  }

  /* Set legend props */
  if (label !== undefined && variant === 'outlined') {
    const legendStyles = styles.legend;
    const { className: legendClassName, ...restLegendProps } = legendProps;

    const mergedLegendClassName = mergeClasses(legendStyles.base, legendClassName);

    labelNode = (
      <>
        <legend
          className={mergedLegendClassName}
          {...restLegendProps}
        >
          {label}
        </legend>
        {labelNode}
      </>
    );
  }

  return (
    <div
      className={mergedContainerClassName}
      ref={setContainerRef}
      {...restContainerProps}
    >
      {startAdornment}
      <input
        onFocus={focusInputHandler}
        autoFocus={inputAutoFocus}
        disabled={inputDisabled}
        value={inputValue}
        className={mergedInputClassName}
        ref={setInputRef}
        {...restInputProps}
      />
      <fieldset
        disabled={fieldsetDisabled}
        className={mergedFieldsetClassName}
        {...restFieldsetProps}
      >
        {labelNode}
      </fieldset>
      {endAdornment}
    </div>
  );
});

Input.displayName = 'Input';

export default Input;
