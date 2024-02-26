import React, { type FC } from 'react';
import { push, child, ref, set } from 'firebase/database';

import { database } from '../../firebase';
import Layout from '../../lib/iCoWeABaseUI/components/layouts/Layout/Layout';
import Main from '../../lib/iCoWeABaseUI/components/layouts/Main/Main';
import Contact from './Contact';

export const Component: FC = () => (
  <Layout>
    <Main>
      <Contact />
    </Main>
  </Layout>
);

export const action = async ({ request }: { request: Request }): Promise<unknown> => {
  const formData = await request.formData();

  const data = {
    name: formData.get('name')?.toString() ?? '',
    email: formData.get('email')?.toString() ?? '',
    subject: formData.get('subject')?.toString() ?? '',
    message: formData.get('message')?.toString() ?? '',
    unread: true,
    creationDate: new Date().toISOString(),
    lastModificationDate: new Date().toISOString()
  };

  const key = push(child(ref(database), 'messages')).key;

  if (key === null) {
    return null;
  }

  await set(ref(database, `messages/${key}`), data);

  return data;
};

Component.displayName = 'ContactRoute';
