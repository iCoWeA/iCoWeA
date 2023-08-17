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
  type MutableRefObject
} from 'react';
import { type TextAreaColors, type TextAreaVariants } from '../../configs/textAreaConfig';
import themeContext from '../../contexts/theme';
import useOutsideClick from '../../hooks/useOutsideClick';
import { mergeClasses, setDefaultProps } from '../../utils/propsHelper';

export interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  variant?: TextAreaVariants;
  color?: TextAreaColors;
  valid?: boolean;
  invalid?: boolean;
  label?: ReactNode;
  rootProps?: BaseHTMLAttributes<HTMLDivElement>;
  containerProps?: FieldsetHTMLAttributes<HTMLFieldSetElement>;
  legendProps?: BaseHTMLAttributes<HTMLLegendElement>;
  labelProps?: LabelHTMLAttributes<HTMLLabelElement>;
  textAreaRef?: MutableRefObject<HTMLTextAreaElement> | null;
  onFocus?: FocusEventHandler<HTMLTextAreaElement>;
  autoFocus?: boolean;
  disabled?: boolean;
  value?: string;
  className?: string;
}

const TextArea = forwardRef<HTMLDivElement, TextAreaProps>((textAreaProps, rootRef) => {
  const { theme, config } = useContext(themeContext);
  const { defaultProps, styles } = config.textArea;
  const {
    variant,
    color,
    valid,
    invalid,
    label,
    rootProps,
    containerProps,
    legendProps,
    labelProps,
    textAreaRef,
    onFocus: onTextAreaFocus,
    autoFocus: textAreaAutoFocus,
    disabled: textAreaDisabled,
    value: textAreaValue,
    className: textAreaClassName,
    ...restTextAreaProps
  } = setDefaultProps(textAreaProps, defaultProps);
  let labelNode: ReactNode;

  const componentsRefs = useRef<{ root: HTMLDivElement | null; textArea: HTMLTextAreaElement | null }>({ root: null, textArea: null });

  useImperativeHandle<HTMLDivElement | null, HTMLDivElement | null>(rootRef, () => componentsRefs.current.root, []);

  const [isShifted, setIsShifted] = useState(textAreaValue !== '' || (textAreaAutoFocus && !textAreaDisabled));
  const [isFocused, setIsFocused] = useState(textAreaAutoFocus && !textAreaDisabled);

  /* Set root props */
  const rootStyles = styles.root;
  const { className: rootClassName, ...restRootProps } = rootProps;

  const outsideRootClickHandler = useCallback(() => {
    if (componentsRefs.current.textArea?.value === '') {
      setIsShifted(false);
      setIsFocused(false);
    } else {
      setIsFocused(false);
    }
  }, []);

  const insideRootClickHandler = useCallback(() => {
    componentsRefs.current.textArea?.focus();
  }, []);

  useOutsideClick(componentsRefs.current.root, outsideRootClickHandler, insideRootClickHandler);

  const setRootRef = (element: HTMLDivElement): void => {
    componentsRefs.current.root = element;
  };

  const mergedRootClassName = mergeClasses(rootStyles.base, isFocused && rootStyles.focused, isShifted && rootStyles.shifted, rootClassName);

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
    componentsRefs.current.textArea = element;

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

  /* Set container props */
  const containerStyles = styles.container;
  const { disabled: containerDisabled = textAreaDisabled, className: containerClassName, ...restContainerProps } = containerProps;

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
        disabled={containerDisabled}
        className={mergedContainerClassName}
        {...restContainerProps}
      >
        {labelNode}
      </fieldset>
    </div>
  );
});

TextArea.displayName = 'TextArea';

export default TextArea;
