import React, { type FC } from 'react';

import Section from '../../lib/iCoWeaUI/components/layouts/Section/Section';
import Stack from '../../lib/iCoWeaUI/components/layouts/Stack/Stack';
import MessagesCard from './MessagesCard';
import UserCard from './UserCard';

export const Component: FC = () => (
  <Section>
    <Stack gap="md">
      <UserCard />
      <MessagesCard />
    </Stack>
  </Section>
);

Component.displayName = 'AdminHomeRoute';
