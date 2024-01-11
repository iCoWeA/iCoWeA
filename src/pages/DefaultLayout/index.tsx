import React, { type FC } from 'react';
import { Outlet } from 'react-router-dom';

import Layout from '../../lib/iCoWeaUI/components/layouts/Layout/Layout';
import Main from '../../lib/iCoWeaUI/components/layouts/Main/Main';

export const Component: FC = () => (
  <Layout
    layout="default"
    variant="solid"
    color="primary"
  >
    <Layout layout="fullbleed">
      <Main>
        <Outlet />
      </Main>
    </Layout>
  </Layout>
);

Component.displayName = 'DefaultLayoutRoot';
