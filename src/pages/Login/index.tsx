import React, { type FC } from 'react';
import Main from '../../lib/simpleComponents/components/layouts/Main';
import LoginForm from './LoginForm';
import ErrorAlert from './ErrorAlert';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';
import { redirect } from 'react-router-dom';

export const Component: FC = () => (
  <Main
    color="primary"
    className="justify-center"
  >
    <LoginForm />
    <ErrorAlert />
  </Main>
);

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
