import React, { type FC } from 'react';

import Spinner from '../../lib/iCoWeaUI/components/feedback/Spinner/Spinner';
import Layout from '../../lib/iCoWeaUI/components/layouts/Layout/Layout';

const LoadingScreen: FC = () => (
  <Layout
    layout="root"
    variant="solid"
    color="primary"
    justify="center"
    align="center"
  >
    <Spinner
      variant="solid"
      color="warning"
    />
  </Layout>
);

export default LoadingScreen;
