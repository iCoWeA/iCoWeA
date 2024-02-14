import React, { type FC } from 'react';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';

import DashboardFooter from '../../layouts/DashboardFooter/DashboardFooter';
import DashboardHeader from '../../layouts/DashboardHeader/DashboardHeader';
import DashboardSidebar from '../../layouts/DashboardSidebar/DashboardSidebar';
import Layout from '../../lib/iCoWeABaseUI/components/layouts/Layout/Layout';
import { selectBreakpoint, Breakpoints } from '../../store/slices/breakpoint';

export const Component: FC = () => {
  const breakpoint = useSelector(selectBreakpoint);

  return (
    <Layout
      layout="root"
      variant="soft"
      color="neutral"
    >
      <DashboardHeader />
      {(breakpoint === Breakpoints.SM || breakpoint === Breakpoints.MD) && (
        <Layout layout="dashboard">
          <Outlet />
        </Layout>
      )}
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
