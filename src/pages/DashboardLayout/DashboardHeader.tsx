import React, { type FC } from 'react';
import useBreakpoint, { Breakpoints } from '../../lib/simpleComponents/hooks/useBreakpoint';
import Header from '../../lib/simpleComponents/components/layouts/Header';
import Container from '../../lib/simpleComponents/components/UI/Container';
import DashboardMenuButton from './DashboardMenuButton';
import DashboardLogo from './DashboardLogo';
import DashboardAvatar from './DashboardAvatar';

const DashboardHeader: FC = () => {
  const breakpoint = useBreakpoint();

  if (breakpoint === Breakpoints.SM) {
    return (
      <Header
        flex
        color="light"
        className="justify-between"
      >
        <Container>
          <DashboardMenuButton />
          <DashboardLogo />
        </Container>
        <DashboardAvatar />
      </Header>
    );
  }

  return (
    <Header
      flex
      color="light"
      className="justify-between md:pl-6"
    >
      <DashboardLogo />
      <DashboardAvatar />
    </Header>
  );
};

export default DashboardHeader;
