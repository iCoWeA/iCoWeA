import React, {
  type Dispatch,
  type DragEvent,
  type FC,
  type SetStateAction,
  useCallback
} from 'react';
import { useSelector } from 'react-redux';
import { useSubmit } from 'react-router-dom';

import ReorderIcon from '../../components/Icons/ReorderIcon';
import ListItem from '../../lib/iCoWeABaseUI/components/data-display/ListItem/ListItem';
import { selectProjects } from '../../store/slices/projects';

type ReorderProjectProps = {
  setDraging: Dispatch<SetStateAction<string>>;
  setHovering: Dispatch<SetStateAction<string>>;
  draging: string;
  id: string;
};

const ReorderProject: FC<ReorderProjectProps> = ({ setDraging, setHovering, draging, id }) => {
  const projects = useSelector(selectProjects);
  const submit = useSubmit();

  const dragLeaveHandler = useCallback(() => {
    if (draging !== id) {
      setHovering('');
    }
  }, [draging, id]);

  const dragOverHandler = useCallback(
    (event: DragEvent<HTMLLIElement>): void => {
      if (draging !== id) {
        event.preventDefault();
      }
    },
    [draging, id]
  );

  const dropHandler = useCallback(
    (event: DragEvent<HTMLLIElement>): void => {
      if (draging === id) {
        return;
      }

      const dragId = event.dataTransfer.getData('projectId');

      const data: Record<string, Record<'order', string>> = {
        [dragId]: { ...projects[dragId], order: projects[id].order }
      };

      Object.keys(projects).forEach((key) => {
        if (
          projects[dragId].order < projects[id].order &&
          projects[dragId].order < projects[key].order &&
          projects[key].order <= projects[id].order
        ) {
          data[key] = { ...projects[key], order: `${+projects[key].order - 1}` };
        }

        if (
          projects[dragId].order > projects[id].order &&
          projects[key].order < projects[dragId].order &&
          projects[id].order <= projects[key].order
        ) {
          data[key] = { ...projects[key], order: `${+projects[key].order + 1}` };
        }
      });

      setHovering('');
      setDraging('');
      submit({ reorder: JSON.stringify(data) }, { method: 'post' });
    },
    [draging, id, projects]
  );

  return (
    <ListItem
      onDragLeave={draging !== id ? dragLeaveHandler : undefined}
      onDragOver={draging !== id ? dragOverHandler : undefined}
      onDrop={draging !== id ? dropHandler : undefined}
      spacing="md"
      variant="plain"
      color="neutral"
      border
      radius="rounded"
      className="h-14 border-4 border-dashed font-semibold select-none"
    >
      <ReorderIcon />
      NEW ORDER
    </ListItem>
  );
};

export default ReorderProject;
