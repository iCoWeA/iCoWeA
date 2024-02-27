import React, { type Dispatch, type SetStateAction, type FC } from 'react';

import ListItem from '../../lib/iCoWeABaseUI/components/data-display/ListItem/ListItem';
import EditTaskForm from './EditProjectForm';

type EditProjectProps = {
  setIsEditing: Dispatch<SetStateAction<boolean>>;
  id: string;
};

const EditProject: FC<EditProjectProps> = ({ setIsEditing, id }) => {
  return (
    <ListItem
      spacing="md"
      variant="plain"
      color="neutral"
      radius="rounded"
    >
      <EditTaskForm
        setIsEditing={setIsEditing}
        id={id}
      />
    </ListItem>
  );
};

export default EditProject;
