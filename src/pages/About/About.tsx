import React, { type FC } from 'react';
import { useSelector } from 'react-redux';

import AnimatedSection from '../../components/AnimatedSection/AnimatedSection';
import MovableAvatar from '../../components/MovableAvatar/MovableAvatar';
import Text from '../../lib/iCoWeABaseUI/components/data-display/Text/Text';
import Title from '../../lib/iCoWeABaseUI/components/data-display/Title/Title';
import Flex from '../../lib/iCoWeABaseUI/components/layouts/Flex/Flex';
import Stack from '../../lib/iCoWeABaseUI/components/layouts/Stack/Stack';
import LinkButton from '../../lib/iCoWeARouterUI/components/LinkButton/LinkButton';
import { upperCaseFirstLetter } from '../../lib/iCoWeAUtilsUI/utils/utils';
import { selectUser } from '../../store/slices/user';

const About: FC = () => {
  const user = useSelector(selectUser);

  return (
    <AnimatedSection>
      <Flex
        wrap="nowrap"
        gap="xxl"
        className="max-lg:flex-col"
      >
        <MovableAvatar
          alt={`${upperCaseFirstLetter(user.firstname)} ${upperCaseFirstLetter(user.lastname)}`}
          src={user.imageURL}
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
            {`${user.firstname} ${user.lastname}`}
          </Title>
          <Text
            size="lg"
            gutter
            color="inherit"
          >
            {user.about}
          </Text>
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
      </Flex>
    </AnimatedSection>
  );
};

export default About;
