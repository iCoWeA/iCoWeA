import React, { forwardRef, type BaseHTMLAttributes, useContext } from 'react';
import selectConfig, { type SelectVariants } from '../../../configs/selectConfig';
import themeContext from '../../../contexts/theme';
import { mergeClasses } from '../../../utils/propsHelper';

export interface SelectAdornmentContainerProps extends BaseHTMLAttributes<HTMLDivElement> {
  position: 'start' | 'end';
  variant: SelectVariants;
  color: Colors;
  valid: boolean;
  invalid: boolean;
}

const SelectAdornmentContainer = forwardRef<HTMLDivElement, SelectAdornmentContainerProps>(
  ({ position, variant, color, valid, invalid, className, children, ...restProps }, ref) => {
    /* --- Set context props --- */
    const theme = useContext(themeContext).theme;

    /* --- Set default props --- */
    const styles = selectConfig.styles.adornment;

    /* --- Set props --- */
    const mergedClassName = mergeClasses(
      styles.base,
      styles.sizes[variant],
      !valid && !invalid && styles.variants[variant][theme][color],
      valid && styles.valid[variant][theme],
      invalid && styles.invalid[variant][theme],
      position === 'start' && styles.start,
      position === 'end' && styles.end,
      position === 'start' && children !== undefined && styles.rightGap,
      position === 'end' && children !== undefined && styles.leftGap,
      className
    );

    return (
      <div
        className={mergedClassName}
        ref={ref}
        {...restProps}
      >
        {children}
      </div>
    );
  }
);

SelectAdornmentContainer.displayName = 'SelectAdornmentContainer';

export default SelectAdornmentContainer;
