import React, { type FC, useState } from 'react';
import { useSelector } from 'react-redux';

import SortIcon from '../../components/Icons/SortIcon';
import List from '../../lib/iCoWeABaseUI/components/data-display/List/List';
import Title from '../../lib/iCoWeABaseUI/components/data-display/Title/Title';
import ToggleButton from '../../lib/iCoWeABaseUI/components/inputs/ToggleButton/ToggleButton';
import Flex from '../../lib/iCoWeABaseUI/components/layouts/Flex/Flex';
import Section from '../../lib/iCoWeABaseUI/components/layouts/Section/Section';
import Card from '../../lib/iCoWeABaseUI/components/surfaces/Card/Card';
import { selectMessages } from '../../store/slices/messages';
import MessageButton from './MessageButton';
import MessageItem from './MessageItem';
import TrashArea from './TrashArea';

const Messages: FC = () => {
  const messages = useSelector(selectMessages);

  const [isDraged, setIsDraged] = useState(false);
  const [isReading, setIsReading] = useState('');
  const [descendingSort, setDescendingSort] = useState(true);

  const nodes = Object.keys(messages)
    .sort((a, b) =>
      descendingSort
        ? new Date(messages[a].creationDate).getMilliseconds() -
          new Date(messages[b].creationDate).getMilliseconds()
        : new Date(messages[b].creationDate).getMilliseconds() -
          new Date(messages[a].creationDate).getMilliseconds()
    )
    .map((key) =>
      isReading === key
        ? (
        <MessageItem
          key={key}
          setIsReading={setIsReading}
          name={messages[key].name}
          email={messages[key].email}
          subject={messages[key].subject}
          message={messages[key].message}
        />
          )
        : (
        <MessageButton
          key={key}
          setIsDraged={setIsDraged}
          setIsReading={setIsReading}
          isReading={isReading}
          id={key}
          subject={messages[key].subject}
          unread={messages[key].unread}
          draggable={!isDraged && isReading === ''}
        />
          )
    );

  return (
    <Section>
      <Card
        spacing="lg"
        gap="lg"
      >
        <Flex>
          <ToggleButton
            onClick={() => setDescendingSort((sort) => !sort)}
            checked={descendingSort}
            variant="solid"
            leftDecorator={<SortIcon className={descendingSort ? '' : 'rotate-180'} />}
          >
            {descendingSort ? 'Newest date' : 'Latest date'}
          </ToggleButton>
        </Flex>
        {nodes.length === 0 && (
          <Title
            size="3"
            color="primary"
            align="center"
          >
            No messages
          </Title>
        )}
        {nodes.length !== 0 && <List gap="md">{nodes}</List>}
        {isDraged && <TrashArea setIsDraged={setIsDraged} />}
      </Card>
    </Section>
  );
};

export default Messages;
