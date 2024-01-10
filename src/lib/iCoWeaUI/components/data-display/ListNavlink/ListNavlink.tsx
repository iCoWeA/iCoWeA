import React, { type AnchorHTMLAttributes, forwardRef } from 'react';

import useConfig from '../../../hooks/useConfig';
import useTheme from '../../../hooks/useTheme';
import { mergeClasses } from '../../../utils/utils';
import Ripple, { type RippleProps } from '../../utils/Ripple/Ripple';
import listNavlinkConfig from './listNavlinkConfig';

export type ListNavlinkDefaultProps = {
  activeVariant?: Variants;
  variant?: Variants;
  activeColor?: Colors;
  color?: Colors;
  size?: Sizes;
  bordered?: boolean;
  block?: boolean;
  shadow?: boolean;
  noRipple?: boolean;
};

export type ListNavlinkProps = AnchorHTMLAttributes<HTMLAnchorElement> &
ListNavlinkDefaultProps & {
  rippleProps?: RippleProps;
  active?: boolean;
  disabled?: boolean;
};

const ListNavlink = forwardRef<HTMLAnchorElement, ListNavlinkProps>((props, ref) => {
  const {
    activeVariant,
    variant,
    activeColor,
    color,
    size,
    bordered,
    block,
    shadow,
    noRipple,
    rippleProps,
    active,
    disabled,
    defaultClassName,
    className,
    children,
    ...restProps
  } = useConfig('listNavlink', listNavlinkConfig.defaultProps, props);
  const theme = useTheme();

  /* --- Set classes--- */
  const styles = listNavlinkConfig.styles;

  const mergedClassName = mergeClasses(
    styles.base,
    styles.sizes[size],
    !active && !disabled && styles.variants[activeVariant][theme][activeColor],
    active && !disabled && styles.variants[variant][theme][color],
    active && styles.active,
    bordered && styles.border,
    block && styles.block,
    shadow && styles.shadow,
    disabled && styles.disabled[theme],
    defaultClassName,
    className
  );

  return (
    <a
      className={mergedClassName}
      ref={ref}
      {...restProps}
    >
      {children}
      {!noRipple && (
        <Ripple
          variant={active ? variant : activeVariant}
          color={active ? color : activeColor}
          sibling={false}
          {...rippleProps}
        />
      )}
    </a>
  );
});

ListNavlink.displayName = 'ListNavlink';

export default ListNavlink;
