import React, { type FC } from 'react';
import { useSelector } from 'react-redux';

import Avatar from '../../lib/iCoWeABaseUI/components/data-display/Avatar/Avatar';
import Text from '../../lib/iCoWeABaseUI/components/data-display/Text/Text';
import Title from '../../lib/iCoWeABaseUI/components/data-display/Title/Title';
import Flex from '../../lib/iCoWeABaseUI/components/layouts/Flex/Flex';
import Stack from '../../lib/iCoWeABaseUI/components/layouts/Stack/Stack';
import Card from '../../lib/iCoWeABaseUI/components/surfaces/Card/Card';
import { upperCaseFirstLetter } from '../../lib/iCoWeAUtilsUI/utils/utils';
import { selectUser } from '../../store/slices/user';

const UserCard: FC = () => {
  const user = useSelector(selectUser);

  return (
    <Card
      spacing="lg"
      gap="lg"
    >
      <Flex
        gap="md"
        align="stretch"
      >
        <Avatar
          alt={`${upperCaseFirstLetter(user.firstname)} ${upperCaseFirstLetter(user.lastname)}`}
          className="w-24 h-24"
          src={user.imageURL}
        />
        <Stack justify="between">
          <Title size="3">{`${user.firstname} ${user.lastname}`}</Title>
          <Title size="4">Admin</Title>
        </Stack>
      </Flex>
      <Text>Welcome back to our comunity.</Text>
    </Card>
  );
};

export default UserCard;
