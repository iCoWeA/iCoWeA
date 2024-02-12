import React, { type FC } from 'react';
import { Outlet } from 'react-router-dom';

import Layout from '../../lib/iCoWeABaseUI/components/layouts/Layout/Layout';
import Main from '../../lib/iCoWeABaseUI/components/layouts/Main/Main';

export const Component: FC = () => (
  <Layout
    layout="root"
    variant="soft"
    color="primary"
  >
    <Layout layout="default">
      <Main>
        <Outlet />
      </Main>
    </Layout>
  </Layout>
);

Component.displayName = 'DefaultLayoutRoot';
