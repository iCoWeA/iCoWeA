import React, { type Dispatch, type SetStateAction, type FC } from 'react';
import { Form } from 'react-router-dom';

import CloseIcon from '../../../components/Icons/CloseIcon';
import EditIcon from '../../../components/Icons/EditIcon';
import InputControl from '../../../components/InputControl/InputControl';
import SubmitButton from '../../../components/SubmitButton/SubmitButton';
import Textfield from '../../../components/Textfield/Textfield';
import Button from '../../../lib/iCoWeABaseUI/components/inputs/Button/Button';
import Grid from '../../../lib/iCoWeABaseUI/components/layouts/Grid/Grid';
import useForm from '../../../lib/iCoWeAHooks/hooks/useForm';
import { isFormChanged } from '../../../utils/utils';

export type AddProjectFormProps = {
  setIsEditing: Dispatch<SetStateAction<string>>;
  id: string;
  name: string;
  url: string;
  imageURL: string;
};

const AddProjectForm: FC<AddProjectFormProps> = ({ setIsEditing, id, name, url, imageURL }) => {
  const {
    state: { inputs, isFormValid },
    change,
    blur,
    revalidForm,
    resetForm
  } = useForm({ name, url, 'image-url': imageURL });

  return (
    <Form
      onSubmit={() => {
        resetForm();
        setIsEditing('');
      }}
      onFocus={(event) => revalidForm(event.target)}
      method="post"
      className="w-full"
    >
      <Grid
        gap="md"
        className="grid-cols-3 max-md:grid-cols-1"
      >
        <InputControl>
          <Textfield
            onChange={(event) => change(event, 1000)}
            onBlur={blur}
            variant="default"
            color="on-neutral"
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
            color="on-neutral"
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
            color="on-neutral"
            invalid={inputs['image-url'].error}
            label="Image URL"
            id="image-url"
            name="image-url"
            required
            value={inputs['image-url'].value}
          />
        </InputControl>
        <SubmitButton
          variant="plain"
          className="col-span-2 max-md:col-span-1"
          disabled={
            !isFormValid ||
            !isFormChanged({ name, url, imageURL }, { ...inputs, imageURL: inputs['image-url'] })
          }
          name="edit"
          value={id}
          leftDecorator={<EditIcon />}
        >
          Save
        </SubmitButton>
        <Button
          onClick={() => {
            setIsEditing('');
          }}
          block
          color="error"
          leftDecorator={<CloseIcon />}
        >
          Cancel
        </Button>
      </Grid>
    </Form>
  );
};

export default AddProjectForm;
