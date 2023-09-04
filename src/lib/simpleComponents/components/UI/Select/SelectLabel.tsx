import React, { forwardRef, useContext, type LabelHTMLAttributes } from 'react';
import themeContext from '../../../contexts/theme';
import selectConfig from '../../../configs/selectConfig';
import { mergeClasses } from '../../../utils/propsHelper';

interface SelectLabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  open: boolean;
  variant: InputVariants;
  color: Colors;
  valid: boolean;
  invalid: boolean;
  transitionConfig: { enterDuration: number; exitDuration: number };
}

const SelectLabel = forwardRef<HTMLLabelElement, SelectLabelProps>(
  ({ open, variant, color, valid, invalid, transitionConfig, style, className, ...restProps }, ref) => {
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

    const mergedStyle = { transitionDuration: `${open ? transitionConfig.enterDuration : transitionConfig.exitDuration}ms`, ...style };

    return (
      <label
        style={mergedStyle}
        className={mergedClassName}
        ref={ref}
        {...restProps}
      />
    );
  }
);

SelectLabel.displayName = 'SelectLabel';

export default SelectLabel;
