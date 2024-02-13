import React, { type CSSProperties, type ReactNode, forwardRef, useMemo } from 'react';

import { type DefaultRippleProps } from '../../../iCoWeAUI/components/DefaultRipple/DefaultRipple';
import { mergeClasses } from '../../../iCoWeAUI/utils/utils';
import useConfig from '../../hooks/useConfig';
import Navlink, { type NavlinkProps } from '../Navlink/Navlink';
import { type NavlinkSpinnerProps } from '../Navlink/NavlinkSpinner';
import listNavlinkConfig from './listNavlinkConfig';

export type ListNavlinkDefaultProps = {
  size?: Sizes;
  variant?: Variants;
  color?: DefaultColors;
  border?: boolean;
  radius?: Radiuses;
  loading?: boolean;
  noRipple?: boolean;
};

export type ListNavlinkProps = NavlinkProps &
ListNavlinkDefaultProps & {
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

const ListNavlink = forwardRef<HTMLAnchorElement, ListNavlinkProps>((props, ref) => {
  const { size, defaultClassName, className, ...restProps } = useConfig(
    'listNavlink',
    listNavlinkConfig.defaultProps,
    props
  );

  /* --- Set classes --- */
  const mergedClassName = useMemo(() => {
    const styles = listNavlinkConfig.styles;

    return mergeClasses(styles.base, styles.sizes[size], defaultClassName, className);
  }, [size, defaultClassName, className]);

  return (
    <Navlink
      size={size}
      block
      icon={false}
      className={mergedClassName}
      ref={ref}
      {...restProps}
    />
  );
});

ListNavlink.displayName = 'ListNavlink';

export default ListNavlink;
