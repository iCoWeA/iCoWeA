import React, { type FC } from 'react';
import { Outlet } from 'react-router-dom';
import MainHeader from '../../layouts/MainHeader';
import Container from '../../lib/simpleComponents/components/UI/Container';

export const Component: FC = () => (
  <Container variant="page">
    <MainHeader />
    <Outlet />
  </Container>
);

Component.displayName = 'StandardLayoutRoute';
