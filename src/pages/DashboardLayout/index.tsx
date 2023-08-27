import React, { type FC } from 'react';
import Container from '../../lib/simpleComponents/components/UI/Container';
import DashboardHeader from './DashboardHeader';
import { Outlet } from 'react-router-dom';

export const Component: FC = () => (
  <Container variant="dashboard">
    <DashboardHeader />
    <Outlet />
  </Container>
);

Component.displayName = 'DashboardLayoutRoute';
