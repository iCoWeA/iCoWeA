/* eslint-disable @typescript-eslint/prefer-nullish-coalescing */
import React, { type CSSProperties, type ReactNode, forwardRef } from 'react';

import { mergeClasses } from '../../../../iCoWeAUI/utils/utils';
import useConfig from '../../../hooks/useConfig';
import LinkButton, { type LinkButtonProps } from '../LinkButton/LinkButton';
import navlinkConfig from './navlinkConfig';

export type NavlinkDefaultProps = {
  variant?: Variants;
  color?: Colors;
  size?: Sizes;
  icon?: boolean;
  border?: boolean;
  block?: boolean;
  shadow?: boolean;
  loading?: boolean;
  noRipple?: boolean;
};

export type NavlinkProps = LinkButtonProps &
NavlinkDefaultProps & {
  active?: boolean;
  activeVariant?: Variants;
  activeColor?: Colors;
  activeStyle?: CSSProperties;
  activeClassName?: string;
  activeChildren?: ReactNode;
  leftDecorator?: ReactNode;
  rightDecorator?: ReactNode;
  disabled?: boolean;
};

const Navlink = forwardRef<HTMLAnchorElement, NavlinkProps>((props, ref) => {
  const {
    variant,
    color,
    active,
    activeVariant,
    activeColor,
    activeStyle,
    activeClassName,
    activeChildren,
    defaultClassName,
    href,
    style,
    className,
    children,
    ...restProps
  } = useConfig('navlink', navlinkConfig.defaultProps, props);

  const isActive = active ?? href === location.href;

  /* --- Set classes --- */
  const styles = navlinkConfig.styles;

  const mergedClassName = mergeClasses(
    isActive && styles.active,
    defaultClassName,
    (isActive && activeClassName) || className
  );

  return (
    <LinkButton
      variant={(isActive && activeVariant) || variant}
      color={(isActive && activeColor) || color}
      style={(isActive && activeStyle) || style}
      href={href}
      className={mergedClassName}
      ref={ref}
      {...restProps}
    >
      {(isActive && activeChildren) || children}
    </LinkButton>
  );
});

Navlink.displayName = 'Navlink';

export default Navlink;
