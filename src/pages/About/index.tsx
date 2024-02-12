import React, { type FC } from 'react';
import { useSelector } from 'react-redux';

import MovableAvatar from '../../components/MovableAvatar/MovableAvatar';
import Text from '../../lib/iCoWeABaseUI/components/data-display/Text/Text';
import Title from '../../lib/iCoWeABaseUI/components/data-display/Title/Title';
import Flex from '../../lib/iCoWeABaseUI/components/layouts/Flex/Flex';
import Section from '../../lib/iCoWeABaseUI/components/layouts/Section/Section';
import Stack from '../../lib/iCoWeABaseUI/components/layouts/Stack/Stack';
import LinkButton from '../../lib/iCoWeARouterUI/components/LinkButton/LinkButton';
import { selectUser } from '../../store/slices/user';

export const Component: FC = () => {
  const user = useSelector(selectUser);

  return (
    <Section className="animate-slide">
      <Flex
        wrap="nowrap"
        justify="center"
        gap="lg"
        className="max-lg:flex-col"
      >
        <MovableAvatar
          distance={10}
          border
          className="w-full max-w-[25rem] border-8"
          src={require('../../assets/images/photo.png')}
        />
        <Stack gap="sm">
          <Title
            size="5"
            color="inherit"
          >
            Software developer
          </Title>
          <Title
            size="1"
            gutter
            color="secondary"
          >
            {(user?.firstname ?? '') + ' ' + (user?.lastname ?? '')}
          </Title>
          <Text
            size="lg"
            gutter
            color="inherit"
          >
            {user?.about}
          </Text>
          <Flex gap="sm">
            <LinkButton
              to="projects"
              size="lg"
              variant="solid"
              color="secondary"
            >
              View my works
            </LinkButton>
            <LinkButton
              to="contact"
              size="lg"
              variant="default"
              color="secondary"
            >
              Get in touch
            </LinkButton>
          </Flex>
        </Stack>
      </Flex>
    </Section>
  );
};

Component.displayName = 'HomeRoute';
