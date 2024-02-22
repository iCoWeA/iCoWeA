import React, { type FC, useCallback } from 'react';
import { signOut } from 'firebase/auth';

import { appAuth } from '../../firebase';
import Button from '../../lib/iCoWeABaseUI/components/inputs/Button/Button';
import LogoutIcon from '../Icons/LogoutIcon';

const LogoutButton: FC = () => {
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
    >
      Logout
    </Button>
  );
};

export default LogoutButton;
