import React, { type FC } from 'react';
import { Outlet } from 'react-router-dom';

import Layout from '../../lib/iCoWeABaseUI/components/layouts/Layout/Layout';
import Main from '../../lib/iCoWeABaseUI/components/layouts/Main/Main';
import StandardFooter from './StandardFooter';
import StandardHeader from './StandardHeader';

export const Component: FC = () => (
  <Layout
    layout="root"
    variant="solid"
    color="primary"
  >
    <StandardHeader />
    <Layout>
      <Main>
        <Outlet />
      </Main>
    </Layout>
    <StandardFooter />
  </Layout>
);

Component.displayName = 'StandardLayoutRoute';
