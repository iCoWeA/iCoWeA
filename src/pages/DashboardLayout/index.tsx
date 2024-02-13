import React, { type FC } from 'react';
import { Outlet } from 'react-router-dom';

import Layout from '../../lib/iCoWeABaseUI/components/layouts/Layout/Layout';
import DashboardFooter from './Footer/DashboardFooter';
import DashboardHeader from './Header/DashboardHeader';

export const Component: FC = () => (
  <Layout
    layout="root"
    variant="soft"
    color="neutral"
  >
    <DashboardHeader />
    <Outlet />
    <DashboardFooter />
  </Layout>
);

Component.displayName = 'DashboardLayoutRoute';
