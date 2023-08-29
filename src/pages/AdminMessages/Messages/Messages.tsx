import React, { type FC, useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import useDatabase from '../../../hooks/useDatabase';
import { database } from '../../../firebase';
import { child, get, ref, type DataSnapshot } from 'firebase/database';
import statusAlert from '../../../store/Slices/statusAlert';
import Section from '../../../lib/simpleComponents/components/layouts/Section';
import Container from '../../../lib/simpleComponents/components/UI/Container';
import MessagesCard from './MessagesCard';

const Messages: FC = () => {
  const deferedMessages = useLoaderData() as { snapchot: Promise<DataSnapshot> };
  const dispatch = useDispatch();

  const { state, resolve } = useDatabase();
  const { error, data } = state;

  useEffect(() => {
    void resolve(deferedMessages.snapchot);
  }, [deferedMessages]);

  useEffect(() => {
    if (error !== null) {
      dispatch(statusAlert.actions.show({ props: { color: 'error', children: 'Fetching messages error' } }));
    }
  }, [error]);

  const refetchMessages = (): void => {
    void resolve(get(child(ref(database), 'messages')));
  };

  return (
    <Section>
      <Container
        variant="column"
        className="px-[16px] md:pl-6 md:pr-[32px]"
      >
        <MessagesCard onRefetch={refetchMessages}>{data as Record<string, Message> | null}</MessagesCard>
      </Container>
    </Section>
  );
};

export default Messages;
