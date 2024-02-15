import React, { type FC, useState, useEffect } from 'react';
import { useActionData, useNavigation, redirect } from 'react-router-dom';
import { signInWithEmailAndPassword, signOut } from 'firebase/auth';

import ErrorIcon from '../../components/Icons/ErrorIcon';
import { appAuth } from '../../firebase';
import Alert from '../../lib/iCoWeABaseUI/components/feedback/Alert/Alert';
import Snackbar from '../../lib/iCoWeABaseUI/components/feedback/Snackbar/Snackbar';
import Layout from '../../lib/iCoWeABaseUI/components/layouts/Layout/Layout';
import Main from '../../lib/iCoWeABaseUI/components/layouts/Main/Main';
import Section from '../../lib/iCoWeABaseUI/components/layouts/Section/Section';
import LoginForm from './LoginForm';

export const Component: FC = () => {
  const actionData = useActionData() as string;
  const navigation = useNavigation();

  const [error, setError] = useState(false);

  useEffect(() => {
    if (navigation.state === 'idle' && actionData) {
      setError(true);
    }
  }, [navigation.state, actionData]);

  return (
    <Layout layout="default">
      <Main>
        <Section>
          <LoginForm
            setError={setError}
            state={navigation.state}
          />
        </Section>
      </Main>
      <Snackbar
        onClose={setError}
        open={error}
        placement="bottom"
        closeDuration={5000}
        unmountOnExit
        className="w-full max-w-[32rem] px-4"
      >
        <Alert leftDecorator={<ErrorIcon />}>{actionData}</Alert>
      </Snackbar>
    </Layout>
  );
};

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
