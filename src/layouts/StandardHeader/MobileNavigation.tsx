import React, { type FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import AboutIcon from '../../components/Icons/AboutIcon';
import ContactIcon from '../../components/Icons/ContactIcon';
import HamburgerIcon from '../../components/Icons/HamburgerIcon';
import HomeIcon from '../../components/Icons/HomeIcon';
import Logo from '../../components/Icons/Logo';
import ProjectIcon from '../../components/Icons/ProjectIcon';
import Navlink from '../../components/NavlinkButton/NavlinkButton';
import ThemeSwitch from '../../components/ThemeSwitch/ThemeSwitch';
import Button from '../../lib/iCoWeABaseUI/components/inputs/Button/Button';
import Navigation from '../../lib/iCoWeABaseUI/components/layouts/Navigation/Navigation';
import Drawer from '../../lib/iCoWeABaseUI/components/navigation/Drawer/Drawer';
import Link from '../../lib/iCoWeARouterUI/components/Link/Link';
import { selectNavbar, navbarActions } from '../../store/slices/navbar';

const MobileNavigation: FC = () => {
  const dispatch = useDispatch();
  const open = useSelector(selectNavbar);

  return (
    <>
      <Button
        onClick={() => dispatch(navbarActions.toggle())}
        icon
        color="secondary"
      >
        <HamburgerIcon />
      </Button>
      <Drawer
        onClose={() => dispatch(navbarActions.close())}
        open={open}
        spacing="lg-panel"
        gap="xl"
      >
        <Link to="/">
          <Logo />
        </Link>
        <Navigation
          vertical
          block
        >
          <Navlink
            to="/"
            activeVariant="solid"
            leftDecorator={<HomeIcon />}
          >
            Home
          </Navlink>
          <Navlink
            to="projects"
            activeVariant="solid"
            leftDecorator={<ProjectIcon />}
          >
            Projects
          </Navlink>
          <Navlink
            to="about"
            activeVariant="solid"
            leftDecorator={<AboutIcon />}
          >
            About
          </Navlink>
          <Navlink
            to="contact"
            activeVariant="solid"
            leftDecorator={<ContactIcon />}
          >
            Contact
          </Navlink>
        </Navigation>
        <ThemeSwitch />
      </Drawer>
    </>
  );
};

export default MobileNavigation;
