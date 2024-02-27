import React, { type FC } from 'react';
import { update, ref, remove } from 'firebase/database';

import { database } from '../../firebase';
import Main from '../../lib/iCoWeABaseUI/components/layouts/Main/Main';
import Messages from './Messages';

export const Component: FC = () => (
  <Main
    placement="full"
    block
  >
    <Messages />
  </Main>
);

export const action = async ({ request }: { request: Request }): Promise<unknown> => {
  const formData = await request.formData();

  const read = formData.get('read')?.toString();
  const unread = formData.get('unread')?.toString();
  const del = formData.get('del')?.toString();

  if (read) {
    const data = {
      unread: false,
      lastModificationDate: new Date().toISOString()
    };

    await update(ref(database, `messages/${read}`), data);

    return data;
  }

  if (unread) {
    const data = {
      unread: true,
      lastModificationDate: new Date().toISOString()
    };

    await update(ref(database, `messages/${unread}`), data);

    return data;
  }

  if (del) {
    await remove(ref(database, `messages/${del}`));

    return {};
  }

  return null;
};

Component.displayName = 'AdminProjectsRoute';
