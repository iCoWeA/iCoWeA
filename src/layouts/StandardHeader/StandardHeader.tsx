import React, { type FC } from 'react';
import { useSelector } from 'react-redux';

import Logo from '../../components/Icons/Logo';
import Header from '../../lib/iCoWeABaseUI/components/layouts/Header/Header';
import Link from '../../lib/iCoWeARouterUI/components/Link/Link';
import { selectBreakpoint, Breakpoints } from '../../store/slices/breakpoint';
import DefaultNavigation from './DefaultNavigation';
import MobileNavigation from './MobileNavigation';

const StandardHeader: FC = () => {
  const breakpoint = useSelector(selectBreakpoint);

  return (
    <Header shadow>
      <Link to="/">
        <Logo />
      </Link>
      {(breakpoint === Breakpoints.SM || breakpoint === Breakpoints.MD) && <MobileNavigation />}
      {breakpoint !== Breakpoints.SM && breakpoint !== Breakpoints.MD && <DefaultNavigation />}
    </Header>
  );
};

export default StandardHeader;
