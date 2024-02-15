import React, { type FC } from 'react';
import { useSelector } from 'react-redux';

import Logo from '../../components/Icons/Logo';
import Avatar from '../../lib/iCoWeABaseUI/components/data-display/Avatar/Avatar';
import Text from '../../lib/iCoWeABaseUI/components/data-display/Text/Text';
import Title from '../../lib/iCoWeABaseUI/components/data-display/Title/Title';
import Flex from '../../lib/iCoWeABaseUI/components/layouts/Flex/Flex';
import Header from '../../lib/iCoWeABaseUI/components/layouts/Header/Header';
import Stack from '../../lib/iCoWeABaseUI/components/layouts/Stack/Stack';
import Link from '../../lib/iCoWeARouterUI/components/Link/Link';
import { upperCaseFirstLetter } from '../../lib/iCoWeAUtilsUI/utils/utils';
import { selectBreakpoint, Breakpoints } from '../../store/slices/breakpoint';
import { selectUser } from '../../store/slices/user';
import MobileNavigation from './MobileNavigation';

const DashboardHeader: FC = () => {
  const breakpoint = useSelector(selectBreakpoint);
  const user = useSelector(selectUser);
  const name = `${upperCaseFirstLetter(user.firstname)} ${upperCaseFirstLetter(user.lastname)}`;

  return (
    <Header
      block
      shadow
    >
      {(breakpoint === Breakpoints.SM || breakpoint === Breakpoints.MD) && <MobileNavigation />}
      {breakpoint !== Breakpoints.SM && breakpoint !== Breakpoints.MD && (
        <Link to="">
          <Logo />
        </Link>
      )}
      <Flex gap="base">
        <Stack>
          <Title>{name}</Title>
          <Text
            size="sm"
            align="right"
          >
            Admin
          </Text>
        </Stack>
        <Avatar
          color="neutral"
          alt={name}
          src={user.imageURL}
        />
      </Flex>
    </Header>
  );
};

export default DashboardHeader;
