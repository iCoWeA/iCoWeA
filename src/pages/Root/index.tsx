import React, { type FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ScrollRestoration, Outlet } from 'react-router-dom';
import { ref, onValue } from 'firebase/database';
import { database } from '../../firebase';

import LoadingScreen from '../../components/LoadingScreen/LoadingScreen';
import useWindowResize from '../../lib/iCoWeABaseUI/hooks/useWindowResize';
import { breakpointActions } from '../../store/slices/breakpoint';
import { selectUser, userActions } from '../../store/slices/user';

const Component: FC = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const isEmpty = user.id === '';

  /* --- Set event handlers --- */
  useEffect(() => {
    const userRef = ref(database, 'users/0');

    return onValue(userRef, (snap) => {
      if (snap.exists()) {
        dispatch(userActions.setUser(snap.val()));

        return;
      }

      throw new Error('User not found');
    });
  }, []);

  useWindowResize(() => dispatch(breakpointActions.set()));

  return (
    <>
      <ScrollRestoration />
      {isEmpty ? <LoadingScreen /> : <Outlet />}
    </>
  );
};

export default Component;

Component.displayName = 'RootRoute';
