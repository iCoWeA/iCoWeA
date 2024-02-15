import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { type FC } from 'react';
import { Form, redirect } from 'react-router-dom';

import PasswordInput from '../../components/PasswordInput/PasswordInput';
import Textfield from '../../components/Textfield/Textfield';
import { auth } from '../../firebase';
import Button from '../../lib/iCoWeABaseUI/components/inputs/Button/Button';
import Input from '../../lib/iCoWeABaseUI/components/inputs/Input/Input';
import Layout from '../../lib/iCoWeABaseUI/components/layouts/Layout/Layout';
import Main from '../../lib/iCoWeABaseUI/components/layouts/Main/Main';
import Section from '../../lib/iCoWeABaseUI/components/layouts/Section/Section';
import Card from '../../lib/iCoWeABaseUI/components/surfaces/Card/Card';
import useForm from '../../lib/iCoWeAHooks/hooks/useForm';
import { EMAIL_PATTERN } from '../../lib/iCoWeAUtilsUI/data/constants';

export const Component: FC = () => {
  const {
    state: { inputs, isFormValid },
    change,
    blur,
    resetForm
  } = useForm({ email: '', password: '' });

  return (
    <Layout layout="default">
      <Main>
        <Section>
          <Form
            onSubmit={resetForm}
            method="post"
          >
            <Card
              spacing="lg"
              gap="lg"
            >
              <Textfield errorText={inputs.email.error && 'Invalid email'}>
                <Input
                  onChange={(event) => change(event, 1000)}
                  onBlur={blur}
                  block
                  invalid={inputs.email.error}
                  label="Email"
                  id="email"
                  name="email"
                  pattern={EMAIL_PATTERN}
                  required
                  value={inputs.email.value}
                />
              </Textfield>
              <Textfield errorText={inputs.password.error && 'Invalid password'}>
                <PasswordInput
                  onChange={(event) => change(event, 1000)}
                  onBlur={blur}
                  block
                  invalid={inputs.password.error}
                  label="Password"
                  id="password"
                  name="password"
                  required
                  value={inputs.password.value}
                />
              </Textfield>
              <Button
                block
                disabled={!isFormValid}
                type="submit"
              >
                LOGIN
              </Button>
            </Card>
          </Form>
        </Section>
      </Main>
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

  return redirect('/admin-home');
};

Component.displayName = 'LoginRoot';
