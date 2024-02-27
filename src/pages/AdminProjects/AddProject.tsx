import React, { type FC, useState, useCallback } from 'react';

import CloseIcon from '../../components/Icons/CloseIcon';
import Button from '../../lib/iCoWeABaseUI/components/inputs/Button/Button';
import AddTaskForm from './AddProjectForm';

const AddProject: FC = () => {
  const [open, setOpen] = useState(false);

  /* --- Set event handlers --- */
  const clickHandler = useCallback(() => setOpen((open) => !open), []);

  return (
    <>
      <Button
        onClick={clickHandler}
        color={open ? 'error' : 'primary'}
        className="self-end transition-colors duration-500"
        leftDecorator={
          <CloseIcon className={`relative duration-500 ${open ? 'rotate-0' : 'rotate-45'}`} />
        }
      >
        {open ? 'Cancel' : 'Add project'}
      </Button>
      <AddTaskForm
        setOpen={setOpen}
        open={open}
      />
    </>
  );
};

export default AddProject;
