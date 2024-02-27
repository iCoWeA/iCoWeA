import React, { type FC, useState, useMemo } from 'react';
import { useSelector } from 'react-redux';

import SortIcon from '../../components/Icons/SortIcon';
import List from '../../lib/iCoWeABaseUI/components/data-display/List/List';
import Title from '../../lib/iCoWeABaseUI/components/data-display/Title/Title';
import ToggleButton from '../../lib/iCoWeABaseUI/components/inputs/ToggleButton/ToggleButton';
import Flex from '../../lib/iCoWeABaseUI/components/layouts/Flex/Flex';
import Section from '../../lib/iCoWeABaseUI/components/layouts/Section/Section';
import { selectMessages } from '../../store/slices/messages';
import MessageButton from './MessageButton';
import TrashArea from './TrashArea';

const Messages: FC = () => {
  const messages = useSelector(selectMessages);

  const [draging, setDraging] = useState('');
  const [descendingSort, setDescendingSort] = useState(true);

  const nodes = useMemo(
    () =>
      Object.keys(messages)
        .sort((a, b) =>
          descendingSort
            ? new Date(messages[a].creationDate).getMilliseconds() -
              new Date(messages[b].creationDate).getMilliseconds()
            : new Date(messages[b].creationDate).getMilliseconds() -
              new Date(messages[a].creationDate).getMilliseconds()
        )
        .map((key) => (
          <MessageButton
            key={key}
            setDraging={setDraging}
            draging={draging}
            id={key}
            message={messages[key]}
          />
        )),
    [messages, descendingSort, draging]
  );

  return (
    <Section>
      <Title
        size="1"
        color="primary"
        align="center"
        className="mb-12"
      >
        Messages
      </Title>
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
          size="4"
          align="center"
          className="mt-8"
        >
          No messages
        </Title>
      )}
      {nodes.length !== 0 && (
        <List
          gap="sm"
          className="mt-8"
        >
          {nodes}
        </List>
      )}
      <TrashArea
        setDraging={setDraging}
        draging={draging}
      />
    </Section>
  );
};

export default Messages;
