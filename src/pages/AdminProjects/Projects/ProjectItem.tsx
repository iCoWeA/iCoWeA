import React, { type Dispatch, type SetStateAction, type FC, useRef, useCallback } from 'react';

import EditIcon from '../../../components/Icons/EditIcon';
import ListButton from '../../../lib/iCoWeABaseUI/components/data-display/ListButton/ListButton';
import ListItem from '../../../lib/iCoWeABaseUI/components/data-display/ListItem/ListItem';
import Button from '../../../lib/iCoWeABaseUI/components/inputs/Button/Button';
import useAddEventListener from '../../../lib/iCoWeABaseUI/hooks/useAddEventListener';
import EditProjectForm from './EditProjectForm';

export type ProjectItemProps = {
  setIsDraged: Dispatch<SetStateAction<boolean>>;
  setIsEditing: Dispatch<SetStateAction<string>>;
  isEditing: string;
  id: string;
  name: string;
  url: string;
  imageURL: string;
  draggable: boolean;
};

const ProjectItem: FC<ProjectItemProps> = ({
  setIsDraged,
  setIsEditing,
  isEditing,
  id,
  name,
  url,
  imageURL,
  draggable
}) => {
  const ref = useRef<HTMLLIElement>(null);

  /* --- Set event handlers --- */
  const dragStartHandler = useCallback((event: DragEvent): void => {
    event.dataTransfer?.setData('listId', id);
    setIsDraged(true);
  }, []);

  const dragEndHandler = useCallback((): void => setIsDraged(false), []);

  useAddEventListener(ref, 'dragstart', !isEditing && dragStartHandler);

  useAddEventListener(ref, 'dragend', !isEditing && dragEndHandler);

  if (isEditing === id) {
    return (
      <ListItem
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
  }

  return (
    <ListButton
      variant="solid"
      color="primary"
      radius="rounded"
      justify="between"
      draggable={draggable}
      ref={ref}
    >
      {name}
      <Button
        onClick={() => setIsEditing(id)}
        size="sm"
        variant="plain"
        leftDecorator={<EditIcon />}
      >
        Edit
      </Button>
    </ListButton>
  );
};

export default ProjectItem;
