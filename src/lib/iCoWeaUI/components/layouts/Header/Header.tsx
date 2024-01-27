/* --- ARIA ---
 * aria-labelledby
 */

import React, { type BaseHTMLAttributes, forwardRef } from 'react';

import useConfig from '../../../hooks/useConfig';
import useTheme from '../../../hooks/useTheme';
import { mergeClasses } from '../../../utils/utils';
import Layout, { type LayoutProps } from '../Layout/Layout';
import headerConfig from './headerConfig';

export type HeaderDefaultProps = {
  variant?: Variants;
  color?: Colors;
  justify?: JustifyContent;
  bordered?: boolean;
  block?: boolean;
  shadow?: boolean;
};

export type HeaderProps = BaseHTMLAttributes<HTMLElement> &
HeaderDefaultProps & {
  containerProps?: LayoutProps;
};

const Header = forwardRef<HTMLElement, HeaderProps>((props, ref) => {
  const {
    variant,
    color,
    justify,
    bordered,
    block,
    shadow,
    containerProps,
    defaultClassName,
    className,
    children,
    ...restProps
  } = useConfig('header', headerConfig.defaultProps, props);

  const theme = useTheme();

  /* --- Set classes --- */
  const styles = headerConfig.styles;

  const mergedClassName = mergeClasses(
    styles.base,
    styles.variants[variant][theme][color],
    bordered && styles.border,
    shadow && styles.shadow,
    defaultClassName,
    className
  );

  return (
    <header
      className={mergedClassName}
      ref={ref}
      {...restProps}
    >
      <Layout
        justify={justify}
        layout={block ? 'dashboard' : 'fullbleed'}
        {...containerProps}
      >
        {children}
      </Layout>
    </header>
  );
});

Header.displayName = 'Header';

export default Header;
