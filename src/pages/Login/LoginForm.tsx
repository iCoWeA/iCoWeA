import React, { type FC } from 'react';
import useForm from '../../lib/simpleComponents/hooks/useForm';
import Section from '../../lib/simpleComponents/components/layouts/Section';
import Container from '../../lib/simpleComponents/components/UI/Container';
import Card from '../../lib/simpleComponents/components/UI/Card';
import CardBody from '../../lib/simpleComponents/components/UI/CardBody';
import Form from '../../lib/simpleComponents/components/UI/Form';
import Input from '../../lib/simpleComponents/components/UI/Input/Input';
// import PasswordInput from '../../components/PasswordInout.tsx/PasswordInput';
import Button from '../../lib/simpleComponents/components/UI/Button';

const LoginForm: FC = () => {
  const email = 'email';
  const password = 'password';
  const {
    state: { inputs, isFormValid },
    debouncedChange,
    blur,
    resetForm
  } = useForm({ [email]: {}, [password]: {} });

  return (
    <Section>
      <Container
        variant="fluid"
        className="justify-items-center"
      >
        <Card className="w-full max-w-lg col-span-4 md:col-span-8 lg:col-span-12">
          <CardBody>
            <Form
              method="post"
              onSubmit={resetForm}
            >
              <Input
                label="Email"
                invalid={inputs[email].error}
                onChange={debouncedChange}
                onBlur={blur}
                name={email}
                value={inputs[email].value}
                type="email"
                required
              />
              <Button
                fullwidth
                disabled={!isFormValid}
                type="submit"
              >
                LOGIN
              </Button>
            </Form>
          </CardBody>
        </Card>
      </Container>
    </Section>
  );
};

/*
<PasswordInput
                label="Password"
                invalid={inputs[password].error}
                onChange={debouncedChange}
                onBlur={blur}
                name={password}
                value={inputs[password].value}
                required
              />
*/

export default LoginForm;
