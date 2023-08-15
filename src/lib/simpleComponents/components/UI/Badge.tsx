import React, { type BaseHTMLAttributes, forwardRef, useContext } from 'react';
import { type BadgeProps } from '../../configs/badgeConfig';
import themeContext from '../../contexts/theme';
import { mergeClasses, setDefaultProps } from '../../utils/propsHelper';

const Badge = forwardRef<HTMLSpanElement, BadgeProps & BaseHTMLAttributes<HTMLSpanElement>>((props, ref) => {
  const { theme, config } = useContext(themeContext);
  const { defaultProps, styles } = config.badge;
  const { position, color, withBorder, borderColor, invisible, className, ...restProps } = setDefaultProps(defaultProps, props);

  /* Set props */
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
