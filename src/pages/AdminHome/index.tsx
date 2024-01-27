import React, { type FC } from 'react';

import Grid from '../../lib/iCoWeaUI/components/layouts/Grid/Grid';
import Section from '../../lib/iCoWeaUI/components/layouts/Section/Section';
import LikesCard from './LikesCard';
import MessagesCard from './MessagesCard';
import UserCard from './UserCard';

export const Component: FC = () => (
  <Section>
    <Grid
      gap="lg"
      className="grid-cols-2 max-md:grid-cols-1"
    >
      <UserCard />
      <LikesCard />
      <MessagesCard />
    </Grid>
  </Section>
);

Component.displayName = 'AdminHomeRoute';
