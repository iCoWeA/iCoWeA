import React, { type FC } from 'react';
import { Outlet } from 'react-router-dom';
import MainFooter from '../../layouts/MainFooter';
import MainHeader from '../../layouts/MainHeader';
import Box from '../../lib/simpleComponents/components/UI/Box';

export const Component: FC = () => (
  <Box variant="layout">
    <MainHeader />
    <Outlet />
    <MainFooter />
  </Box>
);

Component.displayName = 'StandardLayoutRoute';
