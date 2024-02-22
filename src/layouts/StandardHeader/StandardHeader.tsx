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

  const isSm = breakpoint === Breakpoints.SM || breakpoint === Breakpoints.MD;

  return (
    <Header
      justify={isSm ? 'between' : 'start'}
      shadow
    >
      <Link to="/">
        <Logo />
      </Link>
      {isSm && <MobileNavigation />}
      {!isSm && <DefaultNavigation />}
    </Header>
  );
};

export default StandardHeader;
