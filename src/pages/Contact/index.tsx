import React, { type FC } from 'react';
import { useSelector } from 'react-redux';

import Icon from '../../lib/iCoWeABaseUI/components/data-display/Icon/Icon';
import Title from '../../lib/iCoWeABaseUI/components/data-display/Title/Title';
import Flex from '../../lib/iCoWeABaseUI/components/layouts/Flex/Flex';
import Layout from '../../lib/iCoWeABaseUI/components/layouts/Layout/Layout';
import Main from '../../lib/iCoWeABaseUI/components/layouts/Main/Main';
import Section from '../../lib/iCoWeABaseUI/components/layouts/Section/Section';
import Stack from '../../lib/iCoWeABaseUI/components/layouts/Stack/Stack';
import { selectUser } from '../../store/slices/user';
import ContactForm from './ContactForm';

export const Component: FC = () => {
  const user = useSelector(selectUser);

  return (
    <Layout>
      <Main>
        <Section className="animate-slide">
          <Stack gap="xxl">
            <Title
              size="1"
              color="secondary"
            >
              Contact
            </Title>
            <Flex gap="xxl">
              <Stack gap="lg">
                <Flex gap="sm">
                  <Icon spacing="default">
                    <svg
                      focusable="false"
                      viewBox="0 0 24 24"
                    >
                      <path d="M16 1H8C6.34 1 5 2.34 5 4v16c0 1.66 1.34 3 3 3h8c1.66 0 3-1.34 3-3V4c0-1.66-1.34-3-3-3m-2 20h-4v-1h4zm3.25-3H6.75V4h10.5z"></path>
                    </svg>
                  </Icon>
                  <Title color="inherit">{user.phone}</Title>
                </Flex>
                <Flex gap="sm">
                  <Icon spacing="default">
                    <svg
                      focusable="false"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7m0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5"></path>
                    </svg>
                  </Icon>
                  <Title color="inherit">{`${user.street}, ${user.country}`}</Title>
                </Flex>
                <Flex
                  gap="sm"
                  wrap="nowrap"
                >
                  <Icon
                    spacing="default"
                    className="shrink-0"
                  >
                    <svg
                      focusable="false"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 4-8 5-8-5V6l8 5 8-5z"></path>
                    </svg>
                  </Icon>
                  <Title
                    color="inherit"
                    className="break-all"
                  >
                    {user.email}
                  </Title>
                </Flex>
              </Stack>
              <ContactForm />
            </Flex>
          </Stack>
        </Section>
      </Main>
    </Layout>
  );
};

Component.displayName = 'ContactRoute';
