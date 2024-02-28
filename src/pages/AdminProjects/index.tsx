import React, { type FC } from 'react';
import { update, ref, remove, push, child, set } from 'firebase/database';

import { database } from '../../firebase';
import Main from '../../lib/iCoWeABaseUI/components/layouts/Main/Main';
import Projects from './Projects';

export const Component: FC = () => (
  <Main
    placement="full"
    block
  >
    <Projects />
  </Main>
);

export const action = async ({ request }: { request: Request }): Promise<unknown> => {
  const formData = await request.formData();

  const add = formData.get('add')?.toString();
  const edit = formData.get('edit')?.toString();
  const reorder = formData.get('reorder')?.toString();
  const del = formData.get('del')?.toString();

  const data: Obj = {
    name: formData.get('name')?.toString() ?? '',
    url: formData.get('url')?.toString() ?? '',
    imageURL: formData.get('image-url')?.toString() ?? '',
    lastModificationDate: new Date().toISOString()
  };

  if (add) {
    data.order = add;
    data.creationDate = new Date().toISOString();

    const key = push(child(ref(database), 'projects')).key;

    if (key === null) {
      return null;
    }

    await set(ref(database, `projects/${key}`), data);

    return data;
  }

  if (edit) {
    await update(ref(database, `projects/${edit}`), data);

    return data;
  }

  if (reorder) {
    const data = JSON.parse(reorder);

    await update(ref(database, 'projects'), data);

    return data;
  }

  if (del) {
    const data: Obj = JSON.parse(del);

    await remove(ref(database, `projects/${data.delete}`));

    delete data.delete;

    await update(ref(database, 'projects'), data);

    return data;
  }

  return null;
};

Component.displayName = 'AdminProjectsRoute';
