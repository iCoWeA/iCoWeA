import React, { type BaseHTMLAttributes, forwardRef, useContext } from 'react';
import themeContext from '../../contexts/theme';
import { mergeClasses, mergeProps } from '../../utils/propsHelper';

export interface BadgeProps extends BaseHTMLAttributes<HTMLSpanElement> {
  position?: { vertical: 'top' | 'bottom'; horizontal: 'left' | 'right' };
  color?: Colors;
  withBorder?: boolean;
  borderColor?: Colors;
  invisible?: boolean;
  className?: string;
}

const Badge = forwardRef<HTMLSpanElement, BadgeProps>((props, ref) => {
  /* --- Set default props --- */
  const { theme, config } = useContext(themeContext);
  const { defaultProps, styles } = config.badge;
  const { position, color, withBorder, borderColor, invisible, className, ...restProps } = mergeProps(defaultProps, props);

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
