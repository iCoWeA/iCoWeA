import React, { type FC } from 'react';

import Avatar from '../../lib/iCoWeaUI/components/data-display/Avatar/Avatar';
import Text from '../../lib/iCoWeaUI/components/data-display/Text/Text';
import Title from '../../lib/iCoWeaUI/components/data-display/Title/Title';
import Flex from '../../lib/iCoWeaUI/components/layouts/Flex/Flex';
import Stack from '../../lib/iCoWeaUI/components/layouts/Stack/Stack';
import Card from '../../lib/iCoWeaUI/components/surfaces/Card/Card';

const UserCard: FC = () => (
  <Card
    spacing="md"
    gap="md"
    className="col-span-2 max-md:col-span-1"
  >
    <Flex
      gap="md"
      align="stretch"
    >
      <Avatar
        src={require('../../assets/images/photo.png')}
        alt="RW"
        className="w-24 h-24"
      />
      <Stack justify="between">
        <Title variant="4">Welcome</Title>
        <Title variant="2">Richard Wagner</Title>
      </Stack>
    </Flex>
    <Text>Welcome back to our comunity.</Text>
  </Card>
);

export default UserCard;
