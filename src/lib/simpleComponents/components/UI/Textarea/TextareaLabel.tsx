import React, { forwardRef, useContext, type LabelHTMLAttributes } from 'react';
import textareaConfig, { type TextareaVariants } from '../../../configs/textareaConfig';
import themeContext from '../../../contexts/theme';
import { mergeClasses } from '../../../utils/propsHelper';

interface TextareaLabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  variant: TextareaVariants;
  color: Colors;
  valid: boolean;
  invalid: boolean;
}

const TextareaLabel = forwardRef<HTMLLabelElement, TextareaLabelProps>(({ variant, color, valid, invalid, style, className, ...restProps }, ref) => {
  /* --- Set context props --- */
  const theme = useContext(themeContext).theme;

  /* --- Set default props --- */
  const styles = textareaConfig.styles.label;

  /* --- Set props --- */
  const mergedClassName = mergeClasses(
    styles.base,
    styles.sizeVariants[variant],
    !valid && !invalid && styles.colors[theme][color],
    valid && styles.valid[theme],
    invalid && styles.invalid[theme],
    className
  );

  return (
    <label
      className={mergedClassName}
      ref={ref}
      {...restProps}
    />
  );
});

TextareaLabel.displayName = 'TextareaLabel';

export default TextareaLabel;
