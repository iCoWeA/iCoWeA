import React, { type BaseHTMLAttributes, forwardRef, useContext } from 'react';
import themeContext from '../../../contexts/theme';
import badgeConfig, { type BadgePosition } from '../../../configs/badgeConfig';
import { mergeClasses } from '../../../utils/propsHelper';

export interface BadgeProps extends BaseHTMLAttributes<HTMLSpanElement> {
  position?: BadgePosition;
  color?: Colors;
  withBorder?: boolean;
  borderColor?: Colors;
  invisible?: boolean;
  className?: string;
}

const Badge = forwardRef<HTMLSpanElement, BadgeProps>((props, ref) => {
  /* --- Set context props --- */
  const theme = useContext(themeContext).theme;

  /* --- Set default props --- */
  const styles = badgeConfig.styles;
  const { position, color, withBorder, borderColor, invisible, className, ...restProps } = { ...badgeConfig.defaultProps, ...props };

  /* --- Set props --- */
  const mergedClassName = mergeClasses(
    styles.base,
    styles.positions[position.horizontal],
    styles.positions[position.vertical],
    styles.colors[theme][color],
    withBorder && styles.withBorder,
    withBorder && styles.borderColors[theme][borderColor],
    invisible && styles.invisible,
    className
  );

  return (
    <span
      className={mergedClassName}
      ref={ref}
      {...restProps}
    />
  );
});

Badge.displayName = 'Badge';

export default Badge;