/* --- ARIA ---
 * aria-labelledby
 */

import React, { type BaseHTMLAttributes, forwardRef, useMemo } from 'react';

import useTheme from '../../../../iCoWeAUI/hooks/useTheme';
import { mergeClasses } from '../../../../iCoWeAUI/utils/utils';
import useConfig from '../../../hooks/useConfig';
import { getBorderType, getBorderVariant } from '../../../utils/utils';
import List, { type ListProps } from '../../data-display/List/List';
import navigationConfig from './navigationConfig';

export type NavigationDefaultProps = {
  vertical?: boolean;
  block?: boolean;
  variant?: Variants;
  color?: Colors;
  border?: Borders;
  justify?: JustifyContent;
  align?: AlignItems;
  gap?: Gaps;
};

export type NavigationProps = BaseHTMLAttributes<HTMLElement> &
NavigationDefaultProps & {
  listProps?: ListProps;
};

const Navigation = forwardRef<HTMLElement, NavigationProps>((props, ref) => {
  const {
    vertical,
    block,
    variant,
    color,
    border,
    justify,
    align,
    gap,
    listProps,
    defaultClassName,
    className,
    children,
    ...restProps
  } = useConfig('navigation', navigationConfig.defaultProps, props);

  const theme = useTheme();

  /* --- Set classes --- */
  const mergedClassName = useMemo(() => {
    const styles = navigationConfig.styles;
    const borderType = getBorderType(border);
    const borderVariant = getBorderVariant(variant);

    return mergeClasses(
      styles.base,
      block && styles.block,
      borderType !== 'none' && styles.borders[borderType],
      color !== 'inherit' && styles.variants[variant][theme][color],
      color !== 'inherit' &&
        borderType !== 'none' &&
        styles.borderVariants[borderVariant][theme][color],
      defaultClassName,
      className
    );
  }, [border, block, variant, theme, color, defaultClassName, className]);

  return (
    <nav
      className={mergedClassName}
      ref={ref}
      {...restProps}
    >
      <List
        block={block}
        row={!vertical}
        justify={justify}
        align={align}
        gap={gap}
        {...listProps}
      >
        {children}
      </List>
    </nav>
  );
});

Navigation.displayName = 'Navigation';

export default Navigation;
