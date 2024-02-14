import React, { type Dispatch, type SetStateAction, type FC } from 'react';
import { Form } from 'react-router-dom';

import Textfield from '../../../components/Textfield/Textfield';
import Icon from '../../../lib/iCoWeABaseUI/components/data-display/Icon/Icon';
import Button from '../../../lib/iCoWeABaseUI/components/inputs/Button/Button';
import Input from '../../../lib/iCoWeABaseUI/components/inputs/Input/Input';
import Grid from '../../../lib/iCoWeABaseUI/components/layouts/Grid/Grid';
import useForm from '../../../lib/iCoWeAHooks/hooks/useForm';
import { isFormChanged } from '../../../utils/utils';

export type AddProjectFormProps = {
  setIsEditing: Dispatch<SetStateAction<number>>;
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
        setIsEditing(-1);
      }}
      onFocus={(event) => {
        revalidForm(event.target);
      }}
      method="post"
      className="w-full"
    >
      <Grid
        gap="md"
        className="grid-cols-3 max-md:grid-cols-1"
      >
        <Textfield>
          <Input
            onChange={(event) => {
              change(event, 1000);
            }}
            onBlur={blur}
            block
            variant="default"
            color="on-primary"
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
            color="on-primary"
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
            color="on-primary"
            invalid={inputs['image-url'].error}
            label="Image URL"
            id="image-url"
            name="image-url"
            required
            value={inputs['image-url'].value}
          />
        </Textfield>
        <Button
          block
          variant="plain"
          className="col-span-2 max-md:col-span-1"
          disabled={
            !isFormValid ||
            !isFormChanged({ name, url, imageURL }, { ...inputs, imageURL: inputs['image-url'] })
          }
          name="edit"
          value={id}
          type="submit"
          leftDecorator={
            <Icon>
              <svg
                focusable="false"
                viewBox="0 0 24 24"
              >
                <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75z"></path>
              </svg>
            </Icon>
          }
        >
          Save
        </Button>
        <Button
          onClick={() => {
            setIsEditing(-1);
          }}
          block
          color="error"
          leftDecorator={
            <Icon>
              <svg
                focusable="false"
                viewBox="0 0 24 24"
              >
                <path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
              </svg>
            </Icon>
          }
        >
          Cancel
        </Button>
      </Grid>
    </Form>
  );
};

export default AddProjectForm;
