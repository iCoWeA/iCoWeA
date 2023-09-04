import React, { forwardRef, useContext, type FieldsetHTMLAttributes } from 'react';
import themeContext from '../../../contexts/theme';
import selectConfig from '../../../configs/selectConfig';
import { mergeClasses } from '../../../utils/propsHelper';

interface SelectFieldsetProps extends FieldsetHTMLAttributes<HTMLFieldSetElement> {
  open: boolean;
  variant: InputVariants;
  color: Colors;
  valid: boolean;
  invalid: boolean;
  transitionConfig: { enterDuration: number; exitDuration: number };
}

const SelectFieldset = forwardRef<HTMLFieldSetElement, SelectFieldsetProps>(
  ({ open, variant, color, valid, invalid, transitionConfig, style, className, ...restProps }, ref) => {
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

    const mergedStyle = { transitionDuration: `${open ? transitionConfig.enterDuration : transitionConfig.exitDuration}ms`, ...style };

    return (
      <fieldset
        style={mergedStyle}
        className={mergedClassName}
        ref={ref}
        {...restProps}
      />
    );
  }
);

SelectFieldset.displayName = 'SelectFieldset';

export default SelectFieldset;
