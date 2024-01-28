import React, { type FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ScrollRestoration, Outlet } from 'react-router-dom';
import { ref, onValue } from 'firebase/database';
import { database } from '../../firebase';

import ErrorScreen from '../../components/ErrorScreen/ErrorScreen';
import LoadingScreen from '../../components/LoadingScreen/LoadingScreen';
import { selectUser, userActions } from '../../store/slices/user';

const Component: FC = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  /* --- Set event handlers --- */
  useEffect(() => {
    const userRef = ref(database, 'users/0');

    return onValue(userRef, (snap) => {
      if (snap.exists()) {
        dispatch(userActions.setUser(snap.val()));

        return;
      }

      dispatch(userActions.setError());
    });
  }, []);

  return (
    <>
      <ScrollRestoration />
      {!user && <LoadingScreen />}
      {user && Object.keys(user).length === 0
        ? (
        <ErrorScreen>{'User not found'}</ErrorScreen>
          )
        : (
        <Outlet />
          )}
    </>
  );
};

export default Component;

Component.displayName = 'RootRoute';
