import React, { type FC } from 'react';

import Main from '../../lib/iCoWeABaseUI/components/layouts/Main/Main';
import Section from '../../lib/iCoWeABaseUI/components/layouts/Section/Section';
import Stack from '../../lib/iCoWeABaseUI/components/layouts/Stack/Stack';
import MessagesCard from './MessagesCard';
import UserCard from './UserCard';

export const Component: FC = () => (
  <Main
    placement="full"
    block
  >
    <Section className="max-w-232">
      <Stack gap="lg">
        <UserCard />
        <MessagesCard />
      </Stack>
    </Section>
  </Main>
);

Component.displayName = 'AdminHomeRoute';
