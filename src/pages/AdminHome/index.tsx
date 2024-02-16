import React, { type FC } from 'react';

import Grid from '../../lib/iCoWeABaseUI/components/layouts/Grid/Grid';
import Main from '../../lib/iCoWeABaseUI/components/layouts/Main/Main';
import Section from '../../lib/iCoWeABaseUI/components/layouts/Section/Section';
import MessagesCard from './MessagesCard';
import UserCard from './UserCard';

export const Component: FC = () => (
  <Main placement="full">
    <Section>
      <Grid
        gap="lg"
        className="grid-cols-3 max-md:grid-cols-1 "
      >
        <UserCard />
        <MessagesCard />
      </Grid>
    </Section>
  </Main>
);

Component.displayName = 'AdminHomeRoute';
