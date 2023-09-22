import React, { type BaseHTMLAttributes, forwardRef, useContext } from 'react';
import dividerConfig from '../../configs/dividerConfig';
import themeContext from '../../contexts/theme';
import { mergeClasses } from '../../utils/propsHelper';

export type DividerVariants = 'plain' | 'text' | 'outlined' | 'filled';

export interface DividerProps extends BaseHTMLAttributes<HTMLHRElement> {
  orientation?: Orientations;
  variant?: DividerVariants;
  color?: Colors;
  disabled?: boolean;
}

const Divider = forwardRef<HTMLHRElement, DividerProps>((props, ref) => {
  /* --- Set context props --- */
  const theme = useContext(themeContext).theme;

  /* --- Set default props --- */
  const styles = dividerConfig.styles;
  const { orientation, variant, color, disabled, className, ...restProps } = { ...dividerConfig.defaultProps, ...props };

  /* --- Set props --- */
  const mergedClassName = mergeClasses(
    styles.base,
    styles.after,
    styles.orientations[orientation],
    color === undefined ? styles.color[theme] : styles.variants[variant][theme][color],
    disabled && styles.disabled[theme],
    className
  );

  return (
    <hr
      className={mergedClassName}
      ref={ref}
      {...restProps}
    />
  );
});

Divider.displayName = 'Divider';

export default Divider;
