import React, { type FC } from 'react';

import useConfig from '../../../hooks/useConfig';
import { mergeClasses } from '../../../utils/utils';
import Icon, { type IconProps } from '../../data-display/Icon/Icon';
import expandIconConfig from './expandIconConfig';

export type ExpandIconDefaultProps = {
  color?: TextColors;
  size?: Sizes;
};

export type ExpandIconProps = IconProps &
ExpandIconDefaultProps & {
  open?: boolean;
};

const ExpandIcon: FC<ExpandIconProps> = (props) => {
  const { open, defaultClassName, className, children, ...restProps } = useConfig(
    'expandIcon',
    expandIconConfig.defaultProps,
    props
  );

  /* --- Set classes --- */
  const styles = expandIconConfig.styles;

  const mergedClassName = mergeClasses(
    styles.base,
    open && styles.open,
    defaultClassName,
    className
  );

  return (
    <Icon
      className={mergedClassName}
      {...restProps}
    >
      {children ?? (
        <svg
          focusable="false"
          viewBox="0 0 24 24"
        >
          <path d="m7 14 5-5 5 5z"></path>
        </svg>
      )}
    </Icon>
  );
};

ExpandIcon.displayName = 'ExpandIcon';

export default ExpandIcon;
