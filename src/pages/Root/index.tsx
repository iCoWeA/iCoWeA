import React, { useEffect, type FC } from 'react';
import { Outlet, ScrollRestoration } from 'react-router-dom';

const Component: FC = () => {
  useEffect(() => {
    document.body.classList.add('bg-default-body');
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
