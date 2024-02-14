import React, { type FC, useState } from 'react';

import Icon from '../../../lib/iCoWeABaseUI/components/data-display/Icon/Icon';
import ListButton from '../../../lib/iCoWeABaseUI/components/data-display/ListButton/ListButton';
import ListItem from '../../../lib/iCoWeABaseUI/components/data-display/ListItem/ListItem';
import Button from '../../../lib/iCoWeABaseUI/components/inputs/Button/Button';
import EditProjectForm from './EditProjectForm';

export type ProjectListButtonProps = {
  name: string;
  url: string;
  imageURL: string;
};

const ProjectListButton: FC<ProjectListButtonProps> = ({ name, url, imageURL }) => {
  const [isEditing, setIsEditing] = useState(false);

  if (isEditing) {
    return (
      <ListItem
        spacing="md"
        variant="solid"
        color="primary"
        radius="rounded"
      >
        <EditProjectForm
          setIsEditing={setIsEditing}
          name={name}
          url={url}
          imageURL={imageURL}
        />
      </ListItem>
    );
  }

  return (
    <ListButton
      size="sm"
      variant="solid"
      color="primary"
      radius="rounded"
      justify="between"
    >
      name
      <Button
        onClick={() => {
          setIsEditing(true);
        }}
        size="sm"
        variant="plain"
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
        Edit
      </Button>
    </ListButton>
  );
};

export default ProjectListButton;
