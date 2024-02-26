import React, { type FC } from 'react';
import { redirect } from 'react-router-dom';
import { signInWithEmailAndPassword, signOut } from 'firebase/auth';

import { appAuth } from '../../firebase';
import Layout from '../../lib/iCoWeABaseUI/components/layouts/Layout/Layout';
import Main from '../../lib/iCoWeABaseUI/components/layouts/Main/Main';
import Login from './Login';

export const Component: FC = () => (
  <Layout layout="default">
    <Main>
      <Login />
    </Main>
  </Layout>
);

export const action = async ({ request }: { request: Request }): Promise<unknown> => {
  const formData = await request.formData();

  const email = formData.get('email')?.toString() ?? '';
  const password = formData.get('password')?.toString() ?? '';

  try {
    await signInWithEmailAndPassword(appAuth, email, password);
  } catch (error) {
    void signOut(appAuth);

    return 'Login error';
  }

  return redirect('/admin');
};

Component.displayName = 'LoginRoot';
