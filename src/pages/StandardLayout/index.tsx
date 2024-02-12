import React, { type FC } from 'react';
import { Outlet } from 'react-router-dom';

import Layout from '../../lib/iCoWeABaseUI/components/layouts/Layout/Layout';
import StandardFooter from './Footer/StandardFooter';
import StandardHeader from './Header/StandardHeader';

export const Component: FC = () => (
  <Layout
    layout="root"
    variant="solid"
    color="primary"
  >
    <StandardHeader />
    <Outlet />
    <StandardFooter />
  </Layout>
);

Component.displayName = 'StandardLayoutRoute';
