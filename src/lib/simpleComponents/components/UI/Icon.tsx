import React, { type SVGAttributes, forwardRef, useContext } from 'react';
import iconConfig from '../../configs/iconConfig';
import themeContext from '../../contexts/theme';
import { mergeClasses } from '../../utils/utils';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: Sizes;
  variant?: TextVariants;
  color?: Colors;
}

const Icon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
  /* --- Set context props --- */
  const theme = useContext(themeContext).theme;

  /* --- Set default props --- */
  const styles = iconConfig.styles;
  const { size, variant, color, className, ...restProps } = { ...iconConfig.defaultProps, ...props };

  /* --- Set props --- */
  const mergedClassName = mergeClasses(
    styles.base,
    size !== undefined && styles.sizes[size],
    variant !== undefined && styles.variants[variant][theme][color],
    className
  );

  return (
    <svg
      className={mergedClassName}
      ref={ref}
      {...restProps}
    />
  );
});

Icon.displayName = 'Icon';

export default Icon;
