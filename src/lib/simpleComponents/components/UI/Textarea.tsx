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
  type MouseEventHandler,
  useImperativeHandle,
  type RefObject
} from 'react';
import {
  type TextAreaColors,
  type TextAreaVariants
} from '../../configs/textAreaConfig';
import themeContext from '../../contexts/theme';
import { twMerge } from 'tailwind-merge';
import { mergeClasses } from '../../utils/styleHelper';

export interface TextAreaDefaultProps {
  variant?: TextAreaVariants;
  color?: TextAreaColors;
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

export interface TextAreaProps
  extends TextAreaDefaultProps,
  TextareaHTMLAttributes<HTMLTextAreaElement> {
  textAreaRef?: MutableRefObject<HTMLTextAreaElement | undefined>;
}

const TextArea = forwardRef<RefObject<HTMLDivElement>, TextAreaProps>(
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
      onFocus: onTextAreaFocus,
      onBlur: onTextAreaBlur,
      autoFocus: textAreaAutoFocus,
      disabled: isTextAreaDisabled,
      value: textAreaValue,
      className: textAreaClassName,
      textAreaRef,
      ...restTextAreaProps
    },
    rootRef
  ) => {
    const rootFocusRef = useRef<HTMLDivElement>(null);
    const textAreaFocusRef = useRef<HTMLTextAreaElement | null>(null);
    const { theme, config } = useContext(themeContext);
    const { defaultProps, styles } = config.textArea;
    const rootStyles = styles.root;
    const containerStyles = styles.container;
    const textAreaStyles = styles.textArea;
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

    useImperativeHandle(rootRef, () => rootFocusRef, []);

    const [isShifted, setIsShifted] = useState(
      (textAreaValue !== undefined && textAreaValue !== '') ||
        (textAreaAutoFocus === true && isTextAreaDisabled === false)
    );
    const [isFocused, setIsFocused] = useState(
      textAreaAutoFocus === true && isTextAreaDisabled === false
    );

    useEffect(() => {
      if (textAreaValue === '') {
        setIsShifted(false);
      }
    }, [textAreaValue]);

    /* Set root props */
    const {
      className: rootClassName,
      onMouseDown: onRootMouseDown,
      ...restRootProps
    } = rootProps;

    const rootMouseDownHandler: MouseEventHandler<HTMLDivElement> = (event) => {
      event.preventDefault();
      if (
        event.target === rootFocusRef.current ||
        event.target === textAreaFocusRef.current
      ) {
        textAreaFocusRef.current?.focus();
      }

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

    /* Set textArea props */
    const focusTextAreaHandler: FocusEventHandler<HTMLTextAreaElement> = (
      event
    ) => {
      setIsShifted(true);
      setIsFocused(true);

      if (onTextAreaFocus !== undefined) {
        onTextAreaFocus(event);
      }
    };

    const blurTextAreaHandler: FocusEventHandler<HTMLTextAreaElement> = (
      event
    ) => {
      if (event.target.value !== '') {
        setIsFocused(false);
      } else {
        setIsShifted(false);
        setIsFocused(false);
      }

      if (onTextAreaBlur !== undefined) {
        onTextAreaBlur(event);
      }
    };

    const mergedTextAreaClassName = twMerge(
      mergeClasses(
        textAreaStyles.base,
        (isTextAreaDisabled === true || (!valid && !invalid)) &&
          textAreaStyles.colors[theme][color],
        valid && isTextAreaDisabled !== true && textAreaStyles.valid[theme],
        invalid && isTextAreaDisabled !== true && textAreaStyles.invalid[theme],
        textAreaClassName
      )
    );

    const setTextAreaRef: (element: HTMLTextAreaElement) => void = (
      element
    ) => {
      textAreaFocusRef.current = element;

      if (textAreaRef !== undefined) {
        textAreaRef.current = element;
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
        (isTextAreaDisabled === true || (!valid && !invalid)) &&
          containerStyles.variants[variant][theme][color],
        valid &&
          isTextAreaDisabled !== true &&
          containerStyles.valid[variant][theme],
        invalid &&
          isTextAreaDisabled !== true &&
          containerStyles.invalid[variant][theme],
        rootClassName
      )
    );

    /* Set label props */
    if (label !== null) {
      labelProps = labelProps ?? defaultProps.labelProps;

      const labelStyles = styles.label;
      const { className: labelClassName, ...restLabelProps } = labelProps;

      const mergedLabelClassName = twMerge(
        mergeClasses(
          labelStyles.base,
          labelStyles.variants[variant],
          (isTextAreaDisabled === true || (!valid && !invalid)) &&
            labelStyles.colors[theme][color],
          startAdornment !== null && labelStyles.startAdornment,
          valid && isTextAreaDisabled !== true && labelStyles.valid[theme],
          invalid && isTextAreaDisabled !== true && labelStyles.invalid[theme],
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
      legendProps = legendProps ?? defaultProps.legendProps;

      const legendStyles = styles.legend;
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
        ref={rootFocusRef}
        {...restRootProps}
      >
        {startAdornment}
        <textarea
          onFocus={focusTextAreaHandler}
          onBlur={blurTextAreaHandler}
          autoFocus={textAreaAutoFocus}
          disabled={isTextAreaDisabled}
          value={textAreaValue}
          className={mergedTextAreaClassName}
          ref={setTextAreaRef}
          {...restTextAreaProps}
        />
        <fieldset
          disabled={containerDisabled === true || isTextAreaDisabled}
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

TextArea.displayName = 'TextArea';

export default TextArea;
