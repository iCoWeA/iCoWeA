import React, { type FC, Suspense, type ReactNode, useRef } from 'react';
import { Await, useLoaderData } from 'react-router-dom';
import { type DataSnapshot } from 'firebase/database';
import Section from '../../../lib/simpleComponents/components/layouts/Section';
import Container from '../../../lib/simpleComponents/components/UI/Container';
import MessagesCard from './MessagesCard';

const Messages: FC = () => {
  const deferedMessages = useLoaderData() as { snapchot: Promise<DataSnapshot> };

  const data = useRef<Record<string, Message> | null>(null);

  /* Set fallback props */
  const fallbackNode = <MessagesCard>{data.current}</MessagesCard>;

  /* Set children props */
  const resolvedNode = (resolvedData: any): ReactNode => {
    data.current = resolvedData;
    return <MessagesCard>{resolvedData}</MessagesCard>;
  };

  return (
    <Section>
      <Container
        variant="column"
        className="px-[16px] md:pl-6 md:pr-[32px]"
      >
        <Suspense fallback={fallbackNode}>
          <Await resolve={deferedMessages.snapchot}>{resolvedNode}</Await>
        </Suspense>
      </Container>
    </Section>
  );
};

export default Messages;
