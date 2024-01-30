import React, { type CSSProperties, type ReactNode, forwardRef } from 'react';

import { mergeClasses } from '../../../iCoWeAUI/utils/utils';
import useConfig from '../../hooks/useConfig';
import Navlink, { type NavlinkProps } from '../Navlink/Navlink';
import listNavlinkConfig from './listNavlinkConfig';

export type ListNavlinkDefaultProps = {
  variant?: Variants;
  color?: Colors;
  size?: Sizes;
  border?: boolean;
  block?: boolean;
  noRipple?: boolean;
};

export type ListNavlinkProps = NavlinkProps &
ListNavlinkDefaultProps & {
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
  style?: CSSProperties;
  disabled?: boolean;
  children?: ReactNode;
};

const ListNavlink = forwardRef<HTMLAnchorElement, ListNavlinkProps>((props, ref) => {
  const {
    size,
    block,
    activeClassName,
    pendingClassName,
    defaultClassName,
    className,
    ...restProps
  } = useConfig('listNavlink', listNavlinkConfig.defaultProps, props);

  /* --- Set classes--- */
  const styles = listNavlinkConfig.styles;

  const mergedClassName = mergeClasses(
    styles.base,
    styles.sizes[size],
    block && styles.block,
    defaultClassName,
    className
  );

  const mergedActiveClassName =
    activeClassName &&
    mergeClasses(
      styles.base,
      styles.sizes[size],
      block && styles.block,
      defaultClassName,
      activeClassName
    );

  const mergedPendingClassName =
    pendingClassName &&
    mergeClasses(
      styles.base,
      styles.sizes[size],
      block && styles.block,
      defaultClassName,
      pendingClassName
    );

  return (
    <Navlink
      size={size}
      icon={false}
      block
      shadow={false}
      loading={false}
      activeClassName={mergedActiveClassName}
      pendingClassName={mergedPendingClassName}
      className={mergedClassName}
      ref={ref}
      {...restProps}
    />
  );
});

ListNavlink.displayName = 'ListNavlink';

export default ListNavlink;
