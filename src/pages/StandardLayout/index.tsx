import React, { type FC } from 'react';
import { Outlet } from 'react-router-dom';
import MainFooter from '../../layouts/MainFooter';
import MainHeader from '../../layouts/MainHeader';
import Box from '../../lib/simpleComponents/components/UI/Box';
import Divider from '../../lib/simpleComponents/components/UI/Divider';

export const Component: FC = () => (
  <Box variant="layout">
    <MainHeader />
    <Outlet />
    <Divider />
    <MainFooter />
  </Box>
);

Component.displayName = 'StandardLayoutRoute';
