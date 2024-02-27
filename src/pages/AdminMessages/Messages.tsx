import React, { type FC, useState, useMemo } from 'react';
import { useSelector } from 'react-redux';

import List from '../../lib/iCoWeABaseUI/components/data-display/List/List';
import Title from '../../lib/iCoWeABaseUI/components/data-display/Title/Title';
import Section from '../../lib/iCoWeABaseUI/components/layouts/Section/Section';
import { selectMessages } from '../../store/slices/messages';
import Controls from './Controls';
import MessageButton from './Message';
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
            ? new Date(messages[b].creationDate).getTime() -
              new Date(messages[a].creationDate).getTime()
            : new Date(messages[a].creationDate).getTime() -
              new Date(messages[b].creationDate).getTime()
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
      <Controls
        setDescendingSort={setDescendingSort}
        descendingSort={descendingSort}
      />
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
