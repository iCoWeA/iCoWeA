import React, { type Dispatch, type SetStateAction, type FC } from 'react';
import { Form } from 'react-router-dom';

import PasswordInput from '../../components/PasswordInput/PasswordInput';
import Textfield from '../../components/Textfield/Textfield';
import Button from '../../lib/iCoWeABaseUI/components/inputs/Button/Button';
import Input from '../../lib/iCoWeABaseUI/components/inputs/Input/Input';
import Card from '../../lib/iCoWeABaseUI/components/surfaces/Card/Card';
import useForm from '../../lib/iCoWeAHooks/hooks/useForm';
import { EMAIL_PATTERN } from '../../lib/iCoWeAUtilsUI/data/constants';

export type LoginFormProps = {
  setError: Dispatch<SetStateAction<boolean>>;
  state: 'idle' | 'loading' | 'submitting';
};

const Loginform: FC<LoginFormProps> = ({ setError, state }) => {
  const {
    state: { inputs, isFormValid },
    change,
    blur,
    resetForm
  } = useForm({ email: '', password: '' });

  return (
    <Form
      onSubmit={() => {
        resetForm();
        setError(false);
      }}
      method="post"
    >
      <Card
        spacing="lg"
        gap="lg"
        className="w-full max-w-[30rem] mx-auto"
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
          loading={state === 'submitting'}
          disabled={!isFormValid}
          type="submit"
        >
          LOGIN
        </Button>
      </Card>
    </Form>
  );
};

export default Loginform;
