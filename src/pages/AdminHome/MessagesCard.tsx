import React, { type FC, useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import Title from '../../lib/iCoWeABaseUI/components/data-display/Title/Title';
import Card from '../../lib/iCoWeABaseUI/components/surfaces/Card/Card';
import { selectMessages } from '../../store/slices/messages';

const MessagesCard: FC = () => {
  const messages = useSelector(selectMessages);

  const [messageCounter, setMessagesCounter] = useState(0);

  const count = Object.keys(messages).length;

  useEffect(() => setMessagesCounter(0), [count]);

  /* --- Set event handlers --- */
  useEffect(() => {
    if (messageCounter === count) {
      return;
    }

    const id = window.setTimeout(() => setMessagesCounter((count) => count + 1), 500 / count);

    return () => clearTimeout(id);
  }, [count, messageCounter]);

  return (
    <Card
      spacing="lg"
      variant="solid"
      color="primary"
      gap="lg"
    >
      <Title
        size="2"
        color="inherit"
      >
        {messageCounter}
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
