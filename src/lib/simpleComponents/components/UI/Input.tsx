import React, {
  forwardRef,
  useContext,
  type MutableRefObject,
  type InputHTMLAttributes,
  type ReactNode,
  type FieldsetHTMLAttributes,
  useState,
  useEffect,
  type BaseHTMLAttributes,
  type LabelHTMLAttributes,
  useRef,
  useImperativeHandle,
  type RefObject,
  type MouseEvent,
  type FocusEvent
} from 'react';
import {
  type InputColors,
  type InputVariants
} from '../../configs/inputConfig';
import themeContext from '../../contexts/theme';
import { twMerge } from 'tailwind-merge';
import { mergeClasses } from '../../utils/styleHelper';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  variant?: InputVariants;
  color?: InputColors;
  valid?: boolean;
  invalid?: boolean;
  label?: ReactNode;
  startAdornment?: ReactNode;
  endAdornment?: ReactNode;
  labelPosition?: string;
  componentsProps?: {
    root?: BaseHTMLAttributes<HTMLDivElement>;
    container?: FieldsetHTMLAttributes<HTMLFieldSetElement>;
    legend?: BaseHTMLAttributes<HTMLLegendElement>;
    label?: LabelHTMLAttributes<HTMLLabelElement>;
  };
  inputRef?: MutableRefObject<HTMLInputElement | undefined>;
}

const Input = forwardRef<RefObject<HTMLDivElement>, InputProps>(
  (
    {
      variant,
      color,
      valid,
      invalid,
      label,
      startAdornment,
      endAdornment,
      labelPosition,
      componentsProps,
      onFocus: onInputFocus,
      onBlur: onInputBlur,
      autoFocus: inputAutoFocus,
      disabled: isInputDisabled,
      value: inputValue,
      className: inputClassName,
      inputRef,
      ...restInputProps
    },
    rootRef
  ) => {
    const rootFocusRef = useRef<HTMLDivElement>(null);
    const inputFocusRef = useRef<HTMLInputElement | null>(null);
    const { theme, config } = useContext(themeContext);
    const {
      defaultProps,
      styles: {
        root: rootStyles,
        container: containerStyles,
        input: inputStyles,
        label: labelStyles,
        legend: legendStyles
      }
    } = config.input;
    let labelNode: ReactNode;

    variant = variant ?? defaultProps.variant;
    color = color ?? defaultProps.color;
    valid = valid ?? defaultProps.valid;
    invalid = invalid ?? defaultProps.invalid;
    label = label ?? defaultProps.label;
    startAdornment = startAdornment ?? defaultProps.startAdornment;
    endAdornment = endAdornment ?? defaultProps.endAdornment;

    useImperativeHandle(rootRef, () => rootFocusRef, []);

    const [isShifted, setIsShifted] = useState(
      (inputValue !== undefined && inputValue !== '') ||
        (inputAutoFocus === true && isInputDisabled === false)
    );
    const [isFocused, setIsFocused] = useState(
      inputAutoFocus === true && isInputDisabled === false
    );

    useEffect(() => {
      if (inputValue === '') {
        setIsShifted(false);
      }
    }, [inputValue]);

    /* Set root props */
    const {
      className: rootClassName,
      onMouseDown: onRootMouseDown,
      ...restRootProps
    } = componentsProps?.root ?? defaultProps.componentsProps.root;

    const rootMouseDownHandler = (event: MouseEvent<HTMLDivElement>): void => {
      event.preventDefault();
      if (
        event.target === rootFocusRef.current ||
        event.target === inputFocusRef.current
      ) {
        inputFocusRef.current?.focus();
      }

      if (onRootMouseDown !== undefined) {
        onRootMouseDown(event);
      }
    };

    const mergedRootClassName = twMerge(
      mergeClasses(
        rootStyles.base,
        isFocused && rootStyles.focused,
        isShifted && rootStyles.shifted,
        rootClassName
      )
    );

    /* Set input props */
    const focusInputHandler = (event: FocusEvent<HTMLInputElement>): void => {
      setIsShifted(true);
      setIsFocused(true);

      if (onInputFocus !== undefined) {
        onInputFocus(event);
      }
    };

    const blurInputHandler = (event: FocusEvent<HTMLInputElement>): void => {
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
        inputStyles.variants[variant],
        (isInputDisabled === true || (!valid && !invalid)) &&
          inputStyles.colors[theme][color],
        valid && isInputDisabled !== true && inputStyles.valid[theme],
        invalid && isInputDisabled !== true && inputStyles.invalid[theme],
        inputClassName
      )
    );

    const setInputRef = (element: HTMLInputElement): void => {
      inputFocusRef.current = element;

      if (inputRef !== undefined) {
        inputRef.current = element;
      }
    };

    /* Set container props */
    const {
      className: containerClassName,
      disabled: containerDisabled,
      ...restContainerProps
    } = componentsProps?.container ?? defaultProps.componentsProps.container;

    const mergedContainerClassName = twMerge(
      mergeClasses(
        containerStyles.base,
        (isInputDisabled === true || (!valid && !invalid)) &&
          containerStyles.variants[variant][theme][color],
        valid &&
          isInputDisabled !== true &&
          containerStyles.valid[variant][theme],
        invalid &&
          isInputDisabled !== true &&
          containerStyles.invalid[variant][theme],
        rootClassName
      )
    );

    /* Set label props */
    if (label !== null) {
      const { className: labelClassName, ...restLabelProps } =
        componentsProps?.label ?? defaultProps.componentsProps.label;

      const mergedLabelClassName = twMerge(
        mergeClasses(
          labelStyles.base,
          labelStyles.variants[variant],
          (isInputDisabled === true || (!valid && !invalid)) &&
            labelStyles.colors[theme][color],
          startAdornment !== null && labelStyles.startAdornment,
          valid && isInputDisabled !== true && labelStyles.valid[theme],
          invalid && isInputDisabled !== true && labelStyles.invalid[theme],
          labelPosition,
          labelClassName
        )
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
    if (label !== null && variant === 'outlined') {
      const { className: legendClassName, ...restLegendProps } =
        componentsProps?.legend ?? defaultProps.componentsProps.legend;

      const mergedLegendClassName = twMerge(
        mergeClasses(legendStyles.base, legendClassName)
      );

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
        onMouseDown={rootMouseDownHandler}
        className={mergedRootClassName}
        ref={rootFocusRef}
        {...restRootProps}
      >
        {startAdornment}
        <input
          onFocus={focusInputHandler}
          onBlur={blurInputHandler}
          autoFocus={inputAutoFocus}
          disabled={isInputDisabled}
          value={inputValue}
          className={mergedInputClassName}
          ref={setInputRef}
          {...restInputProps}
        />
        <fieldset
          disabled={containerDisabled === true || isInputDisabled}
          className={mergedContainerClassName}
          {...restContainerProps}
        >
          {labelNode}
        </fieldset>
        {endAdornment}
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input;
