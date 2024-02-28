import React, {
  type Dispatch,
  type DragEvent,
  type FC,
  type SetStateAction,
  useCallback,
  useState
} from 'react';
import { useSelector } from 'react-redux';
import { useSubmit } from 'react-router-dom';

import FullTrash from '../../components/Icons/FullTrash';
import Trash from '../../components/Icons/Trash';
import Card from '../../lib/iCoWeABaseUI/components/surfaces/Card/Card';
import Collapse from '../../lib/iCoWeABaseUI/components/utils/Collapse/Collapse';
import { selectProjects } from '../../store/slices/projects';

type TrashAreaProps = {
  setDraging: Dispatch<SetStateAction<string>>;
  draging: string;
};

const TrashArea: FC<TrashAreaProps> = ({ setDraging, draging }) => {
  const projects = useSelector(selectProjects);
  const submit = useSubmit();

  const isOpen = !!draging;

  const [isHovered, setIsHovered] = useState(false);

  /* --- Set event handlers --- */
  const dragOverHandler = useCallback((event: DragEvent<HTMLDivElement>): void => {
    event.preventDefault();
    setIsHovered(true);
  }, []);

  const dragEnterHandler = useCallback((): void => setIsHovered(true), []);

  const dragLeaveHandler = useCallback((): void => setIsHovered(false), []);

  const dropHandler = useCallback(
    (event: DragEvent): void => {
      const dragId = event.dataTransfer?.getData('projectId');
      const data: Record<string, Record<'order', number>> = {};

      Object.keys(projects).forEach((key) => {
        if (projects[key].order > projects[dragId].order) {
          data[key] = { ...projects[key], order: projects[key].order - 1 };
        }
      });

      setDraging('');
      submit({ del: JSON.stringify({ delete: dragId, ...data }) }, { method: 'post' });
    },
    [projects]
  );

  return (
    <Collapse
      open={isOpen}
      className={isOpen ? 'mt-8' : ''}
    >
      <Card
        onDragOver={dragOverHandler}
        onDragEnter={dragEnterHandler}
        onDragLeave={dragLeaveHandler}
        onDrop={dropHandler}
        spacing="md-panel"
        block
        variant={isHovered ? 'solid' : 'soft'}
        color="error"
      >
        {isHovered && (
          <FullTrash
            size="lg"
            spacing="default"
            className="pointer-events-none"
          />
        )}
        {!isHovered && (
          <Trash
            size="lg"
            spacing="default"
            className="pointer-events-none"
          />
        )}
      </Card>
    </Collapse>
  );
};

export default TrashArea;
