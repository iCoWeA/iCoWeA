import React, { type FC, useCallback } from 'react';
import { signOut } from 'firebase/auth';

import { appAuth } from '../../firebase';
import Button, { type ButtonProps } from '../../lib/iCoWeABaseUI/components/inputs/Button/Button';
import LogoutIcon from '../Icons/LogoutIcon';

const LogoutButton: FC<ButtonProps> = (props) => {
  /* --- Set event handlers --- */
  const clickHandler = useCallback(() => {
    void signOut(appAuth);
  }, []);

  return (
    <Button
      onClick={clickHandler}
      block
      color="error"
      leftDecorator={<LogoutIcon />}
      {...props}
    >
      Logout
    </Button>
  );
};

export default LogoutButton;
