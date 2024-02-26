import React, { type FC } from 'react';

import Layout from '../../lib/iCoWeABaseUI/components/layouts/Layout/Layout';
import Main from '../../lib/iCoWeABaseUI/components/layouts/Main/Main';

export const Component: FC = () => (
  <Layout layout="default">
    <Main></Main>
  </Layout>
);

Component.displayName = 'HomeRoute';
