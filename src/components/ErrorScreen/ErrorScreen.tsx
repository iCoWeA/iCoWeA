import React, { type ReactNode, type FC } from 'react';

import Title from '../../lib/iCoWeABaseUI/components/data-display/Title/Title';
import Layout from '../../lib/iCoWeABaseUI/components/layouts/Layout/Layout';

type ErrorScreenProps = {
  children?: ReactNode;
};

const ErrorScreen: FC<ErrorScreenProps> = ({ children }) => (
  <Layout
    layout="root"
    variant="soft"
    color="primary"
    justify="center"
    align="center"
  >
    <Title
      size="2"
      color="inherit"
    >
      ERROR
    </Title>
    {children && (
      <Title
        size="3"
        color="inherit"
      >
        {children}
      </Title>
    )}
  </Layout>
);

export default ErrorScreen;
