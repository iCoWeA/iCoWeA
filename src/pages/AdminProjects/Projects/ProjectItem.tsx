import React, { type Dispatch, type SetStateAction, type FC } from 'react';

import ListItem from '../../../lib/iCoWeABaseUI/components/data-display/ListItem/ListItem';
import EditProjectForm from './EditProjectForm';

export type ProjectItemProps = {
  setIsEditing: Dispatch<SetStateAction<string>>;
  id: string;
  name: string;
  url: string;
  imageURL: string;
};

const ProjectItem: FC<ProjectItemProps> = ({ setIsEditing, id, name, url, imageURL }) => (
  <ListItem
    spacing="md"
    variant="solid"
    color="primary"
    radius="rounded"
  >
    <EditProjectForm
      setIsEditing={setIsEditing}
      id={id}
      name={name}
      url={url}
      imageURL={imageURL}
    />
  </ListItem>
);

export default ProjectItem;
