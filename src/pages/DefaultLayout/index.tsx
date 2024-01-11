import React, { type FC } from 'react';
import { Outlet } from 'react-router-dom';

import Layout from '../../lib/iCoWeaUI/components/layouts/Layout/Layout';

const DefaultLayout: FC = () => (
  <Layout layout='default'>
    <Outlet />
  </Layout>
);

DefaultLayout.displayName = 'DefaultLayoutRoot';

export default DefaultLayout;
