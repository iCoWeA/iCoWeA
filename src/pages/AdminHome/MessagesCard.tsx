import React, { type FC } from 'react';

import Title from '../../lib/iCoWeABaseUI/components/data-display/Title/Title';
import Card from '../../lib/iCoWeABaseUI/components/surfaces/Card/Card';

const MessagesCard: FC = () => {
  return (
    <Card
      spacing="lg"
      variant="solid"
      color="primary"
      gap="lg"
      className="max-w-232"
    >
      <Title
        size="2"
        color="inherit"
      >
        0
      </Title>
      <Title
        size="4"
        color="inherit"
      >
        Messages
      </Title>
    </Card>
  );
};

export default MessagesCard;
