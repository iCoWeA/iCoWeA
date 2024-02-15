import React, { type FC, useState, useEffect } from 'react';
import { useActionData, useNavigation, redirect } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';

import { auth } from '../../firebase';
import Icon from '../../lib/iCoWeABaseUI/components/data-display/Icon/Icon';
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
        <Alert
          color="error"
          leftDecorator={
            <Icon>
              <svg
                focusable="false"
                viewBox="0 0 24 24"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m1 15h-2v-2h2zm0-4h-2V7h2z"></path>
              </svg>
            </Icon>
          }
        >
          {actionData}
        </Alert>
      </Snackbar>
    </Layout>
  );
};

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

Component.displayName = 'LoginRoot';
