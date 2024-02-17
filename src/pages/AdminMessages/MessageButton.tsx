import React, { type Dispatch, type SetStateAction, type FC, useRef, useCallback } from 'react';
import { useSubmit } from 'react-router-dom';

import MessageIcon from '../../components/Icons/MessageIcon';
import ReadMessageIcon from '../../components/Icons/ReadMessageIcon';
import ListButton from '../../lib/iCoWeABaseUI/components/data-display/ListButton/ListButton';
import Tooltip from '../../lib/iCoWeABaseUI/components/data-display/Tooltip/Tooltip';
import Button from '../../lib/iCoWeABaseUI/components/inputs/Button/Button';
import useAddEventListener from '../../lib/iCoWeABaseUI/hooks/useAddEventListener';

export type MessageItemProps = {
  setIsDraged: Dispatch<SetStateAction<boolean>>;
  setIsReading: Dispatch<SetStateAction<string>>;
  isReading: string;
  id: string;
  subject: string;
  unread: boolean;
  draggable: boolean;
};

const MessageButton: FC<MessageItemProps> = ({
  setIsDraged,
  setIsReading,
  isReading,
  id,
  subject,
  unread,
  draggable
}) => {
  const submit = useSubmit();

  const ref = useRef<HTMLLIElement>(null);

  /* --- Set event handlers --- */
  const dragStartHandler = useCallback((event: DragEvent): void => {
    event.dataTransfer?.setData('messageId', id);
    setIsDraged(true);
  }, []);

  const dragEndHandler = useCallback((): void => setIsDraged(false), []);

  useAddEventListener(ref, 'dragstart', !isReading && dragStartHandler);

  useAddEventListener(ref, 'dragend', !isReading && dragEndHandler);

  return (
    <ListButton
      onClick={() => {
        setIsReading(id);
        submit({ read: id }, { method: 'post' });
      }}
      variant={unread ? 'solid' : 'soft'}
      color="neutral"
      radius="rounded"
      justify="between"
      className={unread ? 'font-bold' : ''}
      draggable={draggable}
      ref={ref}
    >
      {subject}
      <Tooltip
        offset={4}
        spacing="sm"
        variant={unread ? 'plain' : 'solid'}
        radius="rounded"
        content={unread ? 'Mark as read' : 'Mark as unread'}
      >
        <Button
          onClick={(event) => {
            event.stopPropagation();
            if (unread) {
              submit({ read: id }, { method: 'post' });
            } else {
              submit({ unread: id }, { method: 'post' });
            }
          }}
          icon
          size="sm"
          variant={unread ? 'default' : 'text'}
          color="neutral"
        >
          {unread ? <ReadMessageIcon /> : <MessageIcon />}
        </Button>
      </Tooltip>
    </ListButton>
  );
};

export default MessageButton;
