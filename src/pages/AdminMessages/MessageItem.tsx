import React, { type Dispatch, type SetStateAction, type FC } from 'react';

import ListItem from '../../lib/iCoWeABaseUI/components/data-display/ListItem/ListItem';
import Mark from '../../lib/iCoWeABaseUI/components/data-display/Mark/Mark';
import Text from '../../lib/iCoWeABaseUI/components/data-display/Text/Text';
import CloseButton from '../../lib/iCoWeABaseUI/components/inputs/CloseButton/CloseButton';
import Stack from '../../lib/iCoWeABaseUI/components/layouts/Stack/Stack';
import Container from '../../lib/iCoWeABaseUI/components/surfaces/Container/Container';

export type MessageItemProps = {
  setIsReading: Dispatch<SetStateAction<string>>;
  name: string;
  email: string;
  subject: string;
  message: string;
};

const MessageItem: FC<MessageItemProps> = ({ setIsReading, name, email, subject, message }) => (
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

export default MessageItem;
