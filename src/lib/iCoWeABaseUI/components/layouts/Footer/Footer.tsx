/* --- ARIA ---
 * aria-labelledby
 */

import React, { type BaseHTMLAttributes, forwardRef, useMemo } from 'react';

import useTheme from '../../../../iCoWeAUI/hooks/useTheme';
import { mergeClasses } from '../../../../iCoWeAUI/utils/utils';
import useConfig from '../../../hooks/useConfig';
import { getBorderType, getBorderVariant } from '../../../utils/utils';
import Layout, { type LayoutProps } from '../Layout/Layout';
import footerConfig from './footerConfig';

export type FooterDefaultProps = {
  block?: boolean;
  variant?: Variants;
  color?: Colors;
  border?: boolean;
  justify?: JustifyContent;
  align?: AlignItems;
};

export type FooterProps = BaseHTMLAttributes<HTMLElement> &
FooterDefaultProps & {
  containerProps?: LayoutProps;
};

const Footer = forwardRef<HTMLElement, FooterProps>((props, ref) => {
  const {
    block,
    variant,
    color,
    border,
    justify,
    align,
    containerProps,
    defaultClassName,
    className,
    children,
    ...restProps
  } = useConfig('footer', footerConfig.defaultProps, props);

  const theme = useTheme();

  /* --- Set classes --- */
  const mergedClassName = useMemo(() => {
    const styles = footerConfig.styles;
    const borderType = getBorderType(border);
    const borderVariant = getBorderVariant(variant);

    return mergeClasses(
      styles.base,
      border && styles.border,
      color !== 'inherit' && styles.variants[variant][theme][color],
      color !== 'inherit' &&
        borderType !== 'none' &&
        styles.borderVariants[borderVariant][theme][color],
      defaultClassName,
      className
    );
  }, [border, variant, theme, color, defaultClassName, className]);

  return (
    <footer
      className={mergedClassName}
      ref={ref}
      {...restProps}
    >
      <Layout
        layout={block ? 'dashboard' : 'fullbleed'}
        justify={justify}
        align={align}
        {...containerProps}
      >
        {children}
      </Layout>
    </footer>
  );
});

Footer.displayName = 'Footer';

export default Footer;
