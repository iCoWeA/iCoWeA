import React, { type FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import HamburgerIcon from '../../components/Icons/HamburgerIcon';
import HomeIcon from '../../components/Icons/HomeIcon';
import Logo from '../../components/Icons/Logo';
import ProjectIcon from '../../components/Icons/ProjectIcon';
import SettingsIcon from '../../components/Icons/SettingsIcon';
import LogoutButton from '../../components/LogoutButton/logoutButton';
import ListItem from '../../lib/iCoWeABaseUI/components/data-display/ListItem/ListItem';
import Button from '../../lib/iCoWeABaseUI/components/inputs/Button/Button';
import Navigation from '../../lib/iCoWeABaseUI/components/layouts/Navigation/Navigation';
import Drawer from '../../lib/iCoWeABaseUI/components/navigation/Drawer/Drawer';
import Link from '../../lib/iCoWeARouterUI/components/Link/Link';
import ListNavlink from '../../lib/iCoWeARouterUI/components/ListNavlink/ListNavlink';
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
          <ListItem>
            <ListNavlink
              to=""
              end
              activeVariant="solid"
              leftDecorator={<HomeIcon />}
            >
              Home
            </ListNavlink>
          </ListItem>
          <ListItem>
            <ListNavlink
              to="projects"
              activeVariant="solid"
              leftDecorator={<ProjectIcon />}
            >
              Projects
            </ListNavlink>
          </ListItem>
          <ListItem>
            <ListNavlink
              to="settings"
              activeVariant="solid"
              leftDecorator={<SettingsIcon />}
            >
              Settings
            </ListNavlink>
          </ListItem>
        </Navigation>
        <LogoutButton />
      </Drawer>
    </>
  );
};

export default MobileNavigation;
