import React, { type ChangeEvent, type Dispatch, type FC, type FocusEvent, type SetStateAction, useCallback } from 'react';
import { Form } from 'react-router-dom';

import { type Projects } from '../../store/slices/projects';
import CloseIcon from '../../components/Icons/CloseIcon';
import EditIcon from '../../components/Icons/EditIcon';
import SubmitButton from '../../components/SubmitButton/SubmitButton';
import Textfield from '../../components/Textfield/Textfield';
import Button from '../../lib/iCoWeABaseUI/components/inputs/Button/Button';
import Grid from '../../lib/iCoWeABaseUI/components/layouts/Grid/Grid';
import useForm from '../../lib/iCoWeAHooks/hooks/useForm';

export type AddProjectFormProps = {
  setIsEditing: Dispatch<SetStateAction<boolean>>;
  id: string;
  projects: Projects;
};

const AddProjectForm: FC<AddProjectFormProps> = ({ setIsEditing, id, projects }) => {
  const {
    state: { inputs, isFormValid },
    change,
    blur,
    revalidForm,
    resetForm
  } = useForm({
    name: projects[id].name,
    url: projects[id].url,
    'image-url': projects[id].imageURL
  });

  /* -- Set event handlers --- */
  const submitHandler = useCallback(() => {
    resetForm();
    setIsEditing(false);
  }, []);

  const focusHandler = useCallback(
    (event: FocusEvent<HTMLFormElement>) => revalidForm(event.target),
    []
  );

  const changeHandler = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => change(event, 1000),
    []
  );

  const clickHandler = useCallback(() => {
    setIsEditing(false);
  }, []);

  return (
    <Form
      onSubmit={submitHandler}
      onFocus={focusHandler}
      method="post"
      className="w-full"
    >
      <Grid gap="sm" className='grid-cols-3 max-md:grid-cols-1'>
        <Textfield
          onChange={changeHandler}
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
        <Textfield
          onChange={changeHandler}
          onBlur={blur}
          variant="default"
          invalid={inputs.url.error}
          label="URL"
          id="url"
          name="url"
          required
          value={inputs.url.value}
        />
        <Textfield
          onChange={changeHandler}
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
        <SubmitButton
          size="sm"
          className="col-span-2 max-md:col-span-1"
          disabled={!isFormValid}
          name="edit"
          value={id}
          leftDecorator={<EditIcon />}
        >
          Save
        </SubmitButton>
        <Button
          onClick={clickHandler}
          block
          size="sm"
          color="error"
        >
          <CloseIcon />
        </Button>
      </Grid>
    </Form>
  );
};

export default AddProjectForm;
