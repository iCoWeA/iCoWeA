import React, { useEffect, useRef, type FC } from 'react';
import { redirect, useActionData, useNavigation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import statusAlert from '../../store/Slices/StatusAlert';
import Main from '../../lib/simpleComponents/components/layouts/Main';
import LoginForm from './LoginForm';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';

const TIMER = 5000;

export const Component: FC = () => {
  const navigation = useNavigation();
  const error = useActionData();
  const dispatch = useDispatch();

  const timerId = useRef(-1);

  const closeHandler = (): void => {
    clearTimeout(timerId.current);
    dispatch(statusAlert.actions.hide());
  };

  useEffect(() => {
    clearTimeout(timerId.current);
  }, [navigation.state]);

  useEffect(() => {
    if (navigation.state === 'idle' && error !== undefined) {
      dispatch(statusAlert.actions.show({ color: 'error', onClose: closeHandler }));

      timerId.current = window.setTimeout(() => {
        dispatch(statusAlert.actions.hide());
      }, TIMER);
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
