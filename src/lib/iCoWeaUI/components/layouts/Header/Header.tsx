import React, { type ReactNode, type BaseHTMLAttributes, forwardRef } from 'react';

import useConfig from '../../../hooks/useConfig';
import { mergeClasses } from '../../../utils/utils';
import { type LayoutProps } from '../Layout/Layout';
import HeaderContainer from './HeaderContainer';
import headerConfig from './headerConfig';

export type HeaderDefaultProps = {
  variant?: Variants;
  color?: TextColors;
  bordered?: boolean;
  block?: boolean;
  shadow?: boolean;
  justify?: JustifyContent;
  align?: AlignItems;
};

export type HeaderProps = BaseHTMLAttributes<HTMLElement> &
HeaderDefaultProps & {
  divider?: ReactNode;
  containerProps?: LayoutProps;
};

const Header = forwardRef<HTMLElement, HeaderProps>((props, ref) => {
  const {
    variant,
    color,
    bordered,
    block,
    shadow,
    justify,
    align,
    divider,
    containerProps,
    defaultClassName,
    className,
    children,
    ...restProps
  } = useConfig('header', headerConfig.defaultProps, props);

  /* --- Set classes --- */
  const styles = headerConfig.styles.root;

  const mergedClassName = mergeClasses(
    styles.base,
    shadow && styles.shadow,
    defaultClassName,
    className
  );

  return (
    <header
      role="banner"
      className={mergedClassName}
      ref={ref}
      {...restProps}
    >
      <HeaderContainer
        layout={block ? 'dashboard' : 'fullbleed'}
        variant={variant}
        color={color}
        justify={justify}
        align={align}
        bordered={bordered}
        {...containerProps}
      >
        {children}
      </HeaderContainer>
      {divider}
    </header>
  );
});

Header.displayName = 'Header';

export default Header;
