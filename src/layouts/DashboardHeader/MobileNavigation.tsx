import React, { type FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import HamburgerIcon from '../../components/Icons/HamburgerIcon';
import HomeIcon from '../../components/Icons/HomeIcon';
import Logo from '../../components/Icons/Logo';
import MessageIcon from '../../components/Icons/MessageIcon';
import ProjectIcon from '../../components/Icons/ProjectIcon';
import SettingsIcon from '../../components/Icons/SettingsIcon';
import LogoutButton from '../../components/LogoutButton/LogoutButton';
import Navlink from '../../components/NavlinkButton/NavlinkButton';
import ThemeButton from '../../components/ThemeButton.tsx/ThemeButton';
import Button from '../../lib/iCoWeABaseUI/components/inputs/Button/Button';
import Navigation from '../../lib/iCoWeABaseUI/components/layouts/Navigation/Navigation';
import Stack from '../../lib/iCoWeABaseUI/components/layouts/Stack/Stack';
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
            to="messages"
            activeVariant="solid"
            leftDecorator={<MessageIcon />}
          >
            Messages
          </Navlink>
          <Navlink
            to="settings"
            activeVariant="solid"
            leftDecorator={<SettingsIcon />}
          >
            Settings
          </Navlink>
        </Navigation>
        <Stack
          gap="lg"
          justify="end"
          align="center"
          grow
        >
          <ThemeButton block />
          <LogoutButton />
        </Stack>
      </Drawer>
    </>
  );
};

export default MobileNavigation;
