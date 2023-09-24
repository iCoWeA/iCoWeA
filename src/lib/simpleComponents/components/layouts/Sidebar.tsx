import React, { type BaseHTMLAttributes, forwardRef, useContext } from 'react';
import sidebarConfig from '../../configs/sidebarConfig';
import themeContext from '../../contexts/theme';
import { mergeClasses } from '../../utils/utils';

/* ARIA
 *
 * Set aria-labeledby to multiple region (aria-label)
 *
 */

export interface SidebarProps extends BaseHTMLAttributes<HTMLElement> {
  variant?: Variants;
}

const Sidebar = forwardRef<HTMLElement, SidebarProps>((props, ref) => {
  /* --- Set context props --- */
  const theme = useContext(themeContext).theme;

  /* --- Set default props --- */
  const styles = sidebarConfig.styles;
  const { variant, className, ...restProps } = { ...sidebarConfig.defaultProps, ...props };

  /* --- Set props --- */
  const mergedClassName = mergeClasses(styles.base, styles.variants[variant][theme], className);

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
