import React, { type FC } from 'react';
import { update, ref } from 'firebase/database';

import { database } from '../../firebase';
import Main from '../../lib/iCoWeABaseUI/components/layouts/Main/Main';
import Section from '../../lib/iCoWeABaseUI/components/layouts/Section/Section';
import SettingsForm from './SettingsForm';

export const Component: FC = () => (
  <Main placement="full">
    <Section>
      <SettingsForm />
    </Section>
  </Main>
);

export const action = async ({ request }: { request: Request }): Promise<unknown> => {
  const formData = await request.formData();

  const data = {
    firstname: formData.get('firstname')?.toString() ?? '',
    lastname: formData.get('lastname')?.toString() ?? '',
    phone: formData.get('phone')?.toString() ?? '',
    email: formData.get('email')?.toString() ?? '',
    imageURL: formData.get('image-url')?.toString() ?? '',
    dob: formData.get('dob')?.toString() ?? '',
    about: formData.get('about')?.toString() ?? '',
    street: formData.get('street')?.toString() ?? '',
    streetNumber: formData.get('street-number')?.toString() ?? '',
    city: formData.get('city')?.toString() ?? '',
    country: formData.get('country')?.toString() ?? '',
    postalCode: formData.get('postal-code')?.toString() ?? '',
    githubURL: formData.get('github-url')?.toString() ?? '',
    linkedinURL: formData.get('linkedin-url')?.toString() ?? '',
    instagramURL: formData.get('instagram-url')?.toString() ?? '',
    facebookURL: formData.get('facebook-url')?.toString() ?? ''
  };

  await update(ref(database, 'users/0'), data);

  return data;
};

Component.displayName = 'AdminSettingsRoute';
