import React, { type ReactNode, type AnchorHTMLAttributes, forwardRef } from 'react';

import useConfig from '../../../hooks/useConfig';
import useTheme from '../../../hooks/useTheme';
import { mergeClasses } from '../../../utils/utils';
import Ripple, { type RippleProps } from '../../utils/Ripple/Ripple';
import navlinkConfig from './navlinkConfig';

export type NavlinkDefaultProps = {
  variant?: Variants;
  activeVariant?: Variants;
  color?: Colors;
  activeColor?: Colors;
  size?: Sizes;
  inner?: boolean;
  icon?: boolean;
  bordered?: boolean;
  block?: boolean;
  shadow?: boolean;
  noRipple?: boolean;
};

export type NavlinkProps = AnchorHTMLAttributes<HTMLAnchorElement> &
NavlinkDefaultProps & {
  leftDecorator?: ReactNode;
  rightDecorator?: ReactNode;
  rippleProps?: RippleProps;
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
    inner,
    icon,
    bordered,
    block,
    shadow,
    noRipple,
    leftDecorator,
    rightDecorator,
    rippleProps,
    active,
    disabled,
    defaultClassName,
    className,
    children,
    ...restProps
  } = useConfig('navlink', navlinkConfig.defaultProps, props);
  const theme = useTheme();

  /* --- Set classes --- */
  const styles = navlinkConfig.styles;
  const sizeVariant = icon ? 'icon' : 'default';

  const mergedClassName = mergeClasses(
    styles.base,
    inner ? styles.innerSizes[sizeVariant] : styles.sizes[sizeVariant][size],
    !disabled && !active && styles.variants[variant][theme][color],
    !disabled && active && styles.variants[activeVariant][theme][activeColor],
    active && styles.active,
    disabled && styles.disabled[theme],
    icon && styles.icon,
    bordered && styles.border,
    block && styles.block,
    shadow && styles.shadow,
    defaultClassName,
    className
  );

  /* --- Set ripple --- */
  let rippleNode: ReactNode;

  if (!noRipple) {
    rippleNode = (
      <Ripple
        variant={active ? activeVariant : variant}
        color={active ? activeColor : color}
        sibling={false}
        {...rippleProps}
      />
    );
  }

  return (
    <a
      className={mergedClassName}
      ref={ref}
      {...restProps}
    >
      {leftDecorator}
      {children}
      {rightDecorator}
      {rippleNode}
    </a>
  );
});

Navlink.displayName = 'Navlink';

export default Navlink;
