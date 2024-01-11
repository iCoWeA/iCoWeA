import React, { type FC } from 'react';
import { Outlet } from 'react-router-dom';

import Layout from '../../lib/iCoWeaUI/components/layouts/Layout/Layout';
import Main from '../../lib/iCoWeaUI/components/layouts/Main/Main';

const DefaultLayout: FC = () => (
  <Layout layout="default">
    <Main>
      <Outlet />
    </Main>
  </Layout>
);

DefaultLayout.displayName = 'DefaultLayoutRoot';

export default DefaultLayout;
