import React, { type FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import HamburgerIcon from '../../components/Icons/HamburgerIcon';
import HomeIcon from '../../components/Icons/HomeIcon';
import Logo from '../../components/Icons/Logo';
import ProjectIcon from '../../components/Icons/ProjectIcon';
import SettingsIcon from '../../components/Icons/SettingsIcon';
import LogoutButton from '../../components/LogoutButton/logoutButton';
import Navlink from '../../components/NavlinkButton/NavlinkButton';
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
      >
        <HamburgerIcon />
      </Button>
      <Drawer
        onClose={() => dispatch(navbarActions.close())}
        open={open}
        spacing="lg-panel"
        gap="xl"
      >
        <Link to="">
          <Logo />
        </Link>
        <Navigation
          vertical
          block
        >
          <Navlink
            to=""
            end
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
            to="settings"
            activeVariant="solid"
            leftDecorator={<SettingsIcon />}
          >
            Settings
          </Navlink>
        </Navigation>
        <LogoutButton />
      </Drawer>
    </>
  );
};

export default MobileNavigation;
