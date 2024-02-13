import React, { type FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Icon from '../../../lib/iCoWeABaseUI/components/data-display/Icon/Icon';
import ListItem from '../../../lib/iCoWeABaseUI/components/data-display/ListItem/ListItem';
import Button from '../../../lib/iCoWeABaseUI/components/inputs/Button/Button';
import Navigation from '../../../lib/iCoWeABaseUI/components/layouts/Navigation/Navigation';
import Drawer from '../../../lib/iCoWeABaseUI/components/navigation/Drawer/Drawer';
import ListNavlink from '../../../lib/iCoWeARouterUI/components/ListNavlink/ListNavlink';
import { selectNavbar, navbarActions } from '../../../store/slices/navbar';

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
        <Icon>
          <svg
            focusable="false"
            viewBox="0 0 24 24"
          >
            <path d="M3 18h18v-2H3zm0-5h18v-2H3zm0-7v2h18V6z"></path>
          </svg>
        </Icon>
      </Button>
      <Drawer
        onClose={() => dispatch(navbarActions.close())}
        open={open}
        spacing="lg"
        className="w-64"
      >
        <Navigation
          vertical
          block
        >
          <ListItem>
            <ListNavlink
              to="/"
              activeVariant="solid"
            >
              Home
            </ListNavlink>
          </ListItem>
          <ListItem>
            <ListNavlink
              to="projects"
              activeVariant="solid"
            >
              Projects
            </ListNavlink>
          </ListItem>
          <ListItem>
            <ListNavlink
              to="about"
              activeVariant="solid"
            >
              About
            </ListNavlink>
          </ListItem>
          <ListItem>
            <ListNavlink
              to="contact"
              activeVariant="solid"
            >
              Contact
            </ListNavlink>
          </ListItem>
        </Navigation>
      </Drawer>
    </>
  );
};

export default MobileNavigation;
