import React, { type FC } from 'react';
import { Outlet } from 'react-router-dom';

import StandardFooter from '../../layouts/StandardFooter/StandardFooter';
import StandardHeader from '../../layouts/StandardHeader/StandardHeader';
import Layout from '../../lib/iCoWeABaseUI/components/layouts/Layout/Layout';

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
