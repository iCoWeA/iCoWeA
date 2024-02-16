import React, { type Dispatch, type SetStateAction, type FC, useRef, useCallback } from 'react';
import { useSubmit } from 'react-router-dom';

import MessageIcon from '../../components/Icons/MessageIcon';
import ReadMessageIcon from '../../components/Icons/ReadMessageIcon';
import ListButton from '../../lib/iCoWeABaseUI/components/data-display/ListButton/ListButton';
import ListItem from '../../lib/iCoWeABaseUI/components/data-display/ListItem/ListItem';
import Mark from '../../lib/iCoWeABaseUI/components/data-display/Mark/Mark';
import Text from '../../lib/iCoWeABaseUI/components/data-display/Text/Text';
import Tooltip from '../../lib/iCoWeABaseUI/components/data-display/Tooltip/Tooltip';
import Button from '../../lib/iCoWeABaseUI/components/inputs/Button/Button';
import CloseButton from '../../lib/iCoWeABaseUI/components/inputs/CloseButton/CloseButton';
import Stack from '../../lib/iCoWeABaseUI/components/layouts/Stack/Stack';
import Container from '../../lib/iCoWeABaseUI/components/surfaces/Container/Container';
import useAddEventListener from '../../lib/iCoWeABaseUI/hooks/useAddEventListener';

export type MessageItemProps = {
  setIsDraged: Dispatch<SetStateAction<boolean>>;
  setIsReading: Dispatch<SetStateAction<string>>;
  isReading: string;
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  unread: boolean;
  draggable: boolean;
};

const MessageItem: FC<MessageItemProps> = ({
  setIsDraged,
  setIsReading,
  isReading,
  id,
  name,
  email,
  subject,
  message,
  unread,
  draggable
}) => {
  const submit = useSubmit();

  const ref = useRef<HTMLLIElement>(null);

  /* --- Set event handlers --- */
  const dragStartHandler = useCallback((event: DragEvent): void => {
    event.dataTransfer?.setData('listId', id);
    setIsDraged(true);
  }, []);

  const dragEndHandler = useCallback((): void => setIsDraged(false), []);

  useAddEventListener(ref, 'dragstart', !isReading && dragStartHandler);

  useAddEventListener(ref, 'dragend', !isReading && dragEndHandler);

  if (isReading === id) {
    return (
      <ListItem
        variant="soft"
        color="neutral"
        radius="rounded"
        gap="lg"
        col
      >
        <Container
          layout="header"
          spacing="md-panel"
          closable="right"
          direction="col"
          align="stretch"
          gap="md"
        >
          <CloseButton
            onClick={() => setIsReading('')}
            placement="right"
            size="md-panel"
            variant="default"
          />
          <Stack gap="sm">
            <Text className="break-all">
              From:{' '}
              <Mark
                variant="text"
                color="neutral"
              >
                {email}
              </Mark>
            </Text>
            <Text className="break-all">
              Name:{' '}
              <Mark
                variant="text"
                color="neutral"
              >
                {name}
              </Mark>
            </Text>
            <Text className="break-all">
              Subject:{' '}
              <Mark
                variant="text"
                color="neutral"
              >
                {subject}
              </Mark>
            </Text>
          </Stack>
        </Container>
        <Container
          layout="footer"
          spacing="md-panel"
        >
          <Text>Message:</Text>
          <Text className="break-all">{message}</Text>
        </Container>
      </ListItem>
    );
  }

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
      draggable={draggable}
      ref={ref}
    >
      {name}
      <Tooltip
        offset={4}
        spacing="sm"
        variant={unread ? 'plain' : 'solid'}
        content={unread ? 'Mark as read' : 'Mark as unread'}
        dropdownProps={{ className: 'rounded-lg' }}
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
          {unread ? <MessageIcon /> : <ReadMessageIcon />}
        </Button>
      </Tooltip>
    </ListButton>
  );
};

export default MessageItem;
