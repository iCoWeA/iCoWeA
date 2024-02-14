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
              <Icon>
                <svg
                  focusable="false"
                  viewBox="0 0 24 24"
                >
                  <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"></path>
                </svg>
              </Icon>
              Home
            </ListNavlink>
          </ListItem>
          <ListItem>
            <ListNavlink
              to="projects"
              activeVariant="solid"
            >
              <Icon>
                <svg
                  focusable="false"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 2h-4.18C14.4.84 13.3 0 12 0c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1m7 18H5V4h2v3h10V4h2z"></path>
                </svg>
              </Icon>
              Projects
            </ListNavlink>
          </ListItem>
          <ListItem>
            <ListNavlink
              to="about"
              activeVariant="solid"
            >
              <Icon>
                <svg
                  focusable="false"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.5 4.5c-1.95 0-4.05.4-5.5 1.5-1.45-1.1-3.55-1.5-5.5-1.5S2.45 4.9 1 6v14.65c0 .65.73.45.75.45C3.1 20.45 5.05 20 6.5 20c1.95 0 4.05.4 5.5 1.5 1.35-.85 3.8-1.5 5.5-1.5 1.65 0 3.35.3 4.75 1.05.41.21.75-.19.75-.45V6c-1.49-1.12-3.63-1.5-5.5-1.5m3.5 14c-1.1-.35-2.3-.5-3.5-.5-1.7 0-4.15.65-5.5 1.5V8c1.35-.85 3.8-1.5 5.5-1.5 1.2 0 2.4.15 3.5.5z"></path>
                </svg>
              </Icon>
              About
            </ListNavlink>
          </ListItem>
          <ListItem>
            <ListNavlink
              to="contact"
              activeVariant="solid"
            >
              <Icon>
                <svg
                  focusable="false"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 0H4v2h16zM4 24h16v-2H4zM20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m-8 2.75c1.24 0 2.25 1.01 2.25 2.25s-1.01 2.25-2.25 2.25S9.75 10.24 9.75 9 10.76 6.75 12 6.75M17 17H7v-1.5c0-1.67 3.33-2.5 5-2.5s5 .83 5 2.5z"></path>
                </svg>
              </Icon>
              Contact
            </ListNavlink>
          </ListItem>
        </Navigation>
      </Drawer>
    </>
  );
};

export default MobileNavigation;
