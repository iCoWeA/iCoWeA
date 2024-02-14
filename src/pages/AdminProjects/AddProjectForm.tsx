import React, { type Dispatch, type FC } from 'react';
import { Form } from 'react-router-dom';

import Textfield from '../../components/Textfield/Textfield';
import Button from '../../lib/iCoWeABaseUI/components/inputs/Button/Button';
import Input from '../../lib/iCoWeABaseUI/components/inputs/Input/Input';
import Stack from '../../lib/iCoWeABaseUI/components/layouts/Stack/Stack';
import useForm from '../../lib/iCoWeAHooks/hooks/useForm';

export type AddProjectFormProps = {
  setOpen: Dispatch<React.SetStateAction<boolean>>;
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
        <Textfield>
          <Input
            onChange={(event) => {
              change(event, 1000);
            }}
            onBlur={blur}
            block
            variant="default"
            invalid={inputs.name.error}
            label="Name"
            id="name"
            maxLength={32}
            name="name"
            required
            value={inputs.name.value}
          />
        </Textfield>
        <Textfield>
          <Input
            onChange={(event) => {
              change(event, 1000);
            }}
            onBlur={blur}
            block
            variant="default"
            invalid={inputs.url.error}
            label="Url"
            id="url"
            name="url"
            required
            value={inputs.url.value}
          />
        </Textfield>
        <Textfield>
          <Input
            onChange={(event) => {
              change(event, 1000);
            }}
            onBlur={blur}
            block
            variant="default"
            invalid={inputs['image-url'].error}
            label="Image URL"
            id="image-url"
            name="image-url"
            required
            value={inputs['image-url'].value}
          />
        </Textfield>
        <Button
          size="lg"
          disabled={!isFormValid}
          block
          type="submit"
        >
          Save
        </Button>
      </Stack>
    </Form>
  );
};

export default AddProjectForm;
