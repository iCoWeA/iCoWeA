import React, { forwardRef, useContext, type FieldsetHTMLAttributes, type MutableRefObject, type MouseEvent } from 'react';
import themeContext from '../../../contexts/theme';
import textAreaConfig from '../../../configs/textAreaConfig';
import { mergeClasses } from '../../../utils/propsHelper';

interface TextAreaFieldsetProps extends FieldsetHTMLAttributes<HTMLFieldSetElement> {
  variant: InputVariants;
  color: Colors;
  valid: boolean;
  invalid: boolean;
  textAreaRef: MutableRefObject<HTMLTextAreaElement | null>;
  disabled: boolean;
}

const TextAreaFieldset = forwardRef<HTMLFieldSetElement, TextAreaFieldsetProps>(
  ({ variant, color, valid, invalid, textAreaRef, onClick, disabled, className, ...restProps }, ref) => {
    /* --- Set context props --- */
    const theme = useContext(themeContext).theme;

    /* --- Set default props --- */
    const styles = textAreaConfig.styles.fieldset;
    const shift = typeof textAreaRef.current?.value === 'string' && textAreaRef.current?.value !== '';

    /* --- Set props --- */
    const clickHandler = (event: MouseEvent<HTMLFieldSetElement>): void => {
      textAreaRef.current?.focus();

      if (onClick !== undefined) {
        onClick(event);
      }
    };

    const mergedClassName = mergeClasses(
      styles.base,
      shift && styles.shift,
      styles.variants[variant],
      variant === 'filled' && styles.bgColors[theme],
      !valid && !invalid && styles.colors[theme][color],
      valid && styles.valid[theme],
      invalid && styles.invalid[theme],
      disabled && styles.disabledColors[theme],
      className
    );

    return (
      <fieldset
        onClick={clickHandler}
        tabIndex={1}
        className={mergedClassName}
        ref={ref}
        {...restProps}
      />
    );
  }
);

TextAreaFieldset.displayName = 'TextAreaFieldset';

export default TextAreaFieldset;
