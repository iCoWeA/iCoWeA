import React, { type FC, useState } from 'react';

import Input, { type InputProps } from '../../lib/iCoWeaUI/components/inputs/Input/Input';
import PasswordToggleButton from './PasswordToggleButton';

const PasswordInput: FC<InputProps> = (props) => {
  const [isShow, setIsShow] = useState(false);

  return (
    <Input
      rightDecoration={
        <PasswordToggleButton
          checked={isShow}
          onClick={() => setIsShow((isShow) => !isShow)}
        />
      }
      type={isShow ? 'text' : 'password'}
      {...props}
    />
  );
};

export default PasswordInput;
