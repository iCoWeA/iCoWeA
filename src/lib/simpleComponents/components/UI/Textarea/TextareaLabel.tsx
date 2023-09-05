import React, { forwardRef, useContext, type LabelHTMLAttributes } from 'react';
import themeContext from '../../../contexts/theme';
import textAreaConfig from '../../../configs/textAreaConfig';
import { mergeClasses } from '../../../utils/propsHelper';

interface TextAreaLabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  variant: InputVariants;
  color: Colors;
  valid: boolean;
  invalid: boolean;
}

const TextAreaLabel = forwardRef<HTMLLabelElement, TextAreaLabelProps>(({ variant, color, valid, invalid, className, ...restProps }, ref) => {
  /* --- Set context props --- */
  const theme = useContext(themeContext).theme;

  /* --- Set default props --- */
  const styles = textAreaConfig.styles.label;

  /* --- Set props --- */
  const mergedClassName = mergeClasses(
    styles.base,
    styles.sizes[variant],
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

TextAreaLabel.displayName = 'TextAreaLabel';

export default TextAreaLabel;
