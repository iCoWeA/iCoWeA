import React, { type FC, useMemo } from 'react';

import { mergeClasses } from '../../../../iCoWeAUI/utils/utils';
import useConfig from '../../../hooks/useConfig';
import { cutTextColor } from '../../../utils/utils';
import Icon, { type IconProps } from '../../data-display/Icon/Icon';
import expandIconConfig from './expandIconConfig';

export type ExpandIconDefaultProps = {
  size?: Sizes;
  color?: TextColors;
};

export type ExpandIconProps = Omit<IconProps, 'color'> &
ExpandIconDefaultProps & {
  open?: boolean;
};

const ExpandIcon: FC<ExpandIconProps> = (props) => {
  const { color, open, defaultClassName, className, children, ...restProps } = useConfig(
    'expandIcon',
    expandIconConfig.defaultProps,
    props
  );

  /* --- Set classes --- */

  const mergedClassName = useMemo(() => {
    const styles = expandIconConfig.styles;

    return mergeClasses(styles.base, open && styles.open, defaultClassName, className);
  }, [open, defaultClassName, className]);

  return (
    <Icon
      spacing="text"
      variant={color.startsWith('on') ? 'default' : 'text'}
      color={cutTextColor(color)}
      border={false}
      radius="none"
      className={mergedClassName}
      {...restProps}
    >
      {children ?? (
        <svg
          focusable="false"
          viewBox="0 0 24 24"
        >
          <path d="m7 14 5-5 5 5z" />
        </svg>
      )}
    </Icon>
  );
};

ExpandIcon.displayName = 'ExpandIcon';

export default ExpandIcon;
