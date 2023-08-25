import React, { type FC } from 'react';
import useForm from '../../lib/simpleComponents/hooks/useForm';
import Section from '../../lib/simpleComponents/components/layouts/Section';
import Container from '../../lib/simpleComponents/components/UI/Container';
import Card from '../../lib/simpleComponents/components/UI/Card';
import CardBody from '../../lib/simpleComponents/components/UI/CardBody';
import Form from '../../lib/simpleComponents/components/UI/Form';
import Input from '../../lib/simpleComponents/components/UI/Input';
import Button from '../../lib/simpleComponents/components/UI/Button';

const LoginForm: FC = () => {
  const email = 'email';
  const password = 'password';
  const {
    state: { inputs, isFormValid },
    debouncedChange,
    resetForm,
    blur
  } = useForm({
    inputs: { [email]: {}, [password]: {} }
  });

  console.log(inputs);

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
                name={email}
                value={inputs[email].value}
                invalid={inputs[email].error}
                type="email"
                required
                onChange={debouncedChange}
                onBlur={blur}
              />
              <Input
                label="Password"
                name={password}
                value={inputs[password].value}
                invalid={inputs[password].error}
                required
                onChange={debouncedChange}
                onBlur={blur}
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

export default LoginForm;
