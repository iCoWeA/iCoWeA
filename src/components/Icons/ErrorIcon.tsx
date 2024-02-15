import React, { type FC } from 'react';

import Icon, { type IconProps } from '../../lib/iCoWeABaseUI/components/data-display/Icon/Icon';

const ErrorIcon: FC<IconProps> = (props) => (
  <Icon {...props}>
    <svg
      focusable="false"
      viewBox="0 0 24 24"
    >
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m1 15h-2v-2h2zm0-4h-2V7h2z"></path>
    </svg>
  </Icon>
);

export default ErrorIcon;
