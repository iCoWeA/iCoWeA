import React, { type BaseHTMLAttributes, forwardRef, useContext } from 'react';
import inputConfig from '../../../configs/inputConfig';
import themeContext from '../../../contexts/theme';
import { mergeClasses } from '../../../utils/propsHelper';

export interface InputAdornmentContainerProps extends BaseHTMLAttributes<HTMLDivElement> {
  position: 'start' | 'end';
  variant: InputVariants;
  color: Colors;
  valid: boolean;
  invalid: boolean;
}

const InputAdornmentContainer = forwardRef<HTMLDivElement, InputAdornmentContainerProps>(
  ({ position, variant, color, valid, invalid, className, children, ...restProps }, ref) => {
    /* --- Set context props --- */
    const theme = useContext(themeContext).theme;

    /* --- Set default props --- */
    const styles = inputConfig.styles.adornmentContainer;

    /* --- Set props --- */
    const mergedClassName = mergeClasses(
      styles.base,
      styles.variants[variant],
      !valid && !invalid && styles.colors[theme][color],
      valid && styles.valid[theme],
      invalid && styles.invalid[theme],
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

InputAdornmentContainer.displayName = 'InputAdornmentContainer';

export default InputAdornmentContainer;
