import React, { type FC } from 'react';
import { signOut } from 'firebase/auth';

import { appAuth } from '../../firebase';
import Button from '../../lib/iCoWeABaseUI/components/inputs/Button/Button';
import LogoutIcon from '../Icons/LogoutIcon';

const LogoutButton: FC = () => (
  <Button
    onClick={() => {
      void signOut(appAuth);
    }}
    block
    color="error"
    leftDecorator={<LogoutIcon />}
  >
    Logout
  </Button>
);

export default LogoutButton;
