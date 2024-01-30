import React, { type FC } from 'react';
import { useSelector } from 'react-redux';

import Logo from '../../../components/Icons/Logo';
import ListItem from '../../../lib/iCoWeABaseUI/components/data-display/ListItem/ListItem';
import Header from '../../../lib/iCoWeABaseUI/components/layouts/Header/Header';
import Navigation from '../../../lib/iCoWeABaseUI/components/layouts/Navigation/Navigation';
import Navlink from '../../../lib/iCoWeARouterUI/components/Navlink/Navlink';
import { selectBreakpoint, Breakpoints } from '../../../store/slices/breakpoint';
import MobileNavigation from './MobileNavigation';

const StandardHeader: FC = () => {
  const breakpoint = useSelector(selectBreakpoint);

  return (
    <Header>
      <Logo />
      {(breakpoint === Breakpoints.SM || breakpoint === Breakpoints.MD) && <MobileNavigation />}
      {breakpoint !== Breakpoints.SM && breakpoint !== Breakpoints.MD && (
        <Navigation>
          <ListItem spacing="none">
            <Navlink
              to="/"
              size="lg"
              activeVariant="solid"
            >
              Home
            </Navlink>
          </ListItem>
          <ListItem spacing="none">
            <Navlink
              to="projects"
              size="lg"
              activeVariant="solid"
            >
              Projects
            </Navlink>
          </ListItem>
          <ListItem spacing="none">
            <Navlink
              to="about"
              size="lg"
              activeVariant="solid"
            >
              About
            </Navlink>
          </ListItem>
          <ListItem spacing="none">
            <Navlink
              to="contact"
              size="lg"
              activeVariant="solid"
            >
              Contact
            </Navlink>
          </ListItem>
        </Navigation>
      )}
    </Header>
  );
};

export default StandardHeader;
