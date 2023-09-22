import React, { type FC } from 'react';
// import Menu from '../../lib/simpleComponents/components/UI/Menu/Menu';
// import Avatar from '../../lib/simpleComponents/components/UI/Avatar/Avatar';
import List from '../../lib/simpleComponents/components/UI/List';
import ListItemButton from '../../lib/simpleComponents/components/UI/ListItemButton';
import Link from '../../lib/simpleComponents/components/UI/Link';

const DashboardAvatar: FC = () => (
    <List>
      <ListItemButton
        color="dark"
        fullwidth
      >
        <Link
          to="/admin/settings"
          color="dark"
        >
          Settings
        </Link>
      </ListItemButton>
      <ListItemButton
        color="dark"
        fullwidth
      >
        <Link
          to="/logout"
          color="dark"
        >
          Logout
        </Link>
      </ListItemButton>
    </List>
);

export default DashboardAvatar;

/*
  <Menu
    popoverProps={{ backdrop: true }}
    elevated
    overlayRef={document.getElementById('overlay')}
    handler={
      <Avatar
        src={require('../../assets/images/photo.png')}
        className="w-10"
      />
    }
  >
    <DropdownBody fullwidht>
      <List>
        <ListItemButton
          color="dark"
          fullwidth
        >
          <Link
            to="/admin/settings"
            color="dark"
          >
            Settings
          </Link>
        </ListItemButton>
        <ListItemButton
          color="dark"
          fullwidth
        >
          <Link
            to="/logout"
            color="dark"
          >
            Logout
          </Link>
        </ListItemButton>
      </List>
    </DropdownBody>
  </Menu> */
