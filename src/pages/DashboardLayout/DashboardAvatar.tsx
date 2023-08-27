import React, { type FC } from 'react';
import Menu from '../../lib/simpleComponents/components/UI/Menu';
import List from '../../lib/simpleComponents/components/UI/List';
import ListItemButton from '../../lib/simpleComponents/components/UI/ListItemButton';
import Link from '../../lib/simpleComponents/components/UI/Link';
import Avatar from '../../lib/simpleComponents/components/UI/Avatar';

const DashboardAvatar: FC = () => (
  <Menu
    elevated
    handler={
      <Avatar
        src={require('../../assets/images/photo.png')}
        className="ml-auto w-10"
      />
    }
  >
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
  </Menu>
);

export default DashboardAvatar;
