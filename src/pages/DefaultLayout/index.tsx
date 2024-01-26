import React, { type FC } from 'react';
import { Outlet } from 'react-router-dom';

import Layout from '../../lib/iCoWeaUI/components/layouts/Layout/Layout';
import Main from '../../lib/iCoWeaUI/components/layouts/Main/Main';

export const Component: FC = () => (
  <Layout
    variant="solid"
    color="primary"
  >
    <Layout
      layout="standard"
      align="center"
    >
      <Main>
        <Outlet />
      </Main>
    </Layout>
  </Layout>
);

Component.displayName = 'DefaultLayoutRoot';
