import React, { type FC } from 'react';
import useBreakpoint, { Breakpoints } from '../../lib/simpleComponents/hooks/useBreakpoint';
import Header from '../../lib/simpleComponents/components/layouts/Header';
import Container from '../../lib/simpleComponents/components/UI/Container';
import DashboardMenuButton from './DashboardMenuButton';
import DashboardLogo from './DashboardLogo';
import DashboardAvatar from './DashboardAvatar';

const DashboardHeader: FC = () => {
  /* --- Set default props --- */
  const breakpoint = useBreakpoint();

  if (breakpoint === Breakpoints.SM) {
    return (
      <Header
        color="light"
        className="justify-between px-[16px]"
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
      color="light"
      className="justify-between pr-[32px] md:pl-6"
    >
      <DashboardLogo />
      <DashboardAvatar />
    </Header>
  );
};

export default DashboardHeader;
