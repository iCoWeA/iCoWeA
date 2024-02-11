/* eslint-disable @typescript-eslint/prefer-nullish-coalescing */

import React, { type CSSProperties, type ReactNode, forwardRef, useCallback } from 'react';
import {
  NavLink as RouterNavlink,
  type NavLinkProps as RouterNavlinkProps
} from 'react-router-dom';

import { getBorderVariant, reverseColor } from '../../../iCoWeABaseUI/utils/utils';
import DefaultRipple, {
  type DefaultRippleProps
} from '../../../iCoWeAUI/components/DefaultRipple/DefaultRipple';
import useTheme from '../../../iCoWeAUI/hooks/useTheme';
import { mergeClasses } from '../../../iCoWeAUI/utils/utils';
import useConfig from '../../hooks/useConfig';
import NavlinkSpinner, { type NavlinkSpinnerProps } from './NavlinkSpinner';
import navlinkConfig from './navlinkConfig';

type State = { isActive: boolean; isPending: boolean };

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

export type NavlinkProps = RouterNavlinkProps &
NavlinkDefaultProps & {
  activeVariant?: Variants;
  activeColor?: DefaultColors;
  activeClassName?: string;
  activeStyle?: CSSProperties;
  activeChildren?: ReactNode;
  pendingVariant?: Variants;
  pendingColor?: DefaultColors;
  pendingClassName?: string;
  pendingStyle?: CSSProperties;
  pendingChildren?: ReactNode;
  leftDecorator?: ReactNode;
  rightDecorator?: ReactNode;
  rippleProps?: DefaultRippleProps;
  spinnerProps?: NavlinkSpinnerProps;
  disabled?: boolean;
  style?: CSSProperties;
  children?: ReactNode;
};

const Navlink = forwardRef<HTMLAnchorElement, NavlinkProps>((props, ref) => {
  const {
    size,
    block,
    icon,
    variant,
    color,
    border,
    radius,
    loading,
    noRipple,
    activeVariant,
    activeColor,
    activeClassName,
    activeStyle,
    activeChildren,
    pendingVariant,
    pendingColor,
    pendingClassName,
    pendingStyle,
    pendingChildren,
    leftDecorator,
    rightDecorator,
    rippleProps,
    spinnerProps,
    defaultClassName,
    className,
    disabled,
    style,
    children,
    ...restProps
  } = useConfig('navlink', navlinkConfig.defaultProps, props);

  const theme = useTheme();

  /* --- Set classes --- */
  const mergedClassName = useCallback(
    ({ isActive, isPending }: State): string => {
      const styles = navlinkConfig.styles.root;
      const sizeVariant = icon ? 'icon' : 'default';
      const stateVariant = (isActive && activeVariant) || (isPending && pendingVariant) || variant;
      const stateColor = (isActive && activeColor) || (isPending && pendingColor) || color;
      const borderVariant = getBorderVariant(stateVariant);

      return mergeClasses(
        styles.base,
        ((!noRipple && !disabled) || loading) && styles.ripple,
        block && styles.block,
        icon && styles.icon,
        border && styles.border,
        stateVariant === 'solid' && !disabled && styles.shadow,
        radius !== 'none' && styles.radiuses[radius],
        styles.sizes[sizeVariant][size],
        disabled ? styles.disabled[theme] : styles.variants[stateVariant][theme][stateColor],
        border && !disabled && styles.borderVariants[borderVariant][theme][stateColor],
        loading && styles.loading,
        defaultClassName,
        (isActive && activeClassName) || (isPending && pendingClassName) || className
      );
    },
    [
      icon,
      activeVariant,
      pendingVariant,
      variant,
      activeColor,
      pendingColor,
      color,
      noRipple,
      disabled,
      loading,
      block,
      border,
      radius,
      size,
      theme,
      defaultClassName,
      activeClassName,
      pendingClassName,
      className
    ]
  );

  const mergedStyles = useCallback(
    ({ isActive, isPending }: State): CSSProperties | undefined =>
      (isActive && activeStyle) || (isPending && pendingStyle) || style,
    [activeStyle, pendingStyle, style]
  );

  return (
    <RouterNavlink
      className={mergedClassName}
      style={mergedStyles}
      ref={ref}
      {...restProps}
    >
      {({ isActive, isPending }) => {
        const stateVariant =
          (isActive && activeVariant) || (isPending && pendingVariant) || variant;
        const stateColor = (isActive && activeColor) || (isPending && pendingColor) || color;

        return (
          <>
            {leftDecorator}
            {(isActive && activeChildren) || (isPending && pendingChildren) || children}
            {rightDecorator}
            {loading && (
              <NavlinkSpinner
                color={reverseColor(stateVariant, stateColor)}
                disabled={disabled}
                {...spinnerProps}
              />
            )}
            {!noRipple && !disabled && (
              <DefaultRipple
                color={reverseColor(stateVariant, stateColor)}
                border={border}
                sibling={false}
                {...rippleProps}
              />
            )}
          </>
        );
      }}
    </RouterNavlink>
  );
});

Navlink.displayName = 'Navlink';

export default Navlink;
