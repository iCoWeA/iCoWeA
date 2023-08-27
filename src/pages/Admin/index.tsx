import React, { type FC } from 'react';
import { Outlet } from 'react-router-dom';

export const Component: FC = () => <Outlet />;

Component.displayName = 'AdminRoute';
