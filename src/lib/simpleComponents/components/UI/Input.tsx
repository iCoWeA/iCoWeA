import React, {
  forwardRef,
  useContext,
  type MutableRefObject,
  type InputHTMLAttributes,
  type ReactNode,
  type FieldsetHTMLAttributes,
  useState,
  type FocusEventHandler,
  useEffect,
  type BaseHTMLAttributes,
  type LabelHTMLAttributes
} from 'react';
import {
  type InputColors,
  type InputVariants
} from '../../configs/inputConfig';
import themeContext from '../../contexts/theme';
import { twMerge } from 'tailwind-merge';
import { mergeClasses } from '../../utils/styleHelper';

export interface InputDefaultProps {
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
}

export interface InputProps
  extends InputDefaultProps,
  InputHTMLAttributes<HTMLInputElement> {
  inputRef?: MutableRefObject<HTMLInputElement | undefined>;
}

const Input = forwardRef<HTMLDivElement, InputProps>(
  (
    {
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
      onFocus: onInputFocus,
      onBlur: onInputBlur,
      autoFocus: inputAutoFocus,
      disabled: inputDisabled,
      value: inputValue,
      className: inputClassName,
      inputRef,
      ...restInputProps
    },
    rootRef
  ) => {
    const { theme, config } = useContext(themeContext);
    const { defaultProps, styles } = config.input;
    const rootStyles = styles.root;
    const containerStyles = styles.container;
    const inputStyles = styles.input;
    let labelNode: ReactNode;

    variant = variant ?? defaultProps.variant;
    color = color ?? defaultProps.color;
    valid = valid ?? defaultProps.valid;
    invalid = invalid ?? defaultProps.invalid;
    label = label ?? defaultProps.label;
    startAdornment = startAdornment ?? defaultProps.startAdornment;
    endAdornment = endAdornment ?? defaultProps.endAdornment;
    rootProps = rootProps ?? defaultProps.rootProps;
    containerProps = containerProps ?? defaultProps.containerProps;

    const [isShifted, setIsShifted] = useState(
      (inputValue !== undefined && inputValue !== '') ||
        (inputAutoFocus === true && inputDisabled === false)
    );
    const [isFocused, setIsFocused] = useState(
      inputAutoFocus === true && inputDisabled === false
    );

    useEffect(() => {
      if (inputValue === '') {
        setIsShifted(false);
      }
    }, [inputValue]);

    /* Set root props */
    const { className: rootClassName, ...restRootProps } = rootProps;

    const mergedRootClassName = twMerge(
      mergeClasses(
        rootStyles.base,
        isFocused && rootStyles.focused,
        isShifted && rootStyles.shifted,
        rootClassName
      )
    );

    /* Set input props */
    const focusInputHandler: FocusEventHandler<HTMLInputElement> = (event) => {
      setIsShifted(true);
      setIsFocused(true);

      if (onInputFocus !== undefined) {
        onInputFocus(event);
      }
    };

    const blurInputHandler: FocusEventHandler<HTMLInputElement> = (event) => {
      if (event.target.value !== '') {
        setIsFocused(false);
      } else {
        setIsShifted(false);
        setIsFocused(false);
      }

      if (onInputBlur !== undefined) {
        onInputBlur(event);
      }
    };

    const mergedInputClassName = twMerge(
      mergeClasses(
        inputStyles.base,
        (inputDisabled === true || (!valid && !invalid)) &&
          inputStyles.colors[theme][color],
        valid && inputDisabled !== true && inputStyles.valid[theme],
        invalid && inputDisabled !== true && inputStyles.invalid[theme],
        startAdornment !== null && inputStyles.startAdornment,
        endAdornment !== null && inputStyles.endAdornment,
        inputClassName
      )
    );

    const setInputRef: (element: HTMLInputElement) => void = (element) => {
      if (inputRef !== undefined) {
        inputRef.current = element;
      }
    };

    /* Set container props */
    const {
      className: containerClassName,
      disabled: containerDisabled,
      ...restContainerProps
    } = containerProps;

    const mergedContainerClassName = twMerge(
      mergeClasses(
        containerStyles.base,
        (inputDisabled === true || (!valid && !invalid)) &&
          containerStyles.variants[variant][theme][color],
        valid &&
          inputDisabled !== true &&
          containerStyles.valid[variant][theme],
        invalid &&
          inputDisabled !== true &&
          containerStyles.invalid[variant][theme],
        rootClassName
      )
    );

    /* Set label props */
    if (label !== null) {
      const legendStyles = styles.legend;
      const labelStyles = styles.label;

      legendProps = legendProps ?? defaultProps.legendProps;
      labelProps = labelProps ?? defaultProps.labelProps;

      const { className: legendClassName, ...restLegendProps } = legendProps;

      const mergedLegendClassName = twMerge(
        mergeClasses(legendStyles.base, legendClassName)
      );

      const { className: labelClassName, ...restLabelProps } = labelProps;

      const mergedLabelClassName = twMerge(
        mergeClasses(
          labelStyles.base,
          (inputDisabled === true || (!valid && !invalid)) &&
            labelStyles.colors[theme][color],
          startAdornment !== null && labelStyles.startAdornment,
          valid && inputDisabled !== true && labelStyles.valid[theme],
          invalid && inputDisabled !== true && labelStyles.invalid[theme],
          labelClassName
        )
      );

      labelNode = (
        <>
          <legend
            className={mergedLegendClassName}
            {...restLegendProps}
          >
            {label}
          </legend>
          <label
            className={mergedLabelClassName}
            {...restLabelProps}
          >
            {label}
          </label>
        </>
      );
    }

    return (
      <div
        className={mergedRootClassName}
        ref={rootRef}
        {...restRootProps}
      >
        <input
          onFocus={focusInputHandler}
          onBlur={blurInputHandler}
          autoFocus={inputAutoFocus}
          disabled={inputDisabled}
          value={inputValue}
          className={mergedInputClassName}
          ref={setInputRef}
          {...restInputProps}
        />
        <fieldset
          disabled={containerDisabled === true || inputDisabled}
          className={mergedContainerClassName}
          {...restContainerProps}
        >
          {labelNode}
        </fieldset>
        {startAdornment}
        {endAdornment}
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input;
