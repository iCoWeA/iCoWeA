import React, { forwardRef, useContext, type SVGAttributes } from 'react';
import { type IconColors, type IconSizes } from '../../configs/iconConfig';
import themeContext from '../../contexts/theme';
import { mergeClasses, setDefaultProps } from '../../utils/propsHelper';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: IconSizes;
  color?: IconColors;
  viewBox?: string;
  className?: string;
}

const Icon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
  const { theme, config } = useContext(themeContext);
  const { defaultProps, styles } = config.icon;
  const { size, color, viewBox, className, ...restProps } = setDefaultProps(props, defaultProps);

  /* Set props */
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
