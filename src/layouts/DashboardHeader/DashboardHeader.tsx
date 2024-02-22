import React, { type FC } from 'react';
import { useSelector } from 'react-redux';

import Logo from '../../components/Icons/Logo';
import Avatar from '../../lib/iCoWeABaseUI/components/data-display/Avatar/Avatar';
import Text from '../../lib/iCoWeABaseUI/components/data-display/Text/Text';
import Title from '../../lib/iCoWeABaseUI/components/data-display/Title/Title';
import Grid from '../../lib/iCoWeABaseUI/components/layouts/Grid/Grid';
import Header from '../../lib/iCoWeABaseUI/components/layouts/Header/Header';
import Link from '../../lib/iCoWeARouterUI/components/Link/Link';
import { upperCaseFirstLetter } from '../../lib/iCoWeAUtilsUI/utils/utils';
import { selectBreakpoint, Breakpoints } from '../../store/slices/breakpoint';
import { selectUser } from '../../store/slices/user';
import MobileNavigation from './MobileNavigation';

const DashboardHeader: FC = () => {
  const breakpoint = useSelector(selectBreakpoint);
  const user = useSelector(selectUser);
  const name = `${upperCaseFirstLetter(user.firstname)} ${upperCaseFirstLetter(user.lastname)}`;

  const isSm = breakpoint === Breakpoints.SM || breakpoint === Breakpoints.MD;

  return (
    <Header
      block
      shadow
    >
      {isSm && <MobileNavigation />}
      {!isSm && (
        <Link to="">
          <Logo />
        </Link>
      )}
      <Grid
        colGap="base"
        className="grid-cols-[auto_auto]"
      >
        <Title>{name}</Title>
        <Avatar
          color="neutral"
          alt={name}
          className="row-span-2"
          src={user.imageURL}
        />
        <Text
          size="sm"
          align="right"
        >
          Admin
        </Text>
      </Grid>
    </Header>
  );
};

export default DashboardHeader;
