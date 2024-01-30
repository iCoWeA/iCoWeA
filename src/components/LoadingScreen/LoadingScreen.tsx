import React, { type FC } from 'react';

import Spinner from '../../lib/iCoWeABaseUI/components/feedback/Spinner/Spinner';
import Layout from '../../lib/iCoWeABaseUI/components/layouts/Layout/Layout';

const LoadingScreen: FC = () => (
  <Layout
    layout="root"
    variant="solid"
    color="primary"
    justify="center"
    align="center"
  >
    <Spinner variant="solid" />
  </Layout>
);

export default LoadingScreen;
