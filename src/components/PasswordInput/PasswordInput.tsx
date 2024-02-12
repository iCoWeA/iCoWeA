import React, { type FC, useState } from 'react';

import Input, { type InputProps } from '../../lib/iCoWeABaseUI/components/inputs/Input/Input';
import { type ToggleButtonProps } from '../../lib/iCoWeABaseUI/components/inputs/ToggleButton/ToggleButton';
import PasswordInputButton from './PasswordInputButton';

export type PasswordInputProps = InputProps & {
  placement?: SidePlacements;
  buttonProps?: ToggleButtonProps;
};

const PasswordInput: FC<PasswordInputProps> = ({
  placement = 'right',
  buttonProps,
  ...restProps
}) => {
  const [isShown, setIsShown] = useState(false);

  return (
    <Input
      leftDecoration={
        placement === 'left' && (
          <PasswordInputButton
            onClick={() => setIsShown((isShown) => !isShown)}
            checked={isShown}
            {...buttonProps}
          />
        )
      }
      rightDecoration={
        placement === 'right' && (
          <PasswordInputButton
            onClick={() => setIsShown((isShown) => !isShown)}
            checked={isShown}
            {...buttonProps}
          />
        )
      }
      type={isShown ? 'text' : 'password'}
      {...restProps}
    />
  );
};

export default PasswordInput;
