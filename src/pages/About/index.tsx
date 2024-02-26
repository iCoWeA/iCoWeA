import React, { type FC } from 'react';

import Layout from '../../lib/iCoWeABaseUI/components/layouts/Layout/Layout';
import Main from '../../lib/iCoWeABaseUI/components/layouts/Main/Main';
import About from './About';

export const Component: FC = () => (
  <Layout layout="default">
    <Main>
      <About />
    </Main>
  </Layout>
);

Component.displayName = 'AboutRoute';
