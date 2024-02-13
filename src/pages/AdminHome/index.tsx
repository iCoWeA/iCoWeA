import React, { type FC } from 'react';

import Main from '../../lib/iCoWeABaseUI/components/layouts/Main/Main';
import Section from '../../lib/iCoWeABaseUI/components/layouts/Section/Section';
import Stack from '../../lib/iCoWeABaseUI/components/layouts/Stack/Stack';
import MessagesCard from './MessagesCard';
import UserCard from './UserCard';

export const Component: FC = () => (
  <Main
    placement="right"
    block
  >
    <Section>
      <Stack gap="lg">
        <UserCard />
        <MessagesCard />
      </Stack>
    </Section>
  </Main>
);

Component.displayName = 'AdminHomeRoute';
