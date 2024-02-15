import React, { type FC } from 'react';

import Icon, { type IconProps } from '../../lib/iCoWeABaseUI/components/data-display/Icon/Icon';

const FullTrashIcon: FC<IconProps> = (props) => (
  <Icon {...props}>
    <svg
      focusable="false"
      viewBox="0 0 24 24"
    >
      <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zM19 4h-3.5l-1-1h-5l-1 1H5v2h14z"></path>
    </svg>
  </Icon>
);

export default FullTrashIcon;
