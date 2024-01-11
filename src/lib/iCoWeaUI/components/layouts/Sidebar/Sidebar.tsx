/* ARIA
 *
 * Set aria-labeledby to multiple region (aria-label)
 *
 */

import React, { type BaseHTMLAttributes, forwardRef } from 'react';

import useConfig from '../../../hooks/useConfig';
import useTheme from '../../../hooks/useTheme';
import { mergeClasses } from '../../../utils/utils';
import sidebarConfig from './sidebarConfig';

export type SidebarDefaultProps = {
  variant?: Variants;
  color?: Colors;
  bordered?: BorderPositions;
  justify?: JustifyContent;
  align?: AlignItems;
};

export type SidebarProps = BaseHTMLAttributes<HTMLElement> & SidebarDefaultProps;

const Sidebar = forwardRef<HTMLElement, SidebarProps>((props, ref) => {
  const { variant, color, bordered, justify, align, defaultClassName, className, ...restProps } =
    useConfig('sidebar', sidebarConfig.defaultProps, props);
  const theme = useTheme();

  /* --- Set classes --- */
  const styles = sidebarConfig.styles;

  const mergedClassName = mergeClasses(
    styles.base,
    styles.variants[variant][theme][color],
    justify !== 'start' && styles.justifies[justify],
    align !== 'stretch' && styles.aligns[align],
    bordered !== 'none' && styles.border[bordered],
    defaultClassName,
    className
  );

  return (
    <aside
      role="complementary"
      className={mergedClassName}
      ref={ref}
      {...restProps}
    />
  );
});

Sidebar.displayName = 'Sidebar';

export default Sidebar;
