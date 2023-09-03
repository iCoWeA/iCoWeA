import React, { forwardRef, useContext, type FieldsetHTMLAttributes } from 'react';
import selectConfig, { type SelectVariants } from '../../../configs/selectConfig';
import themeContext from '../../../contexts/theme';
import { mergeClasses } from '../../../utils/propsHelper';

interface SelectFieldsetProps extends FieldsetHTMLAttributes<HTMLFieldSetElement> {
  variant: SelectVariants;
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

SelectFieldset.displayName = 'SelectFieldset';

export default SelectFieldset;
