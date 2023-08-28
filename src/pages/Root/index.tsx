import React, { useEffect, type FC } from 'react';
import { ScrollRestoration, Outlet } from 'react-router-dom';

const Component: FC = () => {
  useEffect(() => {
    document.body.classList.add('bg-default-default');
  }, []);

  return (
    <>
      <ScrollRestoration />
      <Outlet />
    </>
  );
};

export default Component;

Component.displayName = 'RootRoute';
