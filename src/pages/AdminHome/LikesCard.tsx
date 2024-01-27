import React, { type FC } from 'react';

import Title from '../../lib/iCoWeaUI/components/data-display/Title/Title';
import Card from '../../lib/iCoWeaUI/components/surfaces/Card/Card';

const LikeCard: FC = () => (
  <Card
    variant="solid"
    color="primary"
    spacing="md"
    gap="md"
  >
    <Title
      variant="2"
      color="inherit"
    >
      0
    </Title>
    <Title
      variant="4"
      color="inherit"
    >
      Likes
    </Title>
  </Card>
);

export default LikeCard;
