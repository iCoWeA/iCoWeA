import React, { useEffect, type FC } from 'react';
import { redirect, useActionData, useNavigation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import statusAlert from '../../store/Slices/StatusAlert';
import Main from '../../lib/simpleComponents/components/layouts/Main';
import LoginForm from './LoginForm';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';

export const Component: FC = () => {
  const navigation = useNavigation();
  const error = useActionData();
  const dispatch = useDispatch();

  useEffect(() => {
    if (navigation.state === 'idle' && error !== undefined) {
      dispatch(statusAlert.actions.show(props: { color: 'error', children: typeof error === 'string' ? error : '' }));
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
