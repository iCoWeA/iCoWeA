import React, { type FC } from 'react';

import Icon, { type IconProps } from '../../lib/iCoWeABaseUI/components/data-display/Icon/Icon';

const SortIcon: FC<IconProps> = (props) => (
  <Icon {...props}>
    <svg
      focusable="false"
      viewBox="0 0 24 24"
    >
      <path d="M10 18h4v-2h-4zM3 6v2h18V6zm3 7h12v-2H6z"></path>
    </svg>
  </Icon>
);

export default SortIcon;
