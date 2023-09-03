import React, { forwardRef, useContext, type LabelHTMLAttributes } from 'react';
import selectConfig, { type SelectVariants } from '../../../configs/selectConfig';
import themeContext from '../../../contexts/theme';
import { mergeClasses } from '../../../utils/propsHelper';

interface SelectLabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  variant: SelectVariants;
  color: Colors;
  valid: boolean;
  invalid: boolean;
}

const SelectLabel = forwardRef<HTMLLabelElement, SelectLabelProps>(({ variant, color, valid, invalid, style, className, ...restProps }, ref) => {
  /* --- Set context props --- */
  const theme = useContext(themeContext).theme;

  /* --- Set default props --- */
  const styles = selectConfig.styles.label;

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

SelectLabel.displayName = 'SelectLabel';

export default SelectLabel;
