import React, {
  forwardRef,
  useContext,
  type ReactNode,
  useState,
  useRef,
  useImperativeHandle,
  type FocusEvent,
  type InputHTMLAttributes,
  useCallback
} from 'react';
import { type InputProps } from '../../configs/inputConfig';
import themeContext from '../../contexts/theme';
import { mergeClasses, setDefaultProps } from '../../utils/propsHelper';
import useOutsideClick from '../../hooks/useOutsideClick';

const Input = forwardRef<HTMLDivElement, InputProps & InputHTMLAttributes<HTMLInputElement>>((inputProps, rootRef) => {
  const componentsRefs = useRef<{ root: HTMLDivElement | null; input: HTMLInputElement | null }>({ root: null, input: null });
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
  } = setDefaultProps(defaultProps, inputProps);
  let labelNode: ReactNode;

  useImperativeHandle<HTMLDivElement | null, HTMLDivElement | null>(rootRef, () => componentsRefs.current.root, []);

  const [isShifted, setIsShifted] = useState(inputValue !== '' || (inputAutoFocus && !inputDisabled));
  const [isFocused, setIsFocused] = useState(inputAutoFocus && !inputDisabled);

  /* Set root props */
  const rootStyles = styles.root;
  const { className: rootClassName, ...restRootProps } = rootProps;

  const outsideRootClickHandler = useCallback(() => {
    if (componentsRefs.current.input?.value === '') {
      setIsShifted(false);
      setIsFocused(false);
    } else {
      setIsFocused(false);
    }
  }, []);

  const insideRootClickHandler = useCallback(() => {
    componentsRefs.current.input?.focus();
  }, []);

  useOutsideClick(componentsRefs.current.root, outsideRootClickHandler, insideRootClickHandler);

  const setRootRef = (element: HTMLDivElement): void => {
    componentsRefs.current.root = element;
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
    componentsRefs.current.input = element;

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
  if (label !== null) {
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
  if (label !== null && variant === 'outlined') {
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
