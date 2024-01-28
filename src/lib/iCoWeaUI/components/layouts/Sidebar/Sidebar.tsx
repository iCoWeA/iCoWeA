/* --- ARIA ---
 * aria-labelledby
 */

import React, { type BaseHTMLAttributes, forwardRef } from 'react';

import useConfig from '../../../hooks/useConfig';
import useTheme from '../../../hooks/useTheme';
import { mergeClasses } from '../../../utils/utils';
import sidebarConfig from './sidebarConfig';

export type SidebarDefaultProps = {
  position?: SidePositions;
  variant?: Variants;
  color?: Colors;
  border?: Borders;
};

export type SidebarProps = BaseHTMLAttributes<HTMLElement> & SidebarDefaultProps;

const Sidebar = forwardRef<HTMLElement, SidebarProps>((props, ref) => {
  const { position, variant, color, border, defaultClassName, className, ...restProps } =
    useConfig('sidebar', sidebarConfig.defaultProps, props);

  const theme = useTheme();

  /* --- Set classes --- */
  const styles = sidebarConfig.styles;

  const mergedClassName = mergeClasses(
    styles.base,
    styles.positions[position],
    styles.variants[variant][theme][color],
    typeof border === 'string' && border !== 'none' && styles.borders[border],
    typeof border === 'boolean' && border && styles.borders.all,
    defaultClassName,
    className
  );

  return (
    <aside
      className={mergedClassName}
      ref={ref}
      {...restProps}
    />
  );
});

Sidebar.displayName = 'Sidebar';

export default Sidebar;
