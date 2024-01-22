import React, { type AnchorHTMLAttributes, type ReactNode, forwardRef } from 'react';

import useConfig from '../../../hooks/useConfig';
import useTheme from '../../../hooks/useTheme';
import { mergeClasses } from '../../../utils/utils';
import Ripple, { type RippleProps } from '../../utils/Ripple/Ripple';
import NavlinkSpinner, { type NavlinkSpinnerDefaultProps } from './NavlinkSpinner';
import navlinkConfig from './navlinkConfig';

export type NavlinkDefaultProps = {
  variant?: Variants;
  activeVariant?: Variants;
  color?: Colors;
  activeColor?: Colors;
  size?: Sizes;
  icon?: boolean;
  bordered?: boolean;
  block?: boolean;
  shadow?: boolean;
  loading?: boolean;
  noRipple?: boolean;
};

export type NavlinkProps = AnchorHTMLAttributes<HTMLAnchorElement> &
NavlinkDefaultProps & {
  leftDecorator?: ReactNode;
  rightDecorator?: ReactNode;
  rippleProps?: RippleProps;
  spinnerProps?: NavlinkSpinnerDefaultProps;
  active?: boolean;
  disabled?: boolean;
};

const Navlink = forwardRef<HTMLAnchorElement, NavlinkProps>((props, ref) => {
  const {
    variant,
    activeVariant,
    color,
    activeColor,
    size,
    icon,
    bordered,
    block,
    shadow,
    loading,
    noRipple,
    leftDecorator,
    rightDecorator,
    rippleProps,
    spinnerProps,
    active,
    disabled,
    defaultClassName,
    className,
    children,
    ...restProps
  } = useConfig('navlink', navlinkConfig.defaultProps, props);
  const theme = useTheme();

  /* --- Set classes --- */
  const styles = navlinkConfig.styles.root;
  const sizeVariant = icon ? 'icon' : 'default';

  const mergedClassName = mergeClasses(
    styles.base,
    styles.sizes[sizeVariant][size],
    !disabled && !active && styles.variants[variant][theme][color],
    !disabled && active && styles.variants[activeVariant][theme][activeColor],
    active && styles.active,
    disabled && styles.disabled[theme],
    icon && styles.icon,
    bordered && styles.border,
    block && styles.block,
    shadow && styles.shadow,
    loading && styles.loading,
    defaultClassName,
    className
  );

  return (
    <a
      className={mergedClassName}
      ref={ref}
      {...restProps}
    >
      {leftDecorator}
      {children}
      {rightDecorator}
      {loading && (
        <NavlinkSpinner
          theme={theme}
          variant={variant}
          activeVariant={activeVariant}
          color={color}
          activeColor={activeColor}
          active={active}
          {...spinnerProps}
        />
      )}
      {!noRipple && (
        <Ripple
          variant={active ? activeVariant : variant}
          color={active ? activeColor : color}
          sibling={false}
          {...rippleProps}
        />
      )}
    </a>
  );
});

Navlink.displayName = 'Navlink';

export default Navlink;
