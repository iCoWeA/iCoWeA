import React, { type FC } from 'react';
import { Outlet } from 'react-router-dom';
import MainHeader from '../../layouts/MainHeader';

export const Component: FC = () => (
  <>
    <MainHeader />
    <Outlet />
  </>
);

Component.displayName = 'StandardLayoutRoute';
