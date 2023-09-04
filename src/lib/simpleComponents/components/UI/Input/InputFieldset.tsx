import React, { forwardRef, useContext, type FieldsetHTMLAttributes } from 'react';
import inputConfig from '../../../configs/inputConfig';
import themeContext from '../../../contexts/theme';
import { mergeClasses } from '../../../utils/propsHelper';

interface InputFieldsetProps extends FieldsetHTMLAttributes<HTMLFieldSetElement> {
  variant: InputVariants;
  color: Colors;
  valid: boolean;
  invalid: boolean;
}

const InputFieldset = forwardRef<HTMLFieldSetElement, InputFieldsetProps>(({ variant, color, valid, invalid, className, ...restProps }, ref) => {
  /* --- Set context props --- */
  const theme = useContext(themeContext).theme;

  /* --- Set default props --- */
  const styles = inputConfig.styles.fieldset;

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

InputFieldset.displayName = 'InputFieldset';

export default InputFieldset;
