import React, { type FC } from 'react';
import { Outlet } from 'react-router-dom';
import Container from '../../lib/simpleComponents/components/UI/Container';

export const Component: FC = () => (
  <Container variant="standard">
    <Outlet />
  </Container>
);

Component.displayName = 'StandardLayoutRoute';
