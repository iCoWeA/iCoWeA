/* eslint-disable @typescript-eslint/prefer-nullish-coalescing */

import React, { type CSSProperties, type ReactNode, forwardRef, useMemo } from 'react';

import { mergeClasses } from '../../../../iCoWeAUI/utils/utils';
import useConfig from '../../../hooks/useConfig';
import LinkButton, { type LinkButtonProps } from '../LinkButton/LinkButton';
import navlinkConfig from './navlinkConfig';

export type NavlinkDefaultProps = {
  size?: Spacings;
  block?: boolean;
  icon?: boolean;
  variant?: Variants;
  color?: DefaultColors;
  border?: boolean;
  radius?: Radiuses;
  loading?: boolean;
  noRipple?: boolean;
};

export type NavlinkProps = LinkButtonProps &
NavlinkDefaultProps & {
  active?: boolean;
  activeVariant?: Variants;
  activeColor?: DefaultColors;
  activeClassName?: string;
  activeStyle?: CSSProperties;
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
    activeClassName,
    activeStyle,
    activeChildren,
    defaultClassName,
    className,
    href,
    style,
    children,
    ...restProps
  } = useConfig('navlink', navlinkConfig.defaultProps, props);

  const isActive = active ?? href === location.href;

  /* --- Set classes --- */
  const mergedClassName = useMemo(() => {
    const styles = navlinkConfig.styles;

    return mergeClasses(
      isActive && styles.active,
      defaultClassName,
      (isActive && activeClassName) || className
    );
  }, [isActive, defaultClassName, activeClassName, className]);

  return (
    <LinkButton
      variant={(isActive && activeVariant) || variant}
      color={(isActive && activeColor) || color}
      style={(isActive && activeStyle) || style}
      className={mergedClassName}
      href={href}
      ref={ref}
      {...restProps}
    >
      {(isActive && activeChildren) || children}
    </LinkButton>
  );
});

Navlink.displayName = 'Navlink';

export default Navlink;
