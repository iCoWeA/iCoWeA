import React, { type FieldsetHTMLAttributes, forwardRef, useContext } from 'react';
import selectConfig from '../../../configs/selectConfig';
import themeContext from '../../../contexts/theme';
import { mergeClasses } from '../../../utils/propsHelper';

interface SelectFieldsetProps extends FieldsetHTMLAttributes<HTMLFieldSetElement> {
  variant: InputVariants;
  color: Colors;
  valid: boolean;
  invalid: boolean;
}

const SelectFieldset = forwardRef<HTMLFieldSetElement, SelectFieldsetProps>(({ variant, color, valid, invalid, className, ...restProps }, ref) => {
  /* --- Set context props --- */
  const theme = useContext(themeContext).theme;

  /* --- Set default props --- */
  const styles = selectConfig.styles.fieldset;

  /* --- Set props --- */
  const mergedClassName = mergeClasses(
    styles.base,
    styles.variants[variant],
    !valid && !invalid && styles.colors[theme][color],
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

SelectFieldset.displayName = 'SelectFieldset';

export default SelectFieldset;
