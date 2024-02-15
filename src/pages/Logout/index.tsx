import React, { type FC } from 'react';

import HomeIcon from '../../components/Icons/HomeIcon';
import Layout from '../../lib/iCoWeABaseUI/components/layouts/Layout/Layout';
import Main from '../../lib/iCoWeABaseUI/components/layouts/Main/Main';
import Section from '../../lib/iCoWeABaseUI/components/layouts/Section/Section';
import Card from '../../lib/iCoWeABaseUI/components/surfaces/Card/Card';
import LinkButton from '../../lib/iCoWeARouterUI/components/LinkButton/LinkButton';

export const Component: FC = () => (
  <Layout layout="default">
    <Main>
      <Section>
        <Card
          spacing="lg"
          gap="lg"
          className="w-full max-w-[30rem] mx-auto"
        >
          <LinkButton
            to="/"
            variant="solid"
            leftDecorator={<HomeIcon />}
          >
            Home
          </LinkButton>
        </Card>
      </Section>
    </Main>
  </Layout>
);

Component.displayName = 'LogoutRoot';
