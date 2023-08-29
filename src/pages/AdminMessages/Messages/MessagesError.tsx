import React, { useEffect, type FC } from 'react';
import { useDispatch } from 'react-redux';
import statusAlert from '../../../store/Slices/statusAlert';
import MessagesCard from './MessagesCard';

interface MessagesErrorProps {
  children: Record<string, Message> | null;
}

const MessagesError: FC<MessagesErrorProps> = ({ children }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(statusAlert.actions.show({ props: { color: 'error', children: 'Fetching messages error' } }));

    return () => {
      dispatch(statusAlert.actions.hide());
    };
  }, []);

  return <MessagesCard>{children}</MessagesCard>;
};

export default MessagesError;
