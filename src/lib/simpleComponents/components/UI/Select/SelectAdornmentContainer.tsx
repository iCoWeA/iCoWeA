import React, { forwardRef, type BaseHTMLAttributes, useContext } from 'react';
import themeContext from '../../../contexts/theme';
import selectConfig from '../../../configs/selectConfig';
import { mergeClasses } from '../../../utils/propsHelper';

export interface SelectAdornmentContainerProps extends BaseHTMLAttributes<HTMLDivElement> {
  open: boolean;
  position: 'start' | 'end';
  variant: InputVariants;
  color: Colors;
  valid: boolean;
  invalid: boolean;
  transitionConfig: { enterDuration: number; exitDuration: number };
}

const SelectAdornmentContainer = forwardRef<HTMLDivElement, SelectAdornmentContainerProps>(
  ({ open, position, variant, color, valid, invalid, transitionConfig, style, className, children, ...restProps }, ref) => {
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

    const mergedStyle = { transitionDuration: `${open ? transitionConfig.enterDuration : transitionConfig.exitDuration}ms`, ...style };

    return (
      <div
        style={mergedStyle}
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
