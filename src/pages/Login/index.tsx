import React, { type FC } from 'react';
import { Form, redirect } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';

import PasswordInput from '../../components/PasswordInput/PasswordInput';
import { EMAIL_PATTERN } from '../../data/constants';
import Button from '../../lib/iCoWeaUI/components/inputs/Button/Button';
import FormControl from '../../lib/iCoWeaUI/components/inputs/FormControl/FormControl';
import Input from '../../lib/iCoWeaUI/components/inputs/Input/Input';
import Section from '../../lib/iCoWeaUI/components/layouts/Section/Section';
import Card from '../../lib/iCoWeaUI/components/surfaces/Card/Card';
import useForm from '../../lib/iCoWeaUI/hooks/useForm';

export const Component: FC = () => {
  const {
    state: { inputs, isFormValid },
    change,
    blur,
    resetForm
  } = useForm({ email: '', password: '' });

  return (
    <Section className="mx-auto max-w-120">
      <Form
        method="post"
        onSubmit={resetForm}
      >
        <Card
          spacing="md"
          gap="md"
        >
          <FormControl color="error">
            <Input
              block
              label="Email"
              invalid={inputs.email.error}
              onChange={(event) => {
                change(event, 1000);
              }}
              onBlur={blur}
              id="email"
              name="email"
              value={inputs.email.value}
              type="email"
              pattern={EMAIL_PATTERN}
              required
            />
            {inputs.email.error && 'Invalid email'}
          </FormControl>
          <FormControl color="error">
            <PasswordInput
              block
              label="Password"
              invalid={inputs.password.error}
              onChange={(event) => {
                change(event, 1000);
              }}
              onBlur={blur}
              id="password"
              name="password"
              value={inputs.password.value}
              required
            />
            {inputs.password.error && 'Invalid password'}
          </FormControl>
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
