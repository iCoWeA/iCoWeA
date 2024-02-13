import React, { type CSSProperties, type ReactNode, forwardRef, useMemo } from 'react';

import { mergeClasses } from '../../../../iCoWeAUI/utils/utils';
import useConfig from '../../../hooks/useConfig';
import Navlink, { type NavlinkProps } from '../../navigation/Navlink/Navlink';
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

const ListLink = forwardRef<HTMLAnchorElement, ListNavlinkProps>((props, ref) => {
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

ListLink.displayName = 'ListLink';

export default ListLink;
