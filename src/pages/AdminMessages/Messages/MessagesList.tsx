import React, { type ReactNode, type FC } from 'react';
import List from '../../../lib/simpleComponents/components/UI/List';

interface MessagesListProps {
  children?: Record<string, Message> | null;
}

const MessagesList: FC<MessagesListProps> = ({ children }) => {
  let childrenNode: ReactNode;

  /* Set children props */
  if (children === undefined || children === null) {
    childrenNode = <p>Loading...</p>;
  } else if (Object.keys(children).length === 0) {
    childrenNode = <p>No messages</p>;
  } else {
    // childrenNode = Object.keys(children).map((item) => <MessageItem key></MessageItem>)
  }

  return <List>{childrenNode}</List>;
};

export default MessagesList;
