import React, { useEffect, useRef, type FC } from 'react';
import { redirect, useActionData, useNavigation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import statusAlert from '../../store/Slices/StatusAlert';
import { ALERT_TIMER } from '../../data/constants';
import Main from '../../lib/simpleComponents/components/layouts/Main';
import LoginForm from './LoginForm';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';

export const Component: FC = () => {
  const navigation = useNavigation();
  const error = useActionData();
  const dispatch = useDispatch();

  const timerId = useRef(-1);

  useEffect(() => {
    clearTimeout(timerId.current);
  }, [navigation.state]);

  useEffect(() => {
    if (navigation.state === 'idle' && error !== undefined) {
      const closeHandler = (): void => {
        clearTimeout(timerId.current);
        dispatch(statusAlert.actions.hide());
      };

      dispatch(statusAlert.actions.show({ onClose: closeHandler, color: 'error', children: typeof error === 'string' ? error : '' }));

      timerId.current = window.setTimeout(() => {
        dispatch(statusAlert.actions.hide());
      }, ALERT_TIMER);
    } else {
      dispatch(statusAlert.actions.hide());
    }
  }, [navigation.state, error]);

  return (
    <Main
      color="primary"
      className="justify-center"
    >
      <LoginForm />
    </Main>
  );
};

Component.displayName = 'LoginRoute';

export const action = async ({ request }: { request: Request }): Promise<unknown> => {
  const formData = await request.formData();
  const email = formData.get('email')?.toString() ?? '';
  const password = formData.get('password')?.toString() ?? '';

  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    return 'Login error';
  }

  return redirect('/admin');
};
