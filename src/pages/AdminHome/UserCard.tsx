import React, { type FC } from 'react';
import { useSelector } from 'react-redux';

import Avatar from '../../lib/iCoWeABaseUI/components/data-display/Avatar/Avatar';
import Text from '../../lib/iCoWeABaseUI/components/data-display/Text/Text';
import Title from '../../lib/iCoWeABaseUI/components/data-display/Title/Title';
import Grid from '../../lib/iCoWeABaseUI/components/layouts/Grid/Grid';
import Card from '../../lib/iCoWeABaseUI/components/surfaces/Card/Card';
import { upperCaseFirstLetter } from '../../lib/iCoWeAUtilsUI/utils/utils';
import { selectUser } from '../../store/slices/user';

const UserCard: FC = () => {
  const user = useSelector(selectUser);

  return (
    <Card
      spacing="lg"
      gap="lg"
      className="col-span-3 max-md:col-span-1"
    >
      <Grid
        gap="md"
        className="grid-cols-[auto_1fr]"
      >
        <Avatar
          size="xxl"
          alt={`${upperCaseFirstLetter(user.firstname)} ${upperCaseFirstLetter(user.lastname)}`}
          className="row-span-2"
          src={user.imageURL}
        />
        <Title size="3">{`${user.firstname} ${user.lastname}`}</Title>
        <Title size="4">Admin</Title>
      </Grid>
      <Text>Welcome back to our comunity.</Text>
    </Card>
  );
};

export default UserCard;
