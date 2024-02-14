import React, { type FC } from 'react';
import { push, child, ref, set } from 'firebase/database';

import { database } from '../../firebase';
import Main from '../../lib/iCoWeABaseUI/components/layouts/Main/Main';
import AddProject from './AddProject';
import Projects from './Projects/Projects';

export const Component: FC = () => (
  <Main placement="full">
    <AddProject />
    <Projects />
  </Main>
);

export const action = async ({ request }: { request: Request }): Promise<unknown> => {
  const formData = await request.formData();

  const data = {
    name: formData.get('name')?.toString() ?? '',
    url: formData.get('url')?.toString() ?? '',
    imageURL: formData.get('image-url')?.toString() ?? ''
  };

  const key = push(child(ref(database), 'projects')).key;

  if (key === null) {
    throw new Error('No key !');
  }

  await set(ref(database, `projects/${key}`), data);

  return data;
};

Component.displayName = 'AdminProjectsRoute';
