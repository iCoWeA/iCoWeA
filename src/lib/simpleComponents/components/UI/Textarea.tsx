import React, {
  forwardRef,
  useContext,
  type MutableRefObject,
  type ReactNode,
  type FieldsetHTMLAttributes,
  useState,
  useEffect,
  type BaseHTMLAttributes,
  type LabelHTMLAttributes,
  useRef,
  useImperativeHandle,
  type RefObject,
  type TextareaHTMLAttributes,
  type MouseEvent,
  type FocusEvent
} from 'react';
import {
  type TextAreaColors,
  type TextAreaVariants
} from '../../configs/textAreaConfig';
import themeContext from '../../contexts/theme';
import { twMerge } from 'tailwind-merge';
import { mergeClasses } from '../../utils/styleHelper';

export interface TextAreaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  variant?: TextAreaVariants;
  color?: TextAreaColors;
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
      componentsProps,
      onFocus: onTextAreaFocus,
      onBlur: onTextAreaBlur,
      autoFocus: textAreaAutoFocus,
      disabled: textAreaDisabled,
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
    const {
      defaultProps,
      styles: {
        root: rootStyles,
        container: containerStyles,
        textArea: textAreaStyles,
        label: labelStyles,
        legend: legendStyles
      }
    } = config.textArea;
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
      (textAreaValue !== undefined && textAreaValue !== '') ||
        (textAreaAutoFocus === true && textAreaDisabled === false)
    );
    const [isFocused, setIsFocused] = useState(
      textAreaAutoFocus === true && textAreaDisabled === false
    );

    useEffect(() => {
      if (textAreaValue === '') {
        setIsShifted(false);
      }
    }, [textAreaValue]);

    /* Set root props */
    const {
      onMouseDown: onRootMouseDown,
      className: rootClassName,
      ...restRootProps
    } = componentsProps?.root ?? defaultProps.componentsProps.root;

    const rootMouseDownHandler = (event: MouseEvent<HTMLDivElement>): void => {
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

    /* Set textarea props */
    const focusTextAreaHandler = (
      event: FocusEvent<HTMLTextAreaElement>
    ): void => {
      setIsShifted(true);
      setIsFocused(true);

      if (onTextAreaFocus !== undefined) {
        onTextAreaFocus(event);
      }
    };

    const blurTextAreaHandler = (
      event: FocusEvent<HTMLTextAreaElement>
    ): void => {
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
        (textAreaDisabled === true || (!valid && !invalid)) &&
          textAreaStyles.colors[theme][color],
        valid && textAreaDisabled !== true && textAreaStyles.valid[theme],
        invalid && textAreaDisabled !== true && textAreaStyles.invalid[theme],
        textAreaClassName
      )
    );

    const setTextAreaRef = (element: HTMLTextAreaElement): void => {
      textAreaFocusRef.current = element;

      if (textAreaRef !== undefined) {
        textAreaRef.current = element;
      }
    };

    /* Set container props */
    const {
      disabled: containerDisabled,
      className: containerClassName,
      ...restContainerProps
    } = componentsProps?.container ?? defaultProps.componentsProps.container;

    const isContainerDisabled =
      containerDisabled === undefined ? textAreaDisabled : containerDisabled;

    const mergedContainerClassName = twMerge(
      mergeClasses(
        containerStyles.base,
        (isContainerDisabled === true || (!valid && !invalid)) &&
          containerStyles.variants[variant][theme][color],
        valid &&
          isContainerDisabled !== true &&
          containerStyles.valid[variant][theme],
        invalid &&
          isContainerDisabled !== true &&
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
          (textAreaDisabled === true || (!valid && !invalid)) &&
            labelStyles.colors[theme][color],
          startAdornment !== null && labelStyles.startAdornment,
          valid && textAreaDisabled !== true && labelStyles.valid[theme],
          invalid && textAreaDisabled !== true && labelStyles.invalid[theme],
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
        <textarea
          onFocus={focusTextAreaHandler}
          onBlur={blurTextAreaHandler}
          autoFocus={textAreaAutoFocus}
          disabled={textAreaDisabled}
          value={textAreaValue}
          className={mergedTextAreaClassName}
          ref={setTextAreaRef}
          {...restTextAreaProps}
        />
        <fieldset
          disabled={isContainerDisabled}
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
