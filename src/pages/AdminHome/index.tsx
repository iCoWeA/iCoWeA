import React, { type FC } from 'react';

import Grid from '../../lib/iCoWeaUI/components/layouts/Grid/Grid';
import LikesCard from './LikesCard';
import MessagesCard from './MessagesCard';
import UserCard from './UserCard';

export const Component: FC = () => (
  <Grid
    gap="lg"
    className="grid-cols-2 max-md:grid-cols-1"
  >
    <UserCard />
    <LikesCard />
    <MessagesCard />
  </Grid>
);

Component.displayName = 'AdminHomeRoute';
