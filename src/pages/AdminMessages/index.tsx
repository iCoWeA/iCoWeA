import React, { type FC } from 'react';
import { remove, ref } from 'firebase/database';

import { database } from '../../firebase';
import Main from '../../lib/iCoWeABaseUI/components/layouts/Main/Main';
import Messages from './Messages';

export const Component: FC = () => (
  <Main placement="full">
    <Messages />
  </Main>
);

export const action = async ({ request }: { request: Request }): Promise<unknown> => {
  const formData = await request.formData();

  const del = formData.get('del')?.toString();

  if (!del) {
    throw new Error('No del');
  }

  await remove(ref(database, `projects/${del}`));

  return del;
};

Component.displayName = 'AdminProjectsRoute';
