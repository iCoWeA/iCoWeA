import React, { type FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';

import { appAuth } from '../../firebase';
import Button from '../../lib/iCoWeABaseUI/components/inputs/Button/Button';
import LogoutIcon from '../Icons/LogoutIcon';

const LogoutButton: FC = () => {
  const navigate = useNavigate();

  return (
    <Button
      onClick={() => {
        void signOut(appAuth);
        navigate('/logout');
      }}
      block
      variant="soft"
      color="error"
      className="mt-auto"
      leftDecorator={<LogoutIcon />}
    >
      Logout
    </Button>
  );
};

export default LogoutButton;
