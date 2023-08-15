import React, { forwardRef, useContext, type SVGAttributes } from 'react';
import { type IconDefaultProps } from '../../configs/iconConfig';
import themeContext from '../../contexts/theme';
import { mergeClasses, setDefaultProps } from '../../utils/propsHelper';

export interface IconProps extends IconDefaultProps, SVGAttributes<SVGSVGElement> {}

const Icon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
  const { theme, config } = useContext(themeContext);
  const { defaultProps, styles } = config.icon;
  const { size, color, viewBox = '0 0 24 24', className, ...restProps } = setDefaultProps(props, defaultProps);

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
