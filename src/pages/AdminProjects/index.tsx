import React, { type FC } from 'react';
import { update, ref, remove, push, child, set } from 'firebase/database';

import { database } from '../../firebase';
import Main from '../../lib/iCoWeABaseUI/components/layouts/Main/Main';
import Projects from '../Projects/Projects';

export const Component: FC = () => (
  <Main placement="full">
    <Projects />
  </Main>
);

export const action = async ({ request }: { request: Request }): Promise<unknown> => {
  const formData = await request.formData();

  const edit = formData.get('edit')?.toString();
  const reorder = formData.get('reorder')?.toString();
  const del = formData.get('del')?.toString();

  const data: Obj = {
    name: formData.get('name')?.toString() ?? '',
    url: formData.get('url')?.toString() ?? '',
    imageURL: formData.get('image-url')?.toString() ?? '',
    lastModificationDate: new Date().toISOString()
  };

  if (edit) {
    await update(ref(database, `projects/${edit}`), data);

    return data;
  }

  if (reorder) {
    const data = JSON.parse(reorder);

    await update(ref(database, 'tasks'), data);

    return data;
  }

  if (del) {
    await remove(ref(database, `projects/${del}`));

    return {};
  }

  data.creationDate = new Date().toISOString();

  const key = push(child(ref(database), 'projects')).key;

  if (key === null) {
    return null;
  }

  await set(ref(database, `projects/${key}`), data);

  return data;
};

Component.displayName = 'AdminProjectsRoute';
