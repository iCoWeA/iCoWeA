import React, { type BaseHTMLAttributes, forwardRef, useContext } from 'react';
import boxConfig from '../../configs/boxConfig';
import themeContext from '../../contexts/theme';
import { mergeClasses } from '../../utils/utils';

export interface BoxProps extends BaseHTMLAttributes<HTMLDivElement> {
  layout?: BoxLayouts;
  gap?: Sizes;
  variant?: BoxVariants;
  color?: Colors;
}

const Box = forwardRef<HTMLDivElement, BoxProps>((props, ref) => {
  /* --- Set context props --- */
  const theme = useContext(themeContext).theme;

  /* --- Set default props --- */
  const styles = boxConfig.styles;
  const { layout, gap, variant, color, className, ...restProps } = { ...boxConfig.defaultProps, ...props };

  /* --- Set props --- */
  const mergedClassName = mergeClasses(
    styles.layouts[layout],
    gap !== undefined && styles.gaps[gap],
    variant !== undefined && styles.variants[variant][theme][color],
    className
  );

  return (
    <div
      className={mergedClassName}
      ref={ref}
      {...restProps}
    />
  );
});

Box.displayName = 'Box';

export default Box;
