import React, { type BaseHTMLAttributes, forwardRef, useContext } from 'react';
import boxConfig from '../../configs/boxConfig';
import themeContext from '../../contexts/theme';
import { mergeClasses } from '../../utils/utils';

export interface BoxProps extends BaseHTMLAttributes<HTMLDivElement> {
  layout?: BoxLayouts;
  gap?: Sizes;
  variant?: Variants;
  color?: Colors;
  elevated?: boolean;
  outlined?: TextVariants;
}

const Box = forwardRef<HTMLDivElement, BoxProps>((props, ref) => {
  /* --- Set context props --- */
  const theme = useContext(themeContext).theme;

  /* --- Set default props --- */
  const styles = boxConfig.styles;
  const { layout, gap, variant, color, elevated, outlined, className, ...restProps } = { ...boxConfig.defaultProps, ...props };

  /* --- Set props --- */
  const mergedClassName = mergeClasses(
    styles.layouts[layout],
    gap !== undefined && styles.gaps[gap],
    variant !== undefined && variant === 'text' && styles.text[theme],
    variant !== undefined && variant !== 'text' && variant !== 'plain' && styles.variants[variant][theme][color],
    elevated && styles.elevated,
    outlined !== undefined && styles.outlined[outlined][theme][color],
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
