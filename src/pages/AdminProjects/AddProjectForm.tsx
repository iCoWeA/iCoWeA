import React, {
  type Dispatch,
  type SetStateAction,
  type FC,
  useCallback,
  type ChangeEvent
} from 'react';
import { useSelector } from 'react-redux';
import { Form } from 'react-router-dom';

import SubmitButton from '../../components/SubmitButton/SubmitButton';
import Textfield from '../../components/Textfield/Textfield';
import Card from '../../lib/iCoWeABaseUI/components/surfaces/Card/Card';
import Collapse from '../../lib/iCoWeABaseUI/components/utils/Collapse/Collapse';
import useForm from '../../lib/iCoWeAHooks/hooks/useForm';
import { selectProjects } from '../../store/slices/projects';

export type AddProjectFormProps = {
  setOpen: Dispatch<SetStateAction<boolean>>;
  open: boolean;
};

const AddProjectForm: FC<AddProjectFormProps> = ({ setOpen, open }) => {
  const projects = useSelector(selectProjects);

  const {
    state: { inputs, isFormValid },
    change,
    blur,
    resetForm
  } = useForm({
    name: '',
    url: '',
    'image-url': ''
  });

  /* -- Set event handlers --- */
  const submitHandler = useCallback(() => {
    resetForm();
    setOpen(false);
  }, []);

  const changeHandler = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => change(event, 1000),
    []
  );

  return (
    <Collapse
      open={open}
      className={`w-full${open ? ' mt-8' : ''}`}
    >
      <Form
        onSubmit={submitHandler}
        method="post"
      >
        <Card
          spacing="md"
          gap="lg"
        >
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
            variant="default"
            invalid={inputs['image-url'].error}
            label="Image URL"
            id="image-url"
            maxLength={32}
            name="image-url"
            required
            value={inputs['image-url'].value}
          />
          <SubmitButton
            size="sm"
            disabled={!isFormValid}
            name="add"
            value={Object.keys(projects).length}
          >
            Save
          </SubmitButton>
        </Card>
      </Form>
    </Collapse>
  );
};

export default AddProjectForm;
