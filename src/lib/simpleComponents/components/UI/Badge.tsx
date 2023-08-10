import React, { type BaseHTMLAttributes, forwardRef, useContext } from 'react';
import {
  type BadgeColors,
  type BadgeBorderColors
} from '../../configs/badgeConfig';
import themeContext from '../../contexts/theme';
import { twMerge } from 'tailwind-merge';
import { mergeClasses } from '../../utils/styleHelper';

export interface BadgeDefaultProps {
  position?: { vertical: 'top' | 'bottom'; horizontal: 'left' | 'right' };
  color?: BadgeColors;
  withBorder?: boolean;
  borderColor?: BadgeBorderColors;
  invisible?: boolean;
}

export interface BadgeProps
  extends BadgeDefaultProps,
  BaseHTMLAttributes<HTMLSpanElement> {}

const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  (
    {
      position,
      color,
      withBorder,
      borderColor,
      invisible,
      className,
      ...restProps
    },
    ref
  ) => {
    const { theme, config } = useContext(themeContext);
    const { defaultProps, styles } = config.badge;

    position = position ?? defaultProps.position;
    color = color ?? defaultProps.color;
    withBorder = withBorder ?? defaultProps.withBorder;
    borderColor = borderColor ?? defaultProps.borderColor;
    invisible = invisible ?? defaultProps.invisible;

    const mergedClassName = twMerge(
      mergeClasses(
        styles.base,
        styles.positions[position.horizontal],
        styles.positions[position.vertical],
        styles.colors[theme][color],
        withBorder && styles.withBorder,
        withBorder && styles.borderColors[theme][borderColor],
        invisible && styles.invisible,
        className
      )
    );

    return (
      <span
        className={mergedClassName}
        ref={ref}
        {...restProps}
      />
    );
  }
);

Badge.displayName = 'Badge';

export default Badge;
