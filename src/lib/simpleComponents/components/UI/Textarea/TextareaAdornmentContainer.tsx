import React, { forwardRef, type BaseHTMLAttributes, useContext } from 'react';
import themeContext from '../../../contexts/theme';
import textareaConfig from '../../../configs/textareaConfig';
import { mergeClasses } from '../../../utils/propsHelper';

export interface TextareaAdornmentContainerProps extends BaseHTMLAttributes<HTMLDivElement> {
  position: 'start' | 'end';
  variant: InputVariants;
  color: Colors;
  valid: boolean;
  invalid: boolean;
}

const TextareaAdornmentContainer = forwardRef<HTMLDivElement, TextareaAdornmentContainerProps>(
  ({ position, variant, color, valid, invalid, className, children, ...restProps }, ref) => {
    /* --- Set context props --- */
    const theme = useContext(themeContext).theme;

    /* --- Set default props --- */
    const styles = textareaConfig.styles.adornment;

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

TextareaAdornmentContainer.displayName = 'TextareaAdornmentContainer';

export default TextareaAdornmentContainer;
