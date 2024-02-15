import React, { type FC } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { push, child, ref, set } from 'firebase/database';

import AnimatedSection from '../../components/AnimatedSection/AnimatedSection';
import FacebookIcon from '../../components/Icons/FacebookIcon';
import GithubIcon from '../../components/Icons/GithubIcon';
import InstagramIcon from '../../components/Icons/InstagramIcon';
import LinkedInIcon from '../../components/Icons/LinkedInIcon';
import MessageIcon from '../../components/Icons/MessageIcon';
import PhoneIcon from '../../components/Icons/PhoneIcon';
import PointIcon from '../../components/Icons/PointIcon';
import { database } from '../../firebase';
import Title from '../../lib/iCoWeABaseUI/components/data-display/Title/Title';
import Flex from '../../lib/iCoWeABaseUI/components/layouts/Flex/Flex';
import Layout from '../../lib/iCoWeABaseUI/components/layouts/Layout/Layout';
import Main from '../../lib/iCoWeABaseUI/components/layouts/Main/Main';
import Stack from '../../lib/iCoWeABaseUI/components/layouts/Stack/Stack';
import { selectUser } from '../../store/slices/user';
import ContactForm from './ContactForm';

export const Component: FC = () => {
  const user = useSelector(selectUser);

  return (
    <Layout>
      <Main>
        <AnimatedSection>
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
                  <PhoneIcon spacing="default" />
                  <Title color="inherit">{user.phone}</Title>
                </Flex>
                <Flex gap="sm">
                  <PointIcon spacing="default" />
                  <Title color="inherit">{`${user.street}, ${user.country}`}</Title>
                </Flex>
                <Flex
                  gap="sm"
                  wrap="nowrap"
                >
                  <MessageIcon
                    spacing="default"
                    className="shrink-0"
                  />
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
                    to={user.githubURL}
                    target="_blanc"
                  >
                    <GithubIcon
                      spacing="default"
                      variant="default"
                      color="primary"
                    />
                  </Link>
                  <Link
                    to={user.linkedinURL}
                    target="_blanc"
                  >
                    <LinkedInIcon
                      spacing="default"
                      variant="default"
                      color="primary"
                    />
                  </Link>
                  <Link
                    to={user.facebookURL}
                    target="_blanc"
                  >
                    <FacebookIcon
                      spacing="default"
                      variant="default"
                      color="primary"
                    />
                  </Link>
                  <Link
                    to={user.instagramURL}
                    target="_blanc"
                  >
                    <InstagramIcon
                      spacing="default"
                      variant="default"
                      color="primary"
                    />
                  </Link>
                </Flex>
              </Stack>
              <ContactForm />
            </Flex>
          </Stack>
        </AnimatedSection>
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
