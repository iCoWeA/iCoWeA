import React, { type FC } from 'react';
import { useSelector } from 'react-redux';

import Logo from '../../components/Icons/Logo';
import ThemeButton from '../../components/ThemeButton.tsx/ThemeButton';
import ListItem from '../../lib/iCoWeABaseUI/components/data-display/ListItem/ListItem';
import Header from '../../lib/iCoWeABaseUI/components/layouts/Header/Header';
import Navigation from '../../lib/iCoWeABaseUI/components/layouts/Navigation/Navigation';
import Link from '../../lib/iCoWeARouterUI/components/Link/Link';
import Navlink from '../../lib/iCoWeARouterUI/components/Navlink/Navlink';
import { selectBreakpoint, Breakpoints } from '../../store/slices/breakpoint';
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
      {!isSm && (
        <>
          <Navigation className="ml-auto">
            <ListItem>
              <Navlink
                to="/"
                activeVariant="solid"
                activeColor="secondary"
              >
                Home
              </Navlink>
            </ListItem>
            <ListItem>
              <Navlink
                to="projects"
                activeVariant="solid"
                activeColor="secondary"
              >
                Projects
              </Navlink>
            </ListItem>
            <ListItem>
              <Navlink
                to="about"
                activeVariant="solid"
                activeColor="secondary"
              >
                About
              </Navlink>
            </ListItem>
            <ListItem>
              <Navlink
                to="contact"
                activeVariant="solid"
                activeColor="secondary"
              >
                Contact
              </Navlink>
            </ListItem>
          </Navigation>
          <ThemeButton
            icon
            radius="rounded"
          />
        </>
      )}
    </Header>
  );
};

export default StandardHeader;
