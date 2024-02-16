import React, { type FC } from 'react';
import { useSelector } from 'react-redux';

import CountCard from '../../components/CountCard/CountCard';
import { selectMessages } from '../../store/slices/messages';

const MessagesCard: FC = () => {
  const messages = useSelector(selectMessages);

  const messagesCount = Object.keys(messages).length;
  const unreadMessagesCount = Object.keys(messages).filter((key) => messages[key].unread).length;
  const readMessagesCount = messagesCount - unreadMessagesCount;

  return (
    <>
      <CountCard
        count={messagesCount}
        spacing="lg"
        variant="solid"
        color="primary"
        gap="md"
      >
        Messages
      </CountCard>
      <CountCard
        count={unreadMessagesCount}
        spacing="lg"
        variant="solid"
        color="warning"
        gap="md"
      >
        Unread messages
      </CountCard>
      <CountCard
        count={readMessagesCount}
        spacing="lg"
        variant="solid"
        color="success"
        gap="md"
      >
        Read messages
      </CountCard>
    </>
  );
};

export default MessagesCard;
