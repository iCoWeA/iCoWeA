import React, { type FC, useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Outlet } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { ref, onValue } from 'firebase/database';

import LoadingScreen from '../../components/LoadingScreen/LoadingScreen';
import { database, appAuth } from '../../firebase';
import { selectMessages, messagesActions } from '../../store/slices/messages';

export const Component: FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useSelector(selectMessages);

  const isEmpty = useRef(true);

  /* --- Set event handlers --- */
  useEffect(() => {
    const userRef = ref(database, 'messages');

    return onValue(userRef, (snap) => {
      isEmpty.current = false;

      if (snap.exists()) {
        dispatch(messagesActions.setMessages(snap.val()));

        return;
      }

      dispatch(messagesActions.setMessages({}));
    });
  }, []);

  useEffect(() => {
    return onAuthStateChanged(appAuth, (user) => !user && navigate('/logout'));
  }, []);

  return isEmpty.current ? <LoadingScreen /> : <Outlet />;
};
