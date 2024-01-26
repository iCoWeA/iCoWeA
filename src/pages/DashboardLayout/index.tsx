import React, { type FC } from 'react';
import { Outlet } from 'react-router-dom';

import Layout from '../../lib/iCoWeaUI/components/layouts/Layout/Layout';
import Main from '../../lib/iCoWeaUI/components/layouts/Main/Main';
import DashboardHeader from './DashboardHeader';

export const Component: FC = () => (
  <Layout
    layout="root"
    variant="soft"
    color="neutral"
  >
    <DashboardHeader />
    <Layout layout="dashboard">
      <Main>
        <Outlet />
      </Main>
    </Layout>
  </Layout>
);

Component.displayName = 'DashboardLayoutRoute';
