import React, { type Dispatch, type SetStateAction, type FC } from 'react';

import ListItem from '../../lib/iCoWeABaseUI/components/data-display/ListItem/ListItem';
import { type Projects } from '../../store/slices/projects';
import EditTaskForm from './EditProjectForm';

type EditProjectProps = {
  setIsEditing: Dispatch<SetStateAction<boolean>>;
  id: string;
  projects: Projects;
};

const EditProject: FC<EditProjectProps> = ({ setIsEditing, id, projects }) => {
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
        projects={projects}
      />
    </ListItem>
  );
};

export default EditProject;
