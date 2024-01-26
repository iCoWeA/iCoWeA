/* --- ARIA ---
 * aria-labelledby
 */

import React, { type BaseHTMLAttributes, forwardRef } from 'react';

import useConfig from '../../../hooks/useConfig';
import { mergeClasses } from '../../../utils/utils';
import Layout, { type LayoutProps } from '../Layout/Layout';
import headerConfig from './headerConfig';

export type HeaderDefaultProps = {
  block?: boolean;
  shadow?: boolean;
};

export type HeaderProps = BaseHTMLAttributes<HTMLElement> &
HeaderDefaultProps & {
  containerProps?: LayoutProps;
};

const Header = forwardRef<HTMLElement, HeaderProps>((props, ref) => {
  const { block, shadow, containerProps, defaultClassName, className, children, ...restProps } =
    useConfig('header', headerConfig.defaultProps, props);

  /* --- Set classes --- */
  const styles = headerConfig.styles;

  const mergedClassName = mergeClasses(
    styles.base,
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
        layout={block ? 'dashboard' : 'fullbleed'}
        spacing="lg"
        panel
        {...containerProps}
      >
        {children}
      </Layout>
    </header>
  );
});

Header.displayName = 'Header';

export default Header;
