import React, {
  type BaseHTMLAttributes,
  type FieldsetHTMLAttributes,
  type TextareaHTMLAttributes,
  type LabelHTMLAttributes,
  type MutableRefObject,
  type ReactNode,
  forwardRef,
  useContext,
  useRef
} from 'react';
import textAreaConfig from '../../../configs/textAreaConfig';
import { mergeClasses } from '../../../utils/propsHelper';
import themeContext from '../../../contexts/theme';
import TextAreaFieldset from './TextAreaFieldset';
import TextAreaLabel from './TextAreaLabel';
import TextAreaLegend from './TextAreaLegend';

export interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
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
  textAreaRef?: MutableRefObject<HTMLTextAreaElement> | null;
}

const TextArea = forwardRef<HTMLFieldSetElement, TextAreaProps>((props, ref) => {
  /* --- Set context props --- */
  const theme = useContext(themeContext).theme;

  /* --- Set default props --- */
  const styles = textAreaConfig.styles.textArea;
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
    textAreaRef,
    disabled,
    value,
    className,
    ...restProps
  } = { ...textAreaConfig.defaultProps, ...props };

  /* --- Set refs --- */
  const componentRef = useRef<HTMLTextAreaElement | null>(null);

  /* --- Set props --- */
  const setRef = (element: HTMLTextAreaElement): void => {
    componentRef.current = element;

    if (textAreaRef !== undefined && textAreaRef !== null) {
      textAreaRef.current = element;
    }
  };

  const mergedClassName = mergeClasses(
    styles.base,
    !valid && !invalid && styles.colors[theme][color],
    valid && styles.valid[theme],
    invalid && styles.invalid[theme],
    className
  );

  /* --- Set label props --- */
  let labelNode = label;

  if (labelNode !== undefined) {
    labelNode = (
      <TextAreaLabel
        variant={variant}
        color={color}
        valid={valid}
        invalid={invalid}
        {...labelProps}
      >
        {label}
      </TextAreaLabel>
    );
  }

  /* --- Set legend props --- */
  let legendNode: ReactNode;

  if (labelNode !== undefined && variant === 'outlined') {
    legendNode = <TextAreaLegend {...legendProps}>{label}</TextAreaLegend>;
  }

  return (
    <TextAreaFieldset
      variant={variant}
      color={color}
      valid={valid}
      invalid={invalid}
      textAreaRef={componentRef}
      disabled={disabled}
      ref={ref}
      {...fieldsetProps}
    >
      <textarea
        disabled={disabled}
        value={value}
        className={mergedClassName}
        ref={setRef}
        {...restProps}
      />
      {labelNode}
      {legendNode}
    </TextAreaFieldset>
  );
});

TextArea.displayName = 'TextArea';

export default TextArea;
