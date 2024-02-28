import React, {
  type Dispatch,
  type DragEvent,
  type FC,
  type MouseEvent,
  type SetStateAction,
  useCallback,
  useState
} from 'react';

import { type Projects } from '../../store/slices/projects';
import DragIcon from '../../components/Icons/DragIcon';
import MoreIcon from '../../components/Icons/MoreIcon';
import ListItem from '../../lib/iCoWeABaseUI/components/data-display/ListItem/ListItem';
import Title from '../../lib/iCoWeABaseUI/components/data-display/Title/Title';
import Tooltip from '../../lib/iCoWeABaseUI/components/data-display/Tooltip/Tooltip';
import Button from '../../lib/iCoWeABaseUI/components/inputs/Button/Button';
import Box from '../../lib/iCoWeABaseUI/components/layouts/Box/Box';
import EditProject from './EditProject';
import ReorderProject from './ReorderProject';

export type ProjectProps = {
  setDraging: Dispatch<SetStateAction<string>>;
  setHovering: Dispatch<SetStateAction<string>>;
  draging: string;
  hovering: string;
  id: string;
  projects: Projects;
};

const Project: FC<ProjectProps> = ({
  setDraging,
  setHovering,
  draging,
  hovering,
  id,
  projects
}) => {
  const [isEditing, setIsEditing] = useState(false);

  /* --- Set event handlers --- */
  const dragStartHandler = useCallback(
    (event: DragEvent<HTMLLIElement>): void => {
      event.dataTransfer?.setData('projectId', id);
      setDraging(id);
    },
    [id]
  );

  const dragEndHandler = useCallback(() => setDraging(''), []);

  const dragEnterHandler = useCallback(() => {
    if (id !== draging) {
      setHovering(id);
    }
  }, [id, draging]);

  const clickEditHandler = useCallback((event: MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    setIsEditing(true);
  }, []);

  if (isEditing) {
    return (
      <EditProject
        setIsEditing={setIsEditing}
        id={id}
      />
    );
  }

  if (hovering === id) {
    return (
      <ReorderProject
        setDraging={setDraging}
        setHovering={setHovering}
        draging={draging}
        id={id}
      />
    );
  }

  return (
    <ListItem
      onDragStart={dragStartHandler}
      onDragEnd={dragEndHandler}
      onDragEnter={dragEnterHandler}
      spacing="md"
      variant="plain"
      color="neutral"
      radius="rounded"
      className="h-14"
      draggable
    >
      <Title className="select-none">{projects[id].name}</Title>
      <Tooltip
        offset="8"
        content="Edit project"
      >
        <Button
          onClick={clickEditHandler}
          size="sm"
          icon
          variant="text"
          color="neutral"
          className="ml-auto"
        >
          <MoreIcon />
        </Button>
      </Tooltip>
      <Tooltip
        placement="bottom-end"
        offset="8"
        content="Drag to Reorder or Delete"
      >
        <Box>
          <DragIcon />
        </Box>
      </Tooltip>
    </ListItem>
  );
};

export default Project;
