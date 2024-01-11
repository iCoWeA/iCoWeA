import React, { type ReactNode, type BaseHTMLAttributes, forwardRef } from 'react';

import useConfig from '../../../hooks/useConfig';
import { mergeClasses } from '../../../utils/utils';
import { type LayoutProps } from '../Layout/Layout';
import FooterContainer from './FooterContainer';
import footerConfig from './footerConfig';

export type FooterDefaultProps = {
  variant?: Variants;
  color?: TextColors;
  bordered?: boolean;
  block?: boolean;
  justify?: JustifyContent;
  align?: AlignItems;
};

export type FooterProps = BaseHTMLAttributes<HTMLElement> &
FooterDefaultProps & {
  divider?: ReactNode;
  containerProps?: LayoutProps;
};

const Footer = forwardRef<HTMLElement, FooterProps>((props, ref) => {
  const {
    variant,
    color,
    bordered,
    block,
    justify,
    align,
    divider,
    containerProps,
    defaultClassName,
    className,
    children,
    ...restProps
  } = useConfig('footer', footerConfig.defaultProps, props);

  /* --- Set classes --- */
  const styles = footerConfig.styles.root;

  const mergedClassName = mergeClasses(styles.base, defaultClassName, className);

  return (
    <footer
      role="contentinfo"
      className={mergedClassName}
      ref={ref}
      {...restProps}
    >
      {divider}
      <FooterContainer
        layout={block ? 'dashboard' : 'fullbleed'}
        variant={variant}
        color={color}
        justify={justify}
        align={align}
        bordered={bordered}
        {...containerProps}
      >
        {children}
      </FooterContainer>
    </footer>
  );
});

Footer.displayName = 'Footer';

export default Footer;
