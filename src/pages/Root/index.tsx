import React, { useEffect, type FC } from 'react';
import { ScrollRestoration, Outlet } from 'react-router-dom';
import StatusAlert from './StatusAlert';

const Component: FC = () => {
  useEffect(() => {
    document.body.classList.add('bg-default-divider');
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
