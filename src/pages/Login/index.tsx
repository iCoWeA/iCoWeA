import React, { type FC } from 'react';
import { redirect } from 'react-router-dom';
import Main from '../../lib/simpleComponents/components/layouts/Main';
import LoginForm from './LoginForm';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';

export const Component: FC = () => {
  /* --- Set default props --- */

  /* --- Set error --- */

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
