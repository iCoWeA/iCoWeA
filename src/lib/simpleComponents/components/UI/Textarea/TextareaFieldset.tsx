import React, { forwardRef, useContext, type FieldsetHTMLAttributes } from 'react';
import themeContext from '../../../contexts/theme';
import textareaConfig from '../../../configs/textareaConfig';
import { mergeClasses } from '../../../utils/propsHelper';

interface TextareaFieldsetProps extends FieldsetHTMLAttributes<HTMLFieldSetElement> {
  variant: InputVariants;
  color: Colors;
  valid: boolean;
  invalid: boolean;
}

const TextareaFieldset = forwardRef<HTMLFieldSetElement, TextareaFieldsetProps>(({ variant, color, valid, invalid, className, ...restProps }, ref) => {
  /* --- Set context props --- */
  const theme = useContext(themeContext).theme;

  /* --- Set default props --- */
  const styles = textareaConfig.styles.fieldset;

  /* --- Set props --- */
  const mergedClassName = mergeClasses(
    styles.base,
    styles.sizes[variant],
    !valid && !invalid && styles.variants[variant][theme][color],
    valid && styles.valid[variant][theme],
    invalid && styles.invalid[variant][theme],
    className
  );

  return (
    <fieldset
      className={mergedClassName}
      ref={ref}
      {...restProps}
    />
  );
});

TextareaFieldset.displayName = 'TextareaFieldset';

export default TextareaFieldset;
