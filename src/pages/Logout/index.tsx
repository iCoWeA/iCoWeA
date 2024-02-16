import React, { type FC } from 'react';

import HomeIcon from '../../components/Icons/HomeIcon';
import LoginIcon from '../../components/Icons/LoginIcon';
import Title from '../../lib/iCoWeABaseUI/components/data-display/Title/Title';
import Flex from '../../lib/iCoWeABaseUI/components/layouts/Flex/Flex';
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
          align="center"
          gap="lg"
          className="w-full max-w-[30rem] mx-auto"
        >
          <Title
            size="2"
            color="inherit"
          >
            LOGOUT
          </Title>
          <Flex
            block
            wrap="nowrap"
            gap="lg"
          >
            <LinkButton
              to="/login"
              block
              variant="solid"
              color="secondary"
              leftDecorator={<LoginIcon />}
            >
              LOGIN IN
            </LinkButton>
            <LinkButton
              to="/"
              block
              variant="text"
              color="neutral"
              leftDecorator={<HomeIcon />}
            >
              HOME PAGE
            </LinkButton>
          </Flex>
        </Card>
      </Section>
    </Main>
  </Layout>
);

Component.displayName = 'LogoutRoot';
