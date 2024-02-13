import React, { type FC } from 'react';
import { Form } from 'react-router-dom';

import Textfield from '../../components/Textfield/Textfield';
import { NAME_PATTERN } from '../../data/constants';
import Button from '../../lib/iCoWeABaseUI/components/inputs/Button/Button';
import Input from '../../lib/iCoWeABaseUI/components/inputs/Input/Input';
import Textarea from '../../lib/iCoWeABaseUI/components/inputs/Textarea/Textarea';
import Flex from '../../lib/iCoWeABaseUI/components/layouts/Flex/Flex';
import Stack from '../../lib/iCoWeABaseUI/components/layouts/Stack/Stack';
import useForm from '../../lib/iCoWeAHooks/hooks/useForm';
import { EMAIL_PATTERN } from '../../lib/iCoWeAUtilsUI/data/constants';

const ContactForm: FC = () => {
  const {
    state: { inputs, isFormValid },
    change,
    blur,
    resetForm
  } = useForm({ name: '', email: '', subject: '', message: '' });

  return (
    <Form
      onSubmit={resetForm}
      method="post"
      className="grow"
    >
      <Flex gap="lg">
        <Stack
          gap="lg"
          className="grow"
        >
          <Textfield errorText={inputs.name.error && 'Invalid name'}>
            <Input
              onChange={(event) => {
                change(event, 1000);
              }}
              onBlur={blur}
              block
              variant="default"
              color="secondary"
              invalid={inputs.name.error}
              label="Name"
              id="name"
              name="name"
              pattern={NAME_PATTERN}
              required
              value={inputs.name.value}
            />
          </Textfield>
          <Textfield errorText={inputs.email.error && 'Invalid email'}>
            <Input
              onChange={(event) => {
                change(event, 1000);
              }}
              onBlur={blur}
              block
              variant="default"
              color="secondary"
              invalid={inputs.email.error}
              label="Email"
              id="email"
              name="email"
              pattern={EMAIL_PATTERN}
              required
              value={inputs.email.value}
            />
          </Textfield>
          <Textfield errorText={inputs.subject.error && 'Invalid subject'}>
            <Input
              onChange={(event) => {
                change(event, 1000);
              }}
              onBlur={blur}
              block
              variant="default"
              color="secondary"
              invalid={inputs.subject.error}
              label="Subject"
              id="subject"
              name="subject"
              pattern={NAME_PATTERN}
              required
              value={inputs.subject.value}
            />
          </Textfield>
        </Stack>
        <Stack
          gap="lg"
          className="grow"
        >
          <Textfield errorText={inputs.message.error && 'Invalid message'}>
            <Textarea
              onChange={(event) => {
                change(event, 1000);
              }}
              onBlur={blur}
              block
              variant="default"
              color="secondary"
              invalid={inputs.message.error}
              label="Message"
              className="h-[5.75rem]"
              id="message"
              name="message"
              required
              value={inputs.message.value}
            />
          </Textfield>
          <Button
            block
            color="secondary"
            disabled={!isFormValid}
            type="submit"
          >
            SEND
          </Button>
        </Stack>
      </Flex>
    </Form>
  );
};

export default ContactForm;
