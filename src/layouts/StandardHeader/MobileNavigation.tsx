import React, { type FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import AboutIcon from '../../components/Icons/AboutIcon';
import ContactIcon from '../../components/Icons/ContactIcon';
import FacebookIcon from '../../components/Icons/FacebookIcon';
import GithubIcon from '../../components/Icons/GithubIcon';
import HamburgerIcon from '../../components/Icons/HamburgerIcon';
import HomeIcon from '../../components/Icons/HomeIcon';
import InstagramIcon from '../../components/Icons/InstagramIcon';
import LinkedInIcon from '../../components/Icons/LinkedInIcon';
import Logo from '../../components/Icons/Logo';
import ProjectIcon from '../../components/Icons/ProjectIcon';
import ListItem from '../../lib/iCoWeABaseUI/components/data-display/ListItem/ListItem';
import Button from '../../lib/iCoWeABaseUI/components/inputs/Button/Button';
import Flex from '../../lib/iCoWeABaseUI/components/layouts/Flex/Flex';
import Navigation from '../../lib/iCoWeABaseUI/components/layouts/Navigation/Navigation';
import Drawer from '../../lib/iCoWeABaseUI/components/navigation/Drawer/Drawer';
import Link from '../../lib/iCoWeARouterUI/components/Link/Link';
import ListNavlink from '../../lib/iCoWeARouterUI/components/ListNavlink/ListNavlink';
import { selectNavbar, navbarActions } from '../../store/slices/navbar';
import { selectUser } from '../../store/slices/user';

const MobileNavigation: FC = () => {
  const dispatch = useDispatch();
  const open = useSelector(selectNavbar);
  const user = useSelector(selectUser);

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
          <ListItem>
            <ListNavlink
              to="/"
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
              to="about"
              activeVariant="solid"
              leftDecorator={<AboutIcon />}
            >
              About
            </ListNavlink>
          </ListItem>
          <ListItem>
            <ListNavlink
              to="contact"
              activeVariant="solid"
              leftDecorator={<ContactIcon />}
            >
              Contact
            </ListNavlink>
          </ListItem>
        </Navigation>
        <Flex
          justify="between"
          align="end"
          grow
        >
          <Link
            to={user.githubURL}
            target="_blanc"
          >
            <GithubIcon />
          </Link>
          <Link
            to={user.linkedinURL}
            target="_blanc"
          >
            <LinkedInIcon />
          </Link>
          <Link
            to={user.facebookURL}
            target="_blanc"
          >
            <FacebookIcon />
          </Link>
          <Link
            to={user.instagramURL}
            target="_blanc"
          >
            <InstagramIcon />
          </Link>
        </Flex>
      </Drawer>
    </>
  );
};

export default MobileNavigation;
