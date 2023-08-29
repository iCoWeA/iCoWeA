import React, { type FC, Suspense, type ReactNode, useRef } from 'react';
import { Await, useLoaderData } from 'react-router-dom';
import { type DataSnapshot } from 'firebase/database';
import Section from '../../../lib/simpleComponents/components/layouts/Section';
import Container from '../../../lib/simpleComponents/components/UI/Container';
import MessagesCard from './MessagesCard';
import MessagesError from './MessagesError';

const Messages: FC = () => {
  const deferedMessages = (useLoaderData() as { snapchot: Promise<DataSnapshot> }).snapchot;

  const data = useRef<Record<string, Message> | null>(null);

  /* Set fallback props */
  const fallbackNode = <MessagesCard>{data.current}</MessagesCard>;

  /* Set children props */
  const resolvedNode = (resolvedData: DataSnapshot): ReactNode => {
    if (resolvedData.exists()) {
      data.current = resolvedData.val();
    } else {
      data.current = {};
    }

    return <MessagesCard>{data.current}</MessagesCard>;
  };

  return (
    <Section>
      <Container
        variant="column"
        className="px-[16px] md:pl-6 md:pr-[32px]"
      >
        <Suspense fallback={fallbackNode}>
          <Await
            resolve={deferedMessages}
            errorElement={<MessagesError />}
          >
            {resolvedNode}
          </Await>
        </Suspense>
      </Container>
    </Section>
  );
};

export default Messages;
