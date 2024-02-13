import React, { type FC } from 'react';
import { Outlet } from 'react-router-dom';

import Layout from '../../lib/iCoWeABaseUI/components/layouts/Layout/Layout';
import DashboardFooter from './Footer/DashboardFooter';
import DashboardHeader from './Header/DashboardHeader';
import DashboardSidebar from './Sidebar/DashboardSidebar';
import { useSelector } from 'react-redux';
import { Breakpoints, selectBreakpoint } from '../../store/slices/breakpoint';

export const Component: FC = () => {
  const breakpoint = useSelector(selectBreakpoint);

  return (
    <Layout
      layout="root"
      variant="soft"
      color="neutral"
    >
      <DashboardHeader />
      {(breakpoint === Breakpoints.SM || breakpoint === Breakpoints.MD) && <Outlet />}
      {breakpoint !== Breakpoints.SM && breakpoint !== Breakpoints.MD && (
        <Layout layout="dashboard">
          <DashboardSidebar />
          <Outlet />
        </Layout>
      )}
      <DashboardFooter />
    </Layout>
  );
};

Component.displayName = 'DashboardLayoutRoute';
