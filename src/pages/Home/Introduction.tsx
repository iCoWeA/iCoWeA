import React, { type FC } from 'react';
import { useSelector } from 'react-redux';

import AnimatedSection from '../../components/AnimatedSection/AnimatedSection';
import MovableAvatar from '../../components/MovableAvatar/MovableAvatar';
import Title from '../../lib/iCoWeABaseUI/components/data-display/Title/Title';
import Flex from '../../lib/iCoWeABaseUI/components/layouts/Flex/Flex';
import Stack from '../../lib/iCoWeABaseUI/components/layouts/Stack/Stack';
import LinkButton from '../../lib/iCoWeARouterUI/components/LinkButton/LinkButton';
import { upperCaseFirstLetter } from '../../lib/iCoWeAUtilsUI/utils/utils';
import { selectUser } from '../../store/slices/user';

const Introduction: FC = () => {
  const user = useSelector(selectUser);

  return (
    <AnimatedSection>
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
          alt={`${upperCaseFirstLetter(user.firstname)} ${upperCaseFirstLetter(user.lastname)}`}
          src={user.imageURL}
        />
      </Flex>
    </AnimatedSection>
  );
};

export default Introduction;
