import React, { type FC } from 'react';
import MessagesList from './MessagesList';

const FallbackMessages: FC = () => (
  <>
    <MessagesList
      variant="unread"
      data={null}
    />
    <MessagesList
      variant="read"
      data={null}
    />
  </>
);

export default FallbackMessages;
