import React, { type FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Logo from '../../../components/Icons/Logo';
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
        spacing="lg-panel"
        align="start"
        gap="xl"
      >
        <Logo />
        <Navigation
          vertical
          block
        >
          <ListItem>
            <ListNavlink
              to="admin"
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
              to="admin/projects"
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
              to="admin/settings"
              activeVariant="solid"
            >
              <Icon>
                <svg
                  focusable="false"
                  viewBox="0 0 24 24"
                >
                  <path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6"></path>
                </svg>
              </Icon>
              Settings
            </ListNavlink>
          </ListItem>
        </Navigation>
      </Drawer>
    </>
  );
};

export default MobileNavigation;
