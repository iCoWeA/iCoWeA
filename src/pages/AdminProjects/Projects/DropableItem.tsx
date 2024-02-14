import React, { type Dispatch, type SetStateAction, type FC, useRef, useCallback } from 'react';

import ListItem from '../../../lib/iCoWeABaseUI/components/data-display/ListItem/ListItem';
import useAddEventListener from '../../../lib/iCoWeABaseUI/hooks/useAddEventListener';

export type DropableItemProps = {
  setIsDraged: Dispatch<SetStateAction<number>>;
  isDragged: number;
  position: number;
};

const DropableItem: FC<DropableItemProps> = ({ setIsDraged, isDragged, position }) => {
  const ref = useRef<HTMLLIElement>(null);

  /* --- Set event handlers --- */
  const dragOverHandler = useCallback((event: DragEvent): void => {
    event.preventDefault();
    setIsDraged(position);
  }, []);

  const dropHandler = useCallback((): void => {
    setIsDraged(-1);
  }, []);

  useAddEventListener(ref, 'dragover', dragOverHandler);

  useAddEventListener(ref, 'drop', dropHandler);

  if (isDragged !== position) {
    return (
      <ListItem
        role="none"
        className="h-4"
        ref={ref}
      />
    );
  }

  return (
    <ListItem
      spacing="md"
      variant="text"
      color="primary"
      border
      radius="rounded"
      className="my-4 border-4 border-dashed"
      role="none"
      ref={ref}
    >
      {`Drop #${position}`}
    </ListItem>
  );
};

export default DropableItem;
