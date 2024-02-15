import React, { type Dispatch, type SetStateAction, type FC } from 'react';
import { Form } from 'react-router-dom';

import InputControl from '../../components/InputControl/InputControl';
import SubmitButton from '../../components/SubmitButton/SubmitButton';
import Textfield from '../../components/Textfield/Textfield';
import Stack from '../../lib/iCoWeABaseUI/components/layouts/Stack/Stack';
import useForm from '../../lib/iCoWeAHooks/hooks/useForm';

export type AddProjectFormProps = {
  setOpen: Dispatch<SetStateAction<boolean>>;
};

const AddProjectForm: FC<AddProjectFormProps> = ({ setOpen }) => {
  const {
    state: { inputs, isFormValid },
    change,
    blur,
    resetForm
  } = useForm({ name: '', url: '', 'image-url': '' });

  return (
    <Form
      onSubmit={() => {
        resetForm();
        setOpen(false);
      }}
      method="post"
      className="mb-8"
    >
      <Stack gap="lg">
        <InputControl>
          <Textfield
            onChange={(event) => change(event, 1000)}
            onBlur={blur}
            variant="default"
            invalid={inputs.name.error}
            label="Name"
            id="name"
            maxLength={32}
            name="name"
            required
            value={inputs.name.value}
          />
        </InputControl>
        <InputControl>
          <Textfield
            onChange={(event) => change(event, 1000)}
            onBlur={blur}
            variant="default"
            invalid={inputs.url.error}
            label="Url"
            id="url"
            name="url"
            required
            value={inputs.url.value}
          />
        </InputControl>
        <InputControl>
          <Textfield
            onChange={(event) => change(event, 1000)}
            onBlur={blur}
            variant="default"
            invalid={inputs['image-url'].error}
            label="Image URL"
            id="image-url"
            name="image-url"
            required
            value={inputs['image-url'].value}
          />
        </InputControl>
        <SubmitButton
          size="lg"
          disabled={!isFormValid}
          name="add"
        >
          Save
        </SubmitButton>
      </Stack>
    </Form>
  );
};

export default AddProjectForm;
