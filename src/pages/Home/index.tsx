import React, { type FC } from 'react';

import Layout from '../../lib/iCoWeABaseUI/components/layouts/Layout/Layout';
import Main from '../../lib/iCoWeABaseUI/components/layouts/Main/Main';
import Introduction from './Introduction';

export const Component: FC = () => (
  <Layout layout="default">
    <Main>
      <Introduction />
    </Main>
  </Layout>
);

Component.displayName = 'HomeRoute';
