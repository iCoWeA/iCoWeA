import React, { type FC } from 'react';
import { useSelector } from 'react-redux';

import Logo from '../../components/Icons/Logo';
import Icon from '../../lib/iCoWeABaseUI/components/data-display/Icon/Icon';
import ListItem from '../../lib/iCoWeABaseUI/components/data-display/ListItem/ListItem';
import Button from '../../lib/iCoWeABaseUI/components/inputs/Button/Button';
import Header from '../../lib/iCoWeABaseUI/components/layouts/Header/Header';
import Navigation from '../../lib/iCoWeABaseUI/components/layouts/Navigation/Navigation';
import Navlink from '../../lib/iCoWeARouterUI/components/Navlink/Navlink';
import { selectBreakpoint, Breakpoints } from '../../store/slices/breakpoint';

const StandardHeader: FC = () => {
  const breakpoint = useSelector(selectBreakpoint);

  return (
    <Header>
      <Logo />
      {(breakpoint === Breakpoints.SM || breakpoint === Breakpoints.MD) && (
        <Button icon>
          <Icon>
            <svg
              focusable="false"
              viewBox="0 0 24 24"
            >
              <path d="M3 18h18v-2H3zm0-5h18v-2H3zm0-7v2h18V6z"></path>
            </svg>
          </Icon>
        </Button>
      )}
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
