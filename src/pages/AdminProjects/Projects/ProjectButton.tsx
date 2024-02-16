import React, { type Dispatch, type SetStateAction, type FC, useRef, useCallback } from 'react';

import EditIcon from '../../../components/Icons/EditIcon';
import ListButton from '../../../lib/iCoWeABaseUI/components/data-display/ListButton/ListButton';
import Tooltip from '../../../lib/iCoWeABaseUI/components/data-display/Tooltip/Tooltip';
import Button from '../../../lib/iCoWeABaseUI/components/inputs/Button/Button';
import useAddEventListener from '../../../lib/iCoWeABaseUI/hooks/useAddEventListener';

export type ProjectButtonProps = {
  setIsDraged: Dispatch<SetStateAction<boolean>>;
  setIsEditing: Dispatch<SetStateAction<string>>;
  isEditing: string;
  id: string;
  name: string;
  draggable: boolean;
};

const ProjectButton: FC<ProjectButtonProps> = ({
  setIsDraged,
  setIsEditing,
  isEditing,
  id,
  name,
  draggable
}) => {
  const ref = useRef<HTMLLIElement>(null);

  /* --- Set event handlers --- */
  const dragStartHandler = useCallback((event: DragEvent): void => {
    event.dataTransfer?.setData('projectId', id);
    setIsDraged(true);
  }, []);

  const dragEndHandler = useCallback((): void => setIsDraged(false), []);

  useAddEventListener(ref, 'dragstart', !isEditing && dragStartHandler);

  useAddEventListener(ref, 'dragend', !isEditing && dragEndHandler);

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
      <Tooltip
        offset={4}
        spacing="sm"
        variant="solid"
        content="Edit"
        dropdownProps={{ className: 'rounded-lg' }}
      >
        <Button
          onClick={() => setIsEditing(id)}
          icon
          size="sm"
          variant="default"
        >
          <EditIcon />
        </Button>
      </Tooltip>
    </ListButton>
  );
};

export default ProjectButton;
