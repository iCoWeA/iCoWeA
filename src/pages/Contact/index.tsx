import React, { type FC } from 'react';
import { useSelector } from 'react-redux';
import { push, child, ref, set } from 'firebase/database';

import { database } from '../../firebase';
import Icon from '../../lib/iCoWeABaseUI/components/data-display/Icon/Icon';
import Title from '../../lib/iCoWeABaseUI/components/data-display/Title/Title';
import Flex from '../../lib/iCoWeABaseUI/components/layouts/Flex/Flex';
import Layout from '../../lib/iCoWeABaseUI/components/layouts/Layout/Layout';
import Main from '../../lib/iCoWeABaseUI/components/layouts/Main/Main';
import Section from '../../lib/iCoWeABaseUI/components/layouts/Section/Section';
import Stack from '../../lib/iCoWeABaseUI/components/layouts/Stack/Stack';
import Link from '../../lib/iCoWeARouterUI/components/Link/Link';
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
            <Flex
              align="start"
              gap="xxl"
            >
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
                <Flex
                  justify="between"
                  align="end"
                  grow
                >
                  <Link
                    to={user.github}
                    color="inherit"
                  >
                    <Icon spacing="default">
                      <svg
                        focusable="false"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 1.27a11 11 0 00-3.48 21.46c.55.09.73-.28.73-.55v-1.84c-3.03.64-3.67-1.46-3.67-1.46-.55-1.29-1.28-1.65-1.28-1.65-.92-.65.1-.65.1-.65 1.1 0 1.73 1.1 1.73 1.1.92 1.65 2.57 1.2 3.21.92a2 2 0 01.64-1.47c-2.47-.27-5.04-1.19-5.04-5.5 0-1.1.46-2.1 1.2-2.84a3.76 3.76 0 010-2.93s.91-.28 3.11 1.1c1.8-.49 3.7-.49 5.5 0 2.1-1.38 3.02-1.1 3.02-1.1a3.76 3.76 0 010 2.93c.83.74 1.2 1.74 1.2 2.94 0 4.21-2.57 5.13-5.04 5.4.45.37.82.92.82 2.02v3.03c0 .27.1.64.73.55A11 11 0 0012 1.27"></path>
                      </svg>
                    </Icon>
                  </Link>
                  <Link
                    to={user.linkedin}
                    color="inherit"
                  >
                    <Icon spacing="default">
                      <svg
                        focusable="false"
                        viewBox="0 0 24 24"
                      >
                        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"></path>
                      </svg>
                    </Icon>
                  </Link>
                  <Link
                    to={user.facebook}
                    color="inherit"
                  >
                    <Icon spacing="default">
                      <svg
                        focusable="false"
                        viewBox="0 0 24 24"
                      >
                        <path d="M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2m13 2h-2.5A3.5 3.5 0 0 0 12 8.5V11h-2v3h2v7h3v-7h3v-3h-3V9a1 1 0 0 1 1-1h2V5z"></path>
                      </svg>
                    </Icon>
                  </Link>
                  <Link
                    to={user.instagram}
                    color="inherit"
                  >
                    <Icon spacing="default">
                      <svg
                        focusable="false"
                        viewBox="0 0 24 24"
                      >
                        <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path>
                      </svg>
                    </Icon>
                  </Link>
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

export const action = async ({ request }: { request: Request }): Promise<unknown> => {
  const formData = await request.formData();

  const data = {
    name: formData.get('name')?.toString() ?? '',
    email: formData.get('email')?.toString() ?? '',
    subject: formData.get('subject')?.toString() ?? '',
    message: formData.get('message')?.toString() ?? ''
  };

  const key = push(child(ref(database), 'messages')).key;

  if (key === null) {
    throw new Error('No key !');
  }

  await set(ref(database, `messages/${key}`), data);

  return data;
};

Component.displayName = 'ContactRoute';
