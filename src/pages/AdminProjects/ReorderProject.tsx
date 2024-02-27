import React, {
  type Dispatch,
  type DragEvent,
  type FC,
  type SetStateAction,
  useCallback
} from 'react';

import { type Projects } from '../../store/slices/projects';
import { useSubmit } from 'react-router-dom';
import ReorderIcon from '../../components/Icons/ReorderIcon';
import ListItem from '../../lib/iCoWeABaseUI/components/data-display/ListItem/ListItem';

type ReorderProjectProps = {
  setDraging: Dispatch<SetStateAction<string>>;
  setIsHovering: Dispatch<SetStateAction<boolean>>;
  draging: string;
  id: string;
  projects: Projects;
};

const ReorderProject: FC<ReorderProjectProps> = ({
  setDraging,
  setIsHovering,
  draging,
  id,
  projects
}) => {
  const submit = useSubmit();

  const dragLeaveHandler = useCallback(() => setIsHovering(false), []);

  const dragOverHandler = useCallback((event: DragEvent<HTMLLIElement>): void => {
    event.preventDefault();
  }, []);

  const dropHandler = useCallback(
    (event: DragEvent<HTMLLIElement>): void => {
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

      setIsHovering(false);
      setDraging('');
      submit({ reorder: JSON.stringify(data) }, { method: 'post' });
    },
    [id, projects]
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
