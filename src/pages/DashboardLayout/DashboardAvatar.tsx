import React, { type FC } from 'react';
import Menu from '../../lib/simpleComponents/components/UI/Menu';
import Avatar from '../../lib/simpleComponents/components/UI/Avatar';
import MenuBody from '../../lib/simpleComponents/components/UI/MenuBody';
import List from '../../lib/simpleComponents/components/UI/List';
import ListItemButton from '../../lib/simpleComponents/components/UI/ListItemButton';
import Link from '../../lib/simpleComponents/components/UI/Link';

const DashboardAvatar: FC = () => {
  const overlay = document.getElementById('overlay');

  return (
    <Menu
      elevated
      overlayRef={overlay}
      handler={
        <Avatar
          src={require('../../assets/images/photo.png')}
          className="w-10"
        />
      }
    >
      <MenuBody>
        <List>
          <ListItemButton color="dark">
            <Link
              to="/admin/settings"
              color="dark"
            >
              Settings
            </Link>
          </ListItemButton>
          <ListItemButton color="dark">
            <Link
              to="/logout"
              color="dark"
            >
              Logout
            </Link>
          </ListItemButton>
        </List>
      </MenuBody>
    </Menu>
  );
};

export default DashboardAvatar;
