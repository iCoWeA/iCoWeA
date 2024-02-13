import React, { type FC } from 'react';
import { useSelector } from 'react-redux';

import MovableAvatar from '../../components/MovableAvatar/MovableAvatar';
import Title from '../../lib/iCoWeABaseUI/components/data-display/Title/Title';
import Flex from '../../lib/iCoWeABaseUI/components/layouts/Flex/Flex';
import Layout from '../../lib/iCoWeABaseUI/components/layouts/Layout/Layout';
import Main from '../../lib/iCoWeABaseUI/components/layouts/Main/Main';
import Section from '../../lib/iCoWeABaseUI/components/layouts/Section/Section';
import Stack from '../../lib/iCoWeABaseUI/components/layouts/Stack/Stack';
import LinkButton from '../../lib/iCoWeARouterUI/components/LinkButton/LinkButton';
import { selectUser } from '../../store/slices/user';

export const Component: FC = () => {
  const user = useSelector(selectUser);

  return (
    <Layout layout="default">
      <Main>
        <Section className="animate-slide">
          <Flex
            wrap="nowrap"
            gap="xxl"
            className="max-lg:flex-col"
          >
            <Stack gap="sm">
              <Title
                size="3"
                color="inherit"
              >
                Hi, I&apos;m
              </Title>
              <Title
                size="1"
                gutter
                color="secondary"
              >
                {`${user.firstname} ${user.lastname}`}
              </Title>
              <Title
                size="4"
                color="inherit"
              >
                SOFTWARE DEVELOPER
              </Title>
              <Title
                size="5"
                color="inherit"
                gutter
              >
                based in Košice, Slovakia.
              </Title>
              <Flex gap="sm">
                <LinkButton
                  to="/projects"
                  size="lg"
                  variant="solid"
                  color="secondary"
                >
                  View my works
                </LinkButton>
                <LinkButton
                  to="/contact"
                  size="lg"
                  variant="default"
                  color="secondary"
                >
                  Get in touch
                </LinkButton>
              </Flex>
            </Stack>
            <MovableAvatar
              distance={10}
              border
              className="w-full max-w-[25rem] border-8"
              src={require('../../assets/images/photo.png')}
            />
          </Flex>
        </Section>
      </Main>
    </Layout>
  );
};

Component.displayName = 'HomeRoute';
