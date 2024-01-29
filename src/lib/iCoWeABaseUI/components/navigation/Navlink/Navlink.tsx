import React, { type ReactNode, forwardRef } from 'react';

import { mergeClasses } from '../../../../iCoWeAUI/utils/utils';
import useConfig from '../../../hooks/useConfig';
import LinkButton, { type LinkButtonProps } from '../LinkButton/LinkButton';
import navlinkConfig from './navlinkConfig';

export type NavlinkDefaultProps = {
  variant?: Variants;
  activeVariant?: Variants;
  color?: Colors;
  activeColor?: Colors;
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
  leftDecorator?: ReactNode;
  rightDecorator?: ReactNode;
  active?: boolean;
  disabled?: boolean;
};

const Navlink = forwardRef<HTMLAnchorElement, NavlinkProps>((props, ref) => {
  const {
    variant,
    activeVariant,
    color,
    activeColor,
    active,
    defaultClassName,
    className,
    ...restProps
  } = useConfig('navlink', navlinkConfig.defaultProps, props);

  /* --- Set classes --- */
  const styles = navlinkConfig.styles;

  const mergedClassName = mergeClasses(active && styles.active, defaultClassName, className);

  return (
    <LinkButton
      variant={active ? activeVariant : variant}
      color={active ? activeColor : color}
      className={mergedClassName}
      ref={ref}
      {...restProps}
    />
  );
});

Navlink.displayName = 'Navlink';

export default Navlink;
