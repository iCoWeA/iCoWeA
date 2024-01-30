/* eslint-disable @typescript-eslint/prefer-nullish-coalescing */
import React, { type CSSProperties, type ReactNode, forwardRef } from 'react';
import {
  NavLink as RouterNavlink,
  type NavLinkProps as RouterNavlinkProps
} from 'react-router-dom';

import ButtonSpinner, {
  type ButtonSpinnerProps
} from '../../../iCoWeAUI/components/ButtonSpinner/ButtonSpinner';
import Ripple, { type RippleProps } from '../../../iCoWeAUI/components/Ripple/Ripple';
import useTheme from '../../../iCoWeAUI/hooks/useTheme';
import { mergeClasses } from '../../../iCoWeAUI/utils/utils';
import useConfig from '../../hooks/useConfig';
import navlinkConfig from './navlinkConfig';

type State = { isActive: boolean; isPending: boolean };

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

export type NavlinkProps = RouterNavlinkProps &
NavlinkDefaultProps & {
  activeVariant?: Variants;
  activeColor?: Colors;
  activeStyle?: CSSProperties;
  activeClassName?: string;
  activeChildren?: ReactNode;
  pendingVariant?: Variants;
  pendingColor?: Colors;
  pendingStyle?: CSSProperties;
  pendingClassName?: string;
  pendingChildren?: ReactNode;
  leftDecorator?: ReactNode;
  rightDecorator?: ReactNode;
  rippleProps?: RippleProps;
  spinnerProps?: ButtonSpinnerProps;
  style?: CSSProperties;
  disabled?: boolean;
  children?: ReactNode;
};

const Navlink = forwardRef<HTMLAnchorElement, NavlinkProps>((props, ref) => {
  const {
    variant,
    color,
    size,
    icon,
    border,
    block,
    shadow,
    loading,
    noRipple,
    activeVariant,
    activeColor,
    activeStyle,
    activeClassName,
    activeChildren,
    pendingVariant,
    pendingColor,
    pendingStyle,
    pendingClassName,
    pendingChildren,
    leftDecorator,
    rightDecorator,
    rippleProps,
    spinnerProps,
    disabled,
    defaultClassName,
    style,
    className,
    children,
    ...restProps
  } = useConfig('navlink', navlinkConfig.defaultProps, props);

  const theme = useTheme();

  /* --- Set classes --- */
  const styles = navlinkConfig.styles;
  const sizeVariant = icon ? 'icon' : 'default';

  const mergedClassName = ({ isActive, isPending }: State): string =>
    mergeClasses(
      styles.base,
      styles.sizes[sizeVariant][size],
      disabled
        ? styles.disabled[theme]
        : styles.variants[(isActive && activeVariant) || (isPending && pendingVariant) || variant][
          theme
        ][(isActive && activeColor) || (isPending && pendingColor) || color],
      isActive && styles.active,
      icon && styles.icon,
      border && styles.border,
      block && styles.block,
      shadow && styles.shadow,
      loading && styles.loading,
      defaultClassName,
      (isActive && activeClassName) || (isPending && pendingClassName) || className
    );

  const mergedStyles = ({ isActive, isPending }: State): CSSProperties | undefined =>
    (isActive && activeStyle) || (isPending && pendingStyle) || style;

  return (
    <RouterNavlink
      style={mergedStyles}
      className={mergedClassName}
      ref={ref}
      {...restProps}
    >
      {({ isActive, isPending }) => (
        <>
          {leftDecorator}
          {(isActive && activeChildren) || (isPending && pendingChildren) || children}
          {rightDecorator}
          {loading && (
            <ButtonSpinner
              variant={(isActive && activeVariant) || (isPending && pendingVariant) || variant}
              color={(isActive && activeColor) || (isPending && pendingColor) || color}
              value="75"
              {...spinnerProps}
            />
          )}
          {!noRipple && (
            <Ripple
              variant={(isActive && activeVariant) || (isPending && pendingVariant) || variant}
              color={(isActive && activeColor) || (isPending && pendingColor) || color}
              sibling={false}
              {...rippleProps}
            />
          )}
        </>
      )}
    </RouterNavlink>
  );
});

Navlink.displayName = 'Navlink';

export default Navlink;
