/* --- ARIA ---
 * aria-labelledby
 */

import React, { type BaseHTMLAttributes, forwardRef, useMemo } from 'react';

import { mergeClasses } from '../../../../iCoWeAUI/utils/utils';
import useConfig from '../../../hooks/useConfig';
import sidebarConfig from './sidebarConfig';

export type SidebarProps = BaseHTMLAttributes<HTMLElement>;

const Sidebar = forwardRef<HTMLElement, SidebarProps>((props, ref) => {
  const { defaultClassName, className, ...restProps } = useConfig(
    'sidebar',
    sidebarConfig.defaultProps,
    props
  );

  /* --- Set classes --- */
  const mergedClassName = useMemo(() => {
    const styles = sidebarConfig.styles;

    return mergeClasses(styles.base, defaultClassName, className);
  }, [defaultClassName, className]);

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
