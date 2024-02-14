import React, { type Dispatch, type SetStateAction, type FC, useRef, useCallback } from 'react';

import { useSubmit } from 'react-router-dom';
import Icon from '../../../lib/iCoWeABaseUI/components/data-display/Icon/Icon';
import Card from '../../../lib/iCoWeABaseUI/components/surfaces/Card/Card';
import useAddEventListener from '../../../lib/iCoWeABaseUI/hooks/useAddEventListener';

export type TrashAreaProps = {
  setIsDraged: Dispatch<SetStateAction<boolean>>;
};

const TrashArea: FC<TrashAreaProps> = ({ setIsDraged }) => {
  const submit = useSubmit();

  const ref = useRef<HTMLLIElement>(null);

  /* --- Set event handlers --- */
  const dragOverHandler = useCallback((event: DragEvent): void => {
    event.preventDefault();
  }, []);

  const dropHandler = useCallback((event: DragEvent): void => {
    setIsDraged(false);
    submit({ del: event.dataTransfer?.getData('listId') ?? '' }, { method: 'post' });
  }, []);

  useAddEventListener(ref, 'dragover', dragOverHandler);

  useAddEventListener(ref, 'drop', dropHandler);

  return (
    <Card
      spacing="sm-panel"
      variant="soft"
      color="error"
    >
      <Icon
        size="sm"
        spacing="default"
      >
        <svg
          focusable="false"
          viewBox="0 0 24 24"
        >
          <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zm2.46-7.12 1.41-1.41L12 12.59l2.12-2.12 1.41 1.41L13.41 14l2.12 2.12-1.41 1.41L12 15.41l-2.12 2.12-1.41-1.41L10.59 14zM15.5 4l-1-1h-5l-1 1H5v2h14V4z"></path>
        </svg>
      </Icon>
    </Card>
  );
};

export default TrashArea;
