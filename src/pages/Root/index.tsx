import React, { type FC } from 'react';

import { ScrollRestoration, Outlet } from 'react-router-dom';
import Layout from '../../lib/iCoWeaUI/components/layouts/Layout/Layout';

const Component: FC = () => (
  <>
    <ScrollRestoration />
    <Layout layout="root">
      <Outlet />
    </Layout>
  </>
);

export default Component;

Component.displayName = 'RootRoute';
