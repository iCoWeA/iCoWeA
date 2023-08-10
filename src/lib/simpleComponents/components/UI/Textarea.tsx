import React, {
  forwardRef,
  useContext,
  type MutableRefObject,
  type TextareaHTMLAttributes,
  type ReactNode,
  type FieldsetHTMLAttributes,
  useState,
  type FocusEventHandler,
  useEffect,
  type BaseHTMLAttributes,
  type LabelHTMLAttributes,
  useRef,
  type MouseEventHandler
} from 'react';
import {
  type TextareaColors,
  type TextareaVariants
} from '../../configs/textareaConfig';
import themeContext from '../../contexts/theme';
import { twMerge } from 'tailwind-merge';
import { mergeClasses } from '../../utils/styleHelper';

export interface TextareaDefaultProps {
  variant?: TextareaVariants;
  color?: TextareaColors;
  valid?: boolean;
  invalid?: boolean;
  label?: ReactNode;
  startAdornment?: ReactNode;
  endAdornment?: ReactNode;
  labelPosition?: string;
  rootProps?: BaseHTMLAttributes<HTMLDivElement>;
  containerProps?: FieldsetHTMLAttributes<HTMLFieldSetElement>;
  legendProps?: BaseHTMLAttributes<HTMLLegendElement>;
  labelProps?: LabelHTMLAttributes<HTMLLabelElement>;
}

export interface TextareaProps
  extends TextareaDefaultProps,
  TextareaHTMLAttributes<HTMLTextAreaElement> {
  textareaRef?: MutableRefObject<HTMLTextAreaElement | undefined>;
}

const Textarea = forwardRef<HTMLDivElement, TextareaProps>(
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
      rootProps,
      containerProps,
      legendProps,
      labelProps,
      onFocus: onTextareaFocus,
      onBlur: onTextareaBlur,
      autoFocus: textareaAutoFocus,
      disabled: isTextareaDisabled,
      value: textareaValue,
      className: textareaClassName,
      textareaRef,
      ...restTextareaProps
    },
    rootRef
  ) => {
    const textareaFocusRef = useRef<HTMLTextAreaElement | null>(null);
    const { theme, config } = useContext(themeContext);
    const { defaultProps, styles } = config.textarea;
    const rootStyles = styles.root;
    const containerStyles = styles.container;
    const textareaStyles = styles.textarea;
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
      (textareaValue !== undefined && textareaValue !== '') ||
        (textareaAutoFocus === true && isTextareaDisabled === false)
    );
    const [isFocused, setIsFocused] = useState(
      textareaAutoFocus === true && isTextareaDisabled === false
    );

    useEffect(() => {
      if (textareaValue === '') {
        setIsShifted(false);
      }
    }, [textareaValue]);

    /* Set root props */
    const {
      className: rootClassName,
      onMouseDown: onRootMouseDown,
      ...restRootProps
    } = rootProps;

    const rootMouseDownHandler: MouseEventHandler<HTMLDivElement> = (event) => {
      event.preventDefault();
      textareaFocusRef.current?.focus();

      if (onRootMouseDown !== undefined) {
        onRootMouseDown(event);
      }
    };

    const mergedRootClassName = twMerge(
      mergeClasses(
        rootStyles.base,
        rootStyles.variants[variant],
        isFocused && rootStyles.focused,
        isShifted && rootStyles.shifted,
        rootClassName
      )
    );

    /* Set textarea props */
    const focusTextareaHandler: FocusEventHandler<HTMLTextAreaElement> = (
      event
    ) => {
      setIsShifted(true);
      setIsFocused(true);

      if (onTextareaFocus !== undefined) {
        onTextareaFocus(event);
      }
    };

    const blurTextareaHandler: FocusEventHandler<HTMLTextAreaElement> = (
      event
    ) => {
      if (event.target.value !== '') {
        setIsFocused(false);
      } else {
        setIsShifted(false);
        setIsFocused(false);
      }

      if (onTextareaBlur !== undefined) {
        onTextareaBlur(event);
      }
    };

    const mergedTextareaClassName = twMerge(
      mergeClasses(
        textareaStyles.base,
        (isTextareaDisabled === true || (!valid && !invalid)) &&
          textareaStyles.colors[theme][color],
        valid && isTextareaDisabled !== true && textareaStyles.valid[theme],
        invalid && isTextareaDisabled !== true && textareaStyles.invalid[theme],
        textareaClassName
      )
    );

    const setTextareaRef: (element: HTMLTextAreaElement) => void = (
      element
    ) => {
      textareaFocusRef.current = element;

      if (textareaRef !== undefined) {
        textareaRef.current = element;
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
        (isTextareaDisabled === true || (!valid && !invalid)) &&
          containerStyles.variants[variant][theme][color],
        valid &&
          isTextareaDisabled !== true &&
          containerStyles.valid[variant][theme],
        invalid &&
          isTextareaDisabled !== true &&
          containerStyles.invalid[variant][theme],
        rootClassName
      )
    );

    /* Set label props */
    if (label !== null) {
      const labelStyles = styles.label;

      labelProps = labelProps ?? defaultProps.labelProps;

      const { className: labelClassName, ...restLabelProps } = labelProps;

      const mergedLabelClassName = twMerge(
        mergeClasses(
          labelStyles.base,
          labelStyles.variants[variant],
          (isTextareaDisabled === true || (!valid && !invalid)) &&
            labelStyles.colors[theme][color],
          startAdornment !== null && labelStyles.startAdornment,
          valid && isTextareaDisabled !== true && labelStyles.valid[theme],
          invalid && isTextareaDisabled !== true && labelStyles.invalid[theme],
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
      const legendStyles = styles.legend;

      legendProps = legendProps ?? defaultProps.legendProps;

      const { className: legendClassName, ...restLegendProps } = legendProps;

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
        ref={rootRef}
        {...restRootProps}
      >
        {startAdornment}
        <textarea
          onFocus={focusTextareaHandler}
          onBlur={blurTextareaHandler}
          autoFocus={textareaAutoFocus}
          disabled={isTextareaDisabled}
          value={textareaValue}
          className={mergedTextareaClassName}
          ref={setTextareaRef}
          {...restTextareaProps}
        />
        <fieldset
          disabled={containerDisabled === true || isTextareaDisabled}
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

Textarea.displayName = 'Textarea';

export default Textarea;
