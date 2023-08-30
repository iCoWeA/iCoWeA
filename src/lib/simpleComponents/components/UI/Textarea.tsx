import React, {
  forwardRef,
  useContext,
  type ReactNode,
  useState,
  useRef,
  useImperativeHandle,
  type FocusEvent,
  type TextareaHTMLAttributes,
  useCallback,
  type BaseHTMLAttributes,
  type FieldsetHTMLAttributes,
  type FocusEventHandler,
  type LabelHTMLAttributes,
  type MutableRefObject,
  useEffect
} from 'react';
import { type TextAreaVariants } from '../../configs/textAreaConfig';
import themeContext from '../../contexts/theme';
import useOutsideClick from '../../hooks/useOutsideClick';
import { mergeClasses, mergeProps } from '../../utils/propsHelper';

export interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  variant?: TextAreaVariants;
  color?: Colors;
  valid?: boolean;
  invalid?: boolean;
  label?: ReactNode;
  containerProps?: BaseHTMLAttributes<HTMLDivElement>;
  fieldsetProps?: FieldsetHTMLAttributes<HTMLFieldSetElement>;
  legendProps?: BaseHTMLAttributes<HTMLLegendElement>;
  labelProps?: LabelHTMLAttributes<HTMLLabelElement>;
  textAreaRef?: MutableRefObject<HTMLTextAreaElement> | null;
  onFocus?: FocusEventHandler<HTMLTextAreaElement>;
  autoFocus?: boolean;
  disabled?: boolean;
  value?: string;
  className?: string;
}

const TextArea = forwardRef<HTMLDivElement, TextAreaProps>((textAreaProps, containerRef) => {
  const { theme, config } = useContext(themeContext);
  const { defaultProps, styles } = config.textArea;
  const {
    variant,
    color,
    valid,
    invalid,
    label,
    containerProps,
    fieldsetProps,
    legendProps,
    labelProps,
    textAreaRef,
    onFocus: onTextAreaFocus,
    autoFocus: textAreaAutoFocus,
    disabled: textAreaDisabled,
    value: textAreaValue,
    className: textAreaClassName,
    ...restTextAreaProps
  } = mergeProps(defaultProps, textAreaProps);
  let labelNode: ReactNode;

  const componentsRef = useRef<{ container: HTMLDivElement | null; textArea: HTMLTextAreaElement | null }>({ container: null, textArea: null });

  useImperativeHandle<HTMLDivElement | null, HTMLDivElement | null>(containerRef, () => componentsRef.current.container, []);

  const [isShifted, setIsShifted] = useState(textAreaValue !== '' || (textAreaAutoFocus && !textAreaDisabled));
  const [isFocused, setIsFocused] = useState(textAreaAutoFocus && !textAreaDisabled);

  const outsideClickHandler = useCallback((event: MouseEvent) => {
    if (componentsRef.current.container?.contains(event.target as Node) ?? false) {
      componentsRef.current.textArea?.focus();
    } else {
      if (componentsRef.current.textArea?.value === '') {
        setIsShifted(false);
        setIsFocused(false);
      } else {
        setIsFocused(false);
      }
    }
  }, []);

  useOutsideClick(outsideClickHandler);

  useEffect(() => {
    if (textAreaValue !== '') {
      setIsShifted(true);
    }

    if (textAreaValue === '' && !isFocused) {
      setIsShifted(false);
    }

    if (textAreaAutoFocus) {
      setIsShifted(true);
      setIsFocused(true);
    }
  }, [textAreaValue, isFocused, textAreaAutoFocus]);

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

  /* Set textArea props */
  const textAreaStyles = styles.textArea;
  const focusTextAreaHandler = (event: FocusEvent<HTMLTextAreaElement>): void => {
    setIsShifted(true);
    setIsFocused(true);

    if (onTextAreaFocus !== undefined) {
      onTextAreaFocus(event);
    }
  };

  const setTextAreaRef = (element: HTMLTextAreaElement): void => {
    componentsRef.current.textArea = element;

    if (textAreaRef !== undefined && textAreaRef !== null) {
      textAreaRef.current = element;
    }
  };

  const mergedTextAreaClassName = mergeClasses(
    textAreaStyles.base,
    textAreaStyles.variants[variant],
    !valid && !invalid && textAreaStyles.colors[theme][color],
    valid && textAreaStyles.valid[theme],
    invalid && textAreaStyles.invalid[theme],
    textAreaClassName
  );

  /* Set fieldset props */
  const fieldsetStyles = styles.fieldset;
  const { disabled: fieldsetDisabled = textAreaDisabled, className: fieldsetClassName, ...restFieldsetProps } = fieldsetProps;

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
      <textarea
        onFocus={focusTextAreaHandler}
        autoFocus={textAreaAutoFocus}
        disabled={textAreaDisabled}
        value={textAreaValue}
        className={mergedTextAreaClassName}
        ref={setTextAreaRef}
        {...restTextAreaProps}
      />
      <fieldset
        disabled={fieldsetDisabled}
        className={mergedFieldsetClassName}
        {...restFieldsetProps}
      >
        {labelNode}
      </fieldset>
    </div>
  );
});

TextArea.displayName = 'TextArea';

export default TextArea;
