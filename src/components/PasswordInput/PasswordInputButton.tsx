import React, { type FC } from 'react';

import ToggleButton, {
  type ToggleButtonProps
} from '../../lib/iCoWeABaseUI/components/inputs/ToggleButton/ToggleButton';
import UnvisibleIcon from '../Icons/UnvisibleIcon';
import VisibleIcon from '../Icons/VisibleIcon';

const PasswordInputButton: FC<ToggleButtonProps> = ({ checked, ...restProps }) => (
  <ToggleButton
    checked={checked}
    size="sm"
    icon
    color="neutral"
    radius="circular"
    {...restProps}
  >
    {checked && <VisibleIcon />}
    {!checked && <UnvisibleIcon />}
  </ToggleButton>
);

export default PasswordInputButton;
