import React, {
  type Dispatch,
  type SetStateAction,
  type FC,
  useRef,
  useCallback,
  useState
} from 'react';

import { useSubmit } from 'react-router-dom';
import Icon from '../../../lib/iCoWeABaseUI/components/data-display/Icon/Icon';
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
        <Icon
          size="lg"
          spacing="default"
        >
          <svg
            focusable="false"
            viewBox="0 0 24 24"
          >
            <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zM19 4h-3.5l-1-1h-5l-1 1H5v2h14z"></path>
          </svg>
        </Icon>
      )}
      {!isHovered && (
        <Icon
          size="lg"
          spacing="default"
        >
          <svg
            focusable="false"
            viewBox="0 0 24 24"
          >
            <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zM8 9h8v10H8zm7.5-5-1-1h-5l-1 1H5v2h14V4z"></path>
          </svg>
        </Icon>
      )}
    </Card>
  );
};

export default TrashArea;
