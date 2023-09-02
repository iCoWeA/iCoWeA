import React, { useEffect, type FC, useContext } from 'react';
import themeContext from '../../lib/simpleComponents/contexts/theme';
import { ScrollRestoration, Outlet } from 'react-router-dom';
import StatusAlert from './StatusAlert';

const Component: FC = () => {
  /* --- Set context props --- */
  const theme = useContext(themeContext).theme;

  /* --- Set background --- */
  useEffect(() => {
    if (theme === 'default') {
      document.body.classList.add('bg-default-background');
    }
  }, []);

  return (
    <>
      <ScrollRestoration />
      <Outlet />
      <StatusAlert />
    </>
  );
};

export default Component;

Component.displayName = 'RootRoute';
