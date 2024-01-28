/* --- ARIA ---
 * aria-labelledby
 */

import React, { type BaseHTMLAttributes, forwardRef } from 'react';

import useConfig from '../../../hooks/useConfig';
import useTheme from '../../../hooks/useTheme';
import { mergeClasses } from '../../../utils/utils';
import List, { type ListProps } from '../../data-display/List/List';
import navigationConfig from './navigationConfig';

export type NavigationDefaultProps = {
  variant?: Variants;
  color?: TextColors;
  border?: Borders;
  gap?: Gaps;
  vertical?: boolean;
  block?: boolean;
};

export type NavigationProps = BaseHTMLAttributes<HTMLElement> &
NavigationDefaultProps & {
  listProps?: ListProps;
};

const Navigation = forwardRef<HTMLElement, NavigationProps>((props, ref) => {
  const {
    variant,
    color,
    border,
    gap,
    vertical,
    block,
    listProps,
    defaultClassName,
    className,
    children,
    ...restProps
  } = useConfig('navigation', navigationConfig.defaultProps, props);

  const theme = useTheme();

  /* --- Set classes --- */
  const styles = navigationConfig.styles;

  const mergedClassName = mergeClasses(
    styles.base,
    color !== 'inherit' && styles.variants[variant][theme][color],
    typeof border === 'string' && border !== 'none' && styles.borders[border],
    typeof border === 'boolean' && border && styles.borders.all,
    block && styles.block,
    defaultClassName,
    className
  );

  return (
    <nav
      className={mergedClassName}
      ref={ref}
      {...restProps}
    >
      <List
        spacing="none"
        gap={gap}
        row={!vertical}
        block={block}
        {...listProps}
      >
        {children}
      </List>
    </nav>
  );
});

Navigation.displayName = 'Navigation';

export default Navigation;
