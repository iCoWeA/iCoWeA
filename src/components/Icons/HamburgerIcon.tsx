import React, { type FC } from 'react';

import Icon, { type IconProps } from '../../lib/iCoWeABaseUI/components/data-display/Icon/Icon';

const HamburgerIcon: FC<IconProps> = (props) => (
  <Icon {...props}>
    <svg
      focusable="false"
      viewBox="0 0 24 24"
    >
      <path d="M3 18h18v-2H3zm0-5h18v-2H3zm0-7v2h18V6z"></path>
    </svg>
  </Icon>
);

export default HamburgerIcon;
