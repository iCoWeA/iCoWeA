import React, { type FC } from 'react';
import { Outlet } from 'react-router-dom';

import Layout from '../../lib/iCoWeaUI/components/layouts/Layout/Layout';
import Main from '../../lib/iCoWeaUI/components/layouts/Main/Main';
import StandardHeader from './StandardHeader';

export const Component: FC = () => (
  <Layout
    layout="root"
    variant="soft"
    color="neutral"
  >
    <StandardHeader />
    <Layout>
      <Main>
        <Outlet />
      </Main>
    </Layout>
  </Layout>
);

Component.displayName = 'StandardLayoutRoute';
