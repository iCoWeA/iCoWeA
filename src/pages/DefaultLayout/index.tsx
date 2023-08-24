import React, { type FC } from 'react';
import Container from '../../lib/simpleComponents/components/UI/Container';
import { Outlet } from 'react-router-dom';

export const Component: FC = () => (
  <Container variant="default">
    <Outlet />
  </Container>
);

Component.displayName = 'DefaultLayoutRoute';
