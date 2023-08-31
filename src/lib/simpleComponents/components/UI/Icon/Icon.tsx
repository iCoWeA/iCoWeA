import React, { forwardRef, useContext, type SVGAttributes } from 'react';
import iconConfig, { type IconSizes } from '../../../configs/iconConfig';
import themeContext from '../../../contexts/theme';
import { mergeClasses, mergeProps } from '../../../utils/propsHelper';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: IconSizes;
  color?: Colors;
  viewBox?: string;
  className?: string;
}

const Icon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
  /* --- Set context props --- */
  const { theme } = useContext(themeContext);

  /* --- Set default props --- */
  const { defaultProps, styles } = iconConfig;
  const { size, color, viewBox, className, ...restProps } = mergeProps(defaultProps, props);

  /* --- Set props --- */
  const mergedClassName = mergeClasses(styles.base, styles.sizes[size], styles.colors[theme][color], className);

  return (
    <svg
      viewBox={viewBox}
      className={mergedClassName}
      ref={ref}
      {...restProps}
    />
  );
});

Icon.displayName = 'Icon';

export default Icon;
