import React, { type ReactNode, type FC } from 'react';

import Title from '../../lib/iCoWeaUI/components/data-display/Title/Title';
import Layout from '../../lib/iCoWeaUI/components/layouts/Layout/Layout';

type ErrorScreenProps = {
  children?: ReactNode;
};

const ErrorScreen: FC<ErrorScreenProps> = ({ children }) => (
  <Layout
    layout="root"
    variant="solid"
    color="primary"
    justify="center"
    align="center"
  >
    <Title variant="2">ERROR</Title>
    {children && <Title variant="3">{children}</Title>}
  </Layout>
);

export default ErrorScreen;
