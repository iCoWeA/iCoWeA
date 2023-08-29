import React, { useEffect, type FC } from 'react';
import { useDispatch } from 'react-redux';
import statusAlert from '../../../store/Slices/statusAlert';
import MessagesCard from './MessagesCard';

const MessagesError: FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(statusAlert.actions.show({ props: { color: 'error', children: 'Fetching messages error' } }));

    return () => {
      dispatch(statusAlert.actions.hide());
    };
  }, []);

  return <MessagesCard>{{}}</MessagesCard>;
};

export default MessagesError;
