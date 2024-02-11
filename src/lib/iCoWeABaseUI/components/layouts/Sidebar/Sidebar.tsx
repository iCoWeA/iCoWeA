/* --- ARIA ---
 * aria-labelledby
 */

import React, { type BaseHTMLAttributes, forwardRef, useMemo } from 'react';

import useTheme from '../../../../iCoWeAUI/hooks/useTheme';
import { mergeClasses } from '../../../../iCoWeAUI/utils/utils';
import useConfig from '../../../hooks/useConfig';
import { getBorderType, getBorderVariant } from '../../../utils/utils';
import sidebarConfig from './sidebarConfig';

export type SidebarDefaultProps = {
  placement?: SidePlacements;
  variant?: Variants;
  color?: Colors;
  border?: Borders;
};

export type SidebarProps = BaseHTMLAttributes<HTMLElement> & SidebarDefaultProps;

const Sidebar = forwardRef<HTMLElement, SidebarProps>((props, ref) => {
  const { placement, variant, color, border, defaultClassName, className, ...restProps } =
    useConfig('sidebar', sidebarConfig.defaultProps, props);

  const theme = useTheme();

  /* --- Set classes --- */
  const mergedClassName = useMemo(() => {
    const styles = sidebarConfig.styles;
    const borderType = getBorderType(border);
    const borderVariant = getBorderVariant(variant);

    return mergeClasses(
      styles.base,
      styles.placements[placement],
      borderType !== 'none' && styles.borders[borderType],
      color !== 'inherit' && styles.variants[variant][theme][color],
      color !== 'inherit' &&
        borderType !== 'none' &&
        styles.borderVariants[borderVariant][theme][color],
      defaultClassName,
      className
    );
  }, [border, placement, variant, theme, color, defaultClassName, className]);

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
