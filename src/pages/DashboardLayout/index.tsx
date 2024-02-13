import React, { type FC } from 'react';
import { Outlet } from 'react-router-dom';

import Flex from '../../lib/iCoWeABaseUI/components/layouts/Flex/Flex';
import Layout from '../../lib/iCoWeABaseUI/components/layouts/Layout/Layout';
import DashboardFooter from './Footer/DashboardFooter';
import DashboardHeader from './Header/DashboardHeader';
import DashboardSidebar from './Sidebar/DashboardSidebar';

export const Component: FC = () => (
  <Layout
    layout="root"
    variant="soft"
    color="neutral"
  >
    <DashboardHeader />
    <Flex
      wrap="nowrap"
      align="stretch"
      className="grow"
    >
      <DashboardSidebar />
      <Outlet />
    </Flex>
    <DashboardFooter />
  </Layout>
);

Component.displayName = 'DashboardLayoutRoute';
