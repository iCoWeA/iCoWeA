import React, { type FC } from 'react';

import Grid from '../../lib/iCoWeABaseUI/components/layouts/Grid/Grid';
import Section from '../../lib/iCoWeABaseUI/components/layouts/Section/Section';
import MessagesCard from './MessagesCard';
import UserCard from './UserCard';

const Introduction: FC = () => (
  <Section>
    <Grid
      gap="lg"
      className="grid-cols-3 max-md:grid-cols-1 "
    >
      <UserCard />
      <MessagesCard />
    </Grid>
  </Section>
);

export default Introduction;
