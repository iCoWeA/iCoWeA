import React, {
  type Dispatch,
  type SetStateAction,
  type FC,
  useRef,
  useState,
  useCallback
} from 'react';
import { useSubmit } from 'react-router-dom';

import FullTrash from '../../../components/Icons/FullTrash';
import Trash from '../../../components/Icons/Trash';
import Card from '../../../lib/iCoWeABaseUI/components/surfaces/Card/Card';
import useAddEventListener from '../../../lib/iCoWeABaseUI/hooks/useAddEventListener';

export type TrashAreaProps = {
  setIsDraged: Dispatch<SetStateAction<boolean>>;
};

const TrashArea: FC<TrashAreaProps> = ({ setIsDraged }) => {
  const submit = useSubmit();

  const ref = useRef<HTMLDivElement>(null);

  const [isHovered, setIsHovered] = useState(false);

  /* --- Set event handlers --- */
  const dragOverHandler = useCallback((event: DragEvent): void => {
    event.preventDefault();
    setIsHovered(true);
  }, []);

  const dragLeaveHandler = useCallback((): void => setIsHovered(false), []);

  const dropHandler = useCallback((event: DragEvent): void => {
    setIsDraged(false);
    submit({ del: event.dataTransfer?.getData('listId') ?? '' }, { method: 'post' });
  }, []);

  useAddEventListener(ref, 'dragover', dragOverHandler);

  useAddEventListener(ref, 'dragleave', dragLeaveHandler);

  useAddEventListener(ref, 'drop', dropHandler);

  return (
    <Card
      spacing="sm-panel"
      variant={isHovered ? 'solid' : 'soft'}
      color="error"
      ref={ref}
    >
      {isHovered && (
        <FullTrash
          size="lg"
          spacing="default"
        />
      )}
      {!isHovered && (
        <Trash
          size="lg"
          spacing="default"
        />
      )}
    </Card>
  );
};

export default TrashArea;
