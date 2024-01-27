/* --- ARIA ---
 * aria-labelledby
 */

import React, { type BaseHTMLAttributes, forwardRef } from 'react';

import useConfig from '../../../hooks/useConfig';
import useTheme from '../../../hooks/useTheme';
import { mergeClasses } from '../../../utils/utils';
import Layout, { type LayoutProps } from '../Layout/Layout';
import footerConfig from './footerConfig';

export type FooterDefaultProps = {
  variant?: Variants;
  color?: Colors;
  justify?: JustifyContent;
  bordered?: boolean;
  block?: boolean;
};

export type FooterProps = BaseHTMLAttributes<HTMLElement> &
FooterDefaultProps & {
  containerProps?: LayoutProps;
};

const Footer = forwardRef<HTMLElement, FooterProps>((props, ref) => {
  const {
    variant,
    color,
    justify,
    bordered,
    block,
    containerProps,
    defaultClassName,
    className,
    children,
    ...restProps
  } = useConfig('footer', footerConfig.defaultProps, props);

  const theme = useTheme();

  /* --- Set classes --- */
  const styles = footerConfig.styles;

  const mergedClassName = mergeClasses(
    styles.base,
    styles.variants[variant][theme][color],
    bordered && styles.border,
    defaultClassName,
    className
  );

  return (
    <footer
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
    </footer>
  );
});

Footer.displayName = 'Footer';

export default Footer;
