import React, { type FC, useCallback, type ChangeEvent } from 'react';
import { Form } from 'react-router-dom';

import InputControl from '../../components/InputControl/InputControl';
import SubmitButton from '../../components/SubmitButton/SubmitButton';
import Textfield from '../../components/Textfield/Textfield';
import Textarea from '../../lib/iCoWeABaseUI/components/inputs/Textarea/Textarea';
import Grid from '../../lib/iCoWeABaseUI/components/layouts/Grid/Grid';
import Stack from '../../lib/iCoWeABaseUI/components/layouts/Stack/Stack';
import useForm from '../../lib/iCoWeAHooks/hooks/useForm';
import { FULLNAME_PATTERN, EMAIL_PATTERN, TEXT_PATTERN } from '../../lib/iCoWeAUtilsUI/data/constants';

const ContactForm: FC = () => {
  const {
    state: { inputs, isFormValid },
    change,
    blur,
    resetForm
  } = useForm({ name: '', email: '', subject: '', message: '' });

  /* -- Set event handlers --- */
  const changeHandler = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => change(event, 1000),
    []
  );

  const changeTextareaHandler = useCallback(
    (event: ChangeEvent<HTMLTextAreaElement>) => change(event, 1000),
    []
  );

  return (
    <Form
      onSubmit={resetForm}
      method="post"
      className="grow"
    >
      <Grid gap="lg" className='grid-cols-2 max-md:grid-cols-1'>
        <Stack gap="lg">
          <InputControl errorText={inputs.name.error && 'Invalid name'}>
            <Textfield
              onChange={changeHandler}
              onBlur={blur}
              variant="default"
              color="on-secondary"
              invalid={inputs.name.error}
              label="Name"
              id="name"
              maxLength={32}
              name="name"
              pattern={FULLNAME_PATTERN}
              required
              value={inputs.name.value}
            />
          </InputControl>
          <InputControl errorText={inputs.email.error && 'Invalid email'}>
            <Textfield
              onChange={changeHandler}
              onBlur={blur}
              variant="default"
              color="on-secondary"
              invalid={inputs.email.error}
              label="Email"
              id="email"
              name="email"
              pattern={EMAIL_PATTERN}
              required
              value={inputs.email.value}
            />
          </InputControl>
          <InputControl errorText={inputs.subject.error && 'Invalid subject'}>
            <Textfield
              onChange={changeHandler}
              onBlur={blur}
              variant="default"
              color="on-secondary"
              invalid={inputs.subject.error}
              label="Subject"
              id="subject"
              maxLength={32}
              name="subject"
              pattern={TEXT_PATTERN}
              required
              value={inputs.subject.value}
            />
          </InputControl>
        </Stack>
        <Stack gap="lg">
          <InputControl errorText={inputs.message.error && 'Invalid message'}>
            <Textarea
              onChange={changeTextareaHandler}
              onBlur={blur}
              block
              variant="default"
              color="on-secondary"
              invalid={inputs.message.error}
              label="Message"
              className="h-[5.75rem]"
              id="message"
              maxLength={500}
              name="message"
              required
              value={inputs.message.value}
            />
          </InputControl>
          <SubmitButton
            color="secondary"
            disabled={!isFormValid}
          >
            SEND
          </SubmitButton>
        </Stack>
      </Grid>
    </Form>
  );
};

export default ContactForm;
