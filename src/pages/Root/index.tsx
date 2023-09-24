import React, { type FC } from 'react';
import { ScrollRestoration, Outlet } from 'react-router-dom';

const Component: FC = () => (
  <>
    <ScrollRestoration />
    <Outlet />
  </>
);

export default Component;

Component.displayName = 'RootRoute';
