import React, {
  type Dispatch,
  type DragEvent,
  type FC,
  type MouseEvent,
  type SetStateAction,
  useCallback,
  useState
} from 'react';
import { useSubmit } from 'react-router-dom';

import Container from '../../lib/iCoWeABaseUI/components/surfaces/Container/Container';
import Text from '../../lib/iCoWeABaseUI/components/data-display/Text/Text';
import DragIcon from '../../components/Icons/DragIcon';
import MessageIcon from '../../components/Icons/MessageIcon';
import ReadMessageIcon from '../../components/Icons/ReadMessageIcon';
import ListItem from '../../lib/iCoWeABaseUI/components/data-display/ListItem/ListItem';
import Mark from '../../lib/iCoWeABaseUI/components/data-display/Mark/Mark';
import Title from '../../lib/iCoWeABaseUI/components/data-display/Title/Title';
import Tooltip from '../../lib/iCoWeABaseUI/components/data-display/Tooltip/Tooltip';
import Button from '../../lib/iCoWeABaseUI/components/inputs/Button/Button';
import CloseButton from '../../lib/iCoWeABaseUI/components/inputs/CloseButton/CloseButton';
import Box from '../../lib/iCoWeABaseUI/components/layouts/Box/Box';
import Stack from '../../lib/iCoWeABaseUI/components/layouts/Stack/Stack';

export type MessageItemProps = {
  setDraging: Dispatch<SetStateAction<string>>;
  draging: string;
  id: string;
  message: Message;
};

const MessageButton: FC<MessageItemProps> = ({ setDraging, draging, id, message }) => {
  const submit = useSubmit();

  const [isReading, setIsReading] = useState(false);

  /* --- Set event handlers --- */
  const dragStartHandler = useCallback(
    (event: DragEvent<HTMLLIElement>): void => {
      event.dataTransfer?.setData('messageId', id);
      setDraging(id);
    },
    [id]
  );

  const dragEndHandler = useCallback(() => setDraging(''), []);

  const clickHandler = useCallback(() => {
    setIsReading(true);
    submit({ read: id }, { method: 'post' });
  }, [id]);

  const clickReadHandler = useCallback(
    (event: MouseEvent<HTMLButtonElement>) => {
      event.stopPropagation();
      if (message.unread) {
        submit({ read: id }, { method: 'post' });
      } else {
        submit({ unread: id }, { method: 'post' });
      }
    },
    [message.unread, id]
  );

  if (isReading) {
    return (
      <ListItem
        variant="plain"
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
            onClick={() => setIsReading(false)}
            placement="right"
            size="md-panel"
            variant="text"
            color="neutral"
          />
          <Stack gap="sm">
            <Text className="break-all">
              From:{' '}
              <Mark
                variant="text"
                color="neutral"
              >
                {message.email}
              </Mark>
            </Text>
            <Text className="break-all">
              Name:{' '}
              <Mark
                variant="text"
                color="neutral"
              >
                {message.name}
              </Mark>
            </Text>
            <Text className="break-all">
              Subject:{' '}
              <Mark
                variant="text"
                color="neutral"
              >
                {message.subject}
              </Mark>
            </Text>
          </Stack>
        </Container>
        <Container
          layout="footer"
          spacing="md-panel"
        >
          <Text>Message:</Text>
          <Text className="break-all">{message.message}</Text>
        </Container>
      </ListItem>
    );
  }

  return (
    <ListItem
      onDragStart={draging ? undefined : dragStartHandler}
      onDragEnd={draging && draging === id ? dragEndHandler : undefined}
      onClick={clickHandler}
      spacing="md"
      variant={message.unread ? 'solid' : 'plain'}
      color={message.unread ? 'primary' : 'neutral'}
      radius="rounded"
      className="h-14"
      draggable
    >
      <Title
        color={message.unread ? 'on-primary' : 'neutral'}
        className="select-none"
      >
        {message.subject}
      </Title>
      <Tooltip
        offset="8"
        variant={message.unread ? 'plain' : 'solid'}
        content={message.unread ? 'Mark as read' : 'Mark as unread'}
      >
        <Button
          onClick={clickReadHandler}
          size="sm"
          icon
          variant={message.unread ? 'default' : 'text'}
          color="neutral"
          className="ml-auto"
        >
          {message.unread ? <ReadMessageIcon /> : <MessageIcon />}
        </Button>
      </Tooltip>
      <Tooltip
        offset="8"
        variant={message.unread ? 'plain' : 'solid'}
        content="Drag to Reorder or Delete"
      >
        <Box>
          <DragIcon />
        </Box>
      </Tooltip>
    </ListItem>
  );
};

export default MessageButton;
