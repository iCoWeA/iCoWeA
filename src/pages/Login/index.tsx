import React, { type FC } from 'react';
import Main from '../../lib/simpleComponents/components/layouts/Main';
import LoginForm from './LoginForm';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';
import { redirect } from 'react-router-dom';

export const Component: FC = () => (
  <Main
    className="justify-center"
  >
    <LoginForm />
  </Main>
);

Component.displayName = 'LoginRoute';

export const action = async ({ request }: { request: Request }): Promise<unknown> => {
  const formData = await request.formData();
  const email = formData.get('email')?.toString() ?? '';
  const password = formData.get('password')?.toString() ?? '';

  await signInWithEmailAndPassword(auth, email, password);

  return redirect('/admin');
};
