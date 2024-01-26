/* --- ARIA ---
 * aria-labelledby
 */

import React, { type BaseHTMLAttributes, forwardRef } from 'react';
import useConfig from '../../../hooks/useConfig';
import { mergeClasses } from '../../../utils/utils';
import Layout, { type LayoutProps } from '../Layout/Layout';
import footerConfig from './footerConfig';

export type FooterDefaultProps = {
  justify?: JustifyContent;
  block?: boolean;
};

export type FooterProps = BaseHTMLAttributes<HTMLElement> &
FooterDefaultProps & {
  containerProps?: LayoutProps;
};

const Footer = forwardRef<HTMLElement, FooterProps>((props, ref) => {
  const { justify, block, containerProps, defaultClassName, className, children, ...restProps } =
    useConfig('footer', footerConfig.defaultProps, props);

  /* --- Set classes --- */
  const styles = footerConfig.styles;

  const mergedClassName = mergeClasses(styles.base, defaultClassName, className);

  return (
    <footer
      className={mergedClassName}
      ref={ref}
      {...restProps}
    >
      <Layout
        justify={justify}
        layout={block ? 'dashboard' : 'fullbleed'}
        spacing="lg"
        panel
        {...containerProps}
      >
        {children}
      </Layout>
    </footer>
  );
});

Footer.displayName = 'Footer';

export default Footer;
