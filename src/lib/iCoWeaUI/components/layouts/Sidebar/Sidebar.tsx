import React, { type BaseHTMLAttributes, forwardRef } from 'react';

import useConfig from '../../../hooks/useConfig';
import { mergeClasses } from '../../../utils/utils';
import sidebarConfig from './sidebarConfig';

/* --- ARIA ---
 * aria-labelledby
 */

export type SidebarProps = BaseHTMLAttributes<HTMLElement>;

const Sidebar = forwardRef<HTMLElement, SidebarProps>((props, ref) => {
  const { defaultClassName, className, ...restProps } = useConfig(
    'sidebar',
    sidebarConfig.defaultProps,
    props
  );

  /* --- Set classes --- */
  const styles = sidebarConfig.styles;

  const mergedClassName = mergeClasses(styles.base, defaultClassName, className);

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
