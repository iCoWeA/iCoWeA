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
  type MouseEvent
} from 'react';
import { type InputVariants, type InputColors } from '../../configs/inputConfig';
import themeContext from '../../contexts/theme';
import useOutsideClick from '../../hooks/useOutsideClick';
import { mergeClasses, mergeProps } from '../../utils/propsHelper';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  variant?: InputVariants;
  color?: InputColors;
  valid?: boolean;
  invalid?: boolean;
  label?: ReactNode;
  startAdornment?: ReactNode;
  endAdornment?: ReactNode;
  rootProps?: BaseHTMLAttributes<HTMLDivElement>;
  containerProps?: FieldsetHTMLAttributes<HTMLFieldSetElement>;
  legendProps?: BaseHTMLAttributes<HTMLLegendElement>;
  labelProps?: LabelHTMLAttributes<HTMLLabelElement>;
  inputRef?: MutableRefObject<HTMLInputElement> | null;
  onFocus?: FocusEventHandler<HTMLInputElement>;
  autoFocus?: boolean;
  disabled?: boolean;
  value?: string;
  className?: string;
}

const Input = forwardRef<HTMLDivElement, InputProps>((inputProps, rootRef) => {
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
    rootProps,
    containerProps,
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

  const componentsRef = useRef<{ root: HTMLDivElement | null; input: HTMLInputElement | null }>({ root: null, input: null });

  useImperativeHandle<HTMLDivElement | null, HTMLDivElement | null>(rootRef, () => componentsRef.current.root, []);

  const [isShifted, setIsShifted] = useState(inputValue !== '' || (inputAutoFocus && !inputDisabled));
  const [isFocused, setIsFocused] = useState(inputAutoFocus && !inputDisabled);

  /* Set root props */
  const rootStyles = styles.root;
  const { onClick: onRootClick, className: rootClassName, ...restRootProps } = rootProps;

  const clickRootHandler = (event: MouseEvent<HTMLDivElement>): void => {
    componentsRef.current.input?.focus();

    if (onRootClick !== undefined) {
      onRootClick(event);
    }
  };

  const outsideRootClickHandler = useCallback(() => {
    if (componentsRef.current.input?.value === '') {
      setIsShifted(false);
      setIsFocused(false);
    } else {
      setIsFocused(false);
    }
  }, []);

  useOutsideClick(componentsRef.current.root, outsideRootClickHandler);

  const setRootRef = (element: HTMLDivElement): void => {
    componentsRef.current.root = element;
  };

  const mergedRootClassName = mergeClasses(rootStyles.base, isFocused && rootStyles.focused, isShifted && rootStyles.shifted, rootClassName);

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

  /* Set container props */
  const containerStyles = styles.container;
  const { disabled: containerDisabled = inputDisabled, className: containerClassName, ...restContainerProps } = containerProps;

  const mergedContainerClassName = mergeClasses(
    containerStyles.base,
    !valid && !invalid && containerStyles.variants[variant][theme][color],
    valid && containerStyles.valid[variant][theme],
    invalid && containerStyles.invalid[variant][theme],
    rootClassName
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
      onClick={clickRootHandler}
      className={mergedRootClassName}
      ref={setRootRef}
      {...restRootProps}
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
        disabled={containerDisabled}
        className={mergedContainerClassName}
        {...restContainerProps}
      >
        {labelNode}
      </fieldset>
      {endAdornment}
    </div>
  );
});

Input.displayName = 'Input';

export default Input;
