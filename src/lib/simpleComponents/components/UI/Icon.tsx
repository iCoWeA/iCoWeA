import React, { forwardRef, useContext, type SVGAttributes } from 'react';
import { type IconColors, type IconSizes } from '../../configs/iconConfig';
import themeContext from '../../contexts/theme';
import { twMerge } from 'tailwind-merge';
import { mergeClasses } from '../../utils/styleHelper';

export interface IconDefaultProps {
  size?: IconSizes;
  color?: IconColors;
}

export interface IconProps
  extends IconDefaultProps,
  SVGAttributes<SVGSVGElement> {}

const Icon = forwardRef<SVGSVGElement, IconProps>(
  ({ size, color, viewBox = '0 0 24 24', className, ...restProps }, ref) => {
    const { theme, config } = useContext(themeContext);
    const { defaultProps, styles } = config.icon;

    size = size ?? defaultProps.size;
    color = color ?? defaultProps.color;

    const mergedClassName = twMerge(
      mergeClasses(
        styles.base,
        styles.sizes[size],
        styles.colors[theme][color],
        className
      )
    );

    return (
      <svg
        viewBox={viewBox}
        className={mergedClassName}
        ref={ref}
        {...restProps}
      />
    );
  }
);

Icon.displayName = 'Icon';

export default Icon;
