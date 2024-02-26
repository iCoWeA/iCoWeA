import React, { type FC } from 'react';

import Layout from '../../lib/iCoWeABaseUI/components/layouts/Layout/Layout';
import Main from '../../lib/iCoWeABaseUI/components/layouts/Main/Main';
import Logout from './Logout';

export const Component: FC = () => (
  <Layout layout="default">
    <Main>
      <Logout />
    </Main>
  </Layout>
);

Component.displayName = 'LogoutRoot';
