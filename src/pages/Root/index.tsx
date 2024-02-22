import React, { type FC, useContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ScrollRestoration, Outlet } from 'react-router-dom';
import { ref, onValue } from 'firebase/database';

import LoadingScreen from '../../components/LoadingScreen/LoadingScreen';
import { database } from '../../firebase';
import useWindowResize from '../../lib/iCoWeABaseUI/hooks/useWindowResize';
import themeContext from '../../lib/iCoWeAUI/contexts/theme';
import { breakpointActions } from '../../store/slices/breakpoint';
import { projectsActions } from '../../store/slices/projects';
import { selectUser, userActions } from '../../store/slices/user';

const Component: FC = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const setTheme = useContext(themeContext).setTheme;

  const isEmpty = Object.keys(user).every((key) => !user[key as keyof User]);

  useEffect(() => {
    const theme = localStorage.getItem('theme');

    if (theme === 'dark' || theme === 'light') {
      setTheme(theme);
    }
  }, []);

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

  useEffect(() => {
    const userRef = ref(database, 'projects');

    return onValue(userRef, (snap) => {
      if (snap.exists()) {
        dispatch(projectsActions.setProjects(snap.val()));

        return;
      }

      dispatch(projectsActions.setProjects({}));
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
