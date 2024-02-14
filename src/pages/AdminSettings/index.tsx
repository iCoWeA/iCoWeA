import { update, ref } from 'firebase/database';
import React, { type FC } from 'react';
import { useSelector } from 'react-redux';
import { Form } from 'react-router-dom';

import Textfield from '../../components/Textfield/Textfield';
import { database } from '../../firebase';
import Title from '../../lib/iCoWeABaseUI/components/data-display/Title/Title';
import Button from '../../lib/iCoWeABaseUI/components/inputs/Button/Button';
import Input from '../../lib/iCoWeABaseUI/components/inputs/Input/Input';
import Textarea from '../../lib/iCoWeABaseUI/components/inputs/Textarea/Textarea';
import Grid from '../../lib/iCoWeABaseUI/components/layouts/Grid/Grid';
import Main from '../../lib/iCoWeABaseUI/components/layouts/Main/Main';
import Section from '../../lib/iCoWeABaseUI/components/layouts/Section/Section';
import Card from '../../lib/iCoWeABaseUI/components/surfaces/Card/Card';
import useForm from '../../lib/iCoWeAHooks/hooks/useForm';
import {
  NAME_PATTERN,
  EMAIL_PATTERN,
  NUMBER_PATTERN
} from '../../lib/iCoWeAUtilsUI/data/constants';
import { selectUser } from '../../store/slices/user';
import { isFormChanged } from '../../utils/utils';

export const Component: FC = () => {
  const user = useSelector(selectUser);

  const {
    state: { inputs, isFormValid },
    change,
    blur,
    revalidForm
  } = useForm({
    firstname: user.firstname,
    lastname: user.lastname,
    phone: user.phone,
    email: user.email,
    image: user.image,
    dob: user.dob,
    about: user.about,
    street: user.street,
    'street-number': user.streetNumber,
    'postal-code': user.postalCode,
    city: user.city,
    country: user.country,
    github: user.github,
    linkedin: user.linkedin,
    instagram: user.instagram,
    facebook: user.facebook
  });

  const { 'street-number': streetNumber, 'postal-code': postalCode, ...rest } = inputs;

  return (
    <Main
      placement="full"
      block
    >
      <Section>
        <Form
          method="post"
          onFocus={(event) => {
            revalidForm(event.target);
          }}
        >
          <Card
            spacing="lg"
            gap="xxl"
            className="max-w-232"
          >
            <Grid
              block
              colGap="xxl"
              rowGap="lg"
              className="grid-cols-2 max-md:grid-cols-1"
            >
              <Title
                size="3"
                className="col-span-2 max-md:col-span-1"
              >
                Basic info
              </Title>
              <Textfield errorText={inputs.firstname.error && 'Invalid firstname'}>
                <Input
                  onChange={(event) => {
                    change(event, 1000);
                  }}
                  onBlur={blur}
                  block
                  variant="default"
                  invalid={inputs.firstname.error}
                  label="Firstname"
                  id="firstname"
                  maxLength={32}
                  name="firstname"
                  pattern={NAME_PATTERN}
                  required
                  value={inputs.firstname.value}
                />
              </Textfield>
              <Textfield errorText={inputs.lastname.error && 'Invalid lastname'}>
                <Input
                  onChange={(event) => {
                    change(event, 1000);
                  }}
                  onBlur={blur}
                  block
                  variant="default"
                  invalid={inputs.lastname.error}
                  label="Lastname"
                  id="lastname"
                  maxLength={32}
                  name="lastname"
                  pattern={NAME_PATTERN}
                  required
                  value={inputs.lastname.value}
                />
              </Textfield>
              <Textfield errorText={inputs.email.error && 'Invalid email'}>
                <Input
                  onChange={(event) => {
                    change(event, 1000);
                  }}
                  onBlur={blur}
                  block
                  variant="default"
                  invalid={inputs.email.error}
                  label="Email"
                  id="email"
                  name="email"
                  pattern={EMAIL_PATTERN}
                  required
                  value={inputs.email.value}
                />
              </Textfield>
              <Textfield errorText={inputs.phone.error && 'Invalid phone'}>
                <Input
                  onChange={(event) => {
                    change(event, 1000);
                  }}
                  onBlur={blur}
                  block
                  variant="default"
                  invalid={inputs.phone.error}
                  label="Phone"
                  id="phone"
                  maxLength={10}
                  name="phone"
                  pattern={NUMBER_PATTERN}
                  required
                  value={inputs.phone.value}
                />
              </Textfield>
              <Textfield errorText={inputs.image.error && 'Invalid image'}>
                <Input
                  onChange={(event) => {
                    change(event, 1000);
                  }}
                  onBlur={blur}
                  block
                  variant="default"
                  invalid={inputs.image.error}
                  label="Image"
                  id="image"
                  name="image"
                  required
                  value={inputs.image.value}
                />
              </Textfield>
              <Textfield errorText={inputs.dob.error && 'Invalid date of birth'}>
                <Input
                  onChange={(event) => {
                    change(event, 1000);
                  }}
                  onBlur={blur}
                  block
                  variant="default"
                  invalid={inputs.dob.error}
                  label="Date of birth"
                  id="dob"
                  name="dob"
                  required
                  type="date"
                  value={inputs.dob.value}
                />
              </Textfield>
              <Textfield
                errorText={inputs.about.error && 'Invalid about me'}
                className="col-span-2 max-md:col-span-1"
              >
                <Textarea
                  onChange={(event) => {
                    change(event, 1000);
                  }}
                  onBlur={blur}
                  block
                  variant="default"
                  invalid={inputs.about.error}
                  label="About me"
                  id="about"
                  maxLength={500}
                  name="about"
                  required
                  value={inputs.about.value}
                />
              </Textfield>
            </Grid>
            <Grid
              block
              colGap="xxl"
              rowGap="lg"
              className="grid-cols-2 max-md:grid-cols-1"
            >
              <Title
                size="3"
                className="col-span-2 max-md:col-span-1"
              >
                Address
              </Title>
              <Textfield errorText={inputs.street.error && 'Invalid street'}>
                <Input
                  onChange={(event) => {
                    change(event, 1000);
                  }}
                  onBlur={blur}
                  block
                  variant="default"
                  invalid={inputs.street.error}
                  label="Street"
                  id="street"
                  name="street"
                  pattern={NAME_PATTERN}
                  required
                  value={inputs.street.value}
                />
              </Textfield>
              <Textfield errorText={inputs['street-number'].error && 'Invalid street number'}>
                <Input
                  onChange={(event) => {
                    change(event, 1000);
                  }}
                  onBlur={blur}
                  block
                  variant="default"
                  invalid={inputs['street-number'].error}
                  label="Street number"
                  id="street-number"
                  maxLength={5}
                  name="street-number"
                  pattern={NUMBER_PATTERN}
                  required
                  value={inputs['street-number'].value}
                />
              </Textfield>
              <Textfield errorText={inputs.city.error && 'Invalid city'}>
                <Input
                  onChange={(event) => {
                    change(event, 1000);
                  }}
                  onBlur={blur}
                  block
                  variant="default"
                  invalid={inputs.city.error}
                  label="City"
                  id="city"
                  name="city"
                  pattern={NAME_PATTERN}
                  required
                  value={inputs.city.value}
                />
              </Textfield>
              <Textfield errorText={inputs.country.error && 'Invalid country'}>
                <Input
                  onChange={(event) => {
                    change(event, 1000);
                  }}
                  onBlur={blur}
                  block
                  variant="default"
                  invalid={inputs.country.error}
                  label="Country"
                  id="country"
                  name="country"
                  pattern={NAME_PATTERN}
                  required
                  value={inputs.country.value}
                />
              </Textfield>
              <Textfield errorText={inputs['postal-code'].error && 'Invalid postal-code'}>
                <Input
                  onChange={(event) => {
                    change(event, 1000);
                  }}
                  onBlur={blur}
                  block
                  variant="default"
                  invalid={inputs['postal-code'].error}
                  label="Postal code"
                  id="postal-code"
                  maxLength={10}
                  name="postal-code"
                  required
                  value={inputs['postal-code'].value}
                />
              </Textfield>
            </Grid>
            <Grid
              block
              colGap="xxl"
              rowGap="lg"
              className="grid-cols-2 max-md:grid-cols-1"
            >
              <Title
                size="3"
                className="col-span-2 max-md:col-span-1"
              >
                Social networks
              </Title>
              <Textfield errorText={inputs.github.error && 'Invalid github'}>
                <Input
                  onChange={(event) => {
                    change(event, 1000);
                  }}
                  onBlur={blur}
                  block
                  variant="default"
                  invalid={inputs.github.error}
                  label="github"
                  id="github"
                  name="github"
                  required
                  value={inputs.github.value}
                />
              </Textfield>
              <Textfield errorText={inputs.linkedin.error && 'Invalid linkedIn'}>
                <Input
                  onChange={(event) => {
                    change(event, 1000);
                  }}
                  onBlur={blur}
                  block
                  variant="default"
                  invalid={inputs.linkedin.error}
                  label="LinkedIn"
                  id="linkedin"
                  name="linkedin"
                  required
                  value={inputs.linkedin.value}
                />
              </Textfield>
              <Textfield errorText={inputs.facebook.error && 'Invalid facebook'}>
                <Input
                  onChange={(event) => {
                    change(event, 1000);
                  }}
                  onBlur={blur}
                  block
                  variant="default"
                  invalid={inputs.facebook.error}
                  label="Facebook"
                  id="facebook"
                  name="facebook"
                  required
                  value={inputs.facebook.value}
                />
              </Textfield>
              <Textfield errorText={inputs.instagram.error && 'Invalid instagram'}>
                <Input
                  onChange={(event) => {
                    change(event, 1000);
                  }}
                  onBlur={blur}
                  block
                  variant="default"
                  invalid={inputs.instagram.error}
                  label="instagram"
                  id="instagram"
                  name="instagram"
                  required
                  value={inputs.instagram.value}
                />
              </Textfield>
            </Grid>
            <Button
              size="lg"
              disabled={!isFormValid || !isFormChanged(user, { streetNumber, postalCode, ...rest })}
              block
              type="submit"
            >
              Save
            </Button>
          </Card>
        </Form>
      </Section>
    </Main>
  );
};

export const action = async ({ request }: { request: Request }): Promise<unknown> => {
  const formData = await request.formData();

  const data = {
    firstname: formData.get('firstname')?.toString() ?? '',
    lastname: formData.get('lastname')?.toString() ?? '',
    phone: formData.get('phone')?.toString() ?? '',
    email: formData.get('email')?.toString() ?? '',
    image: formData.get('image')?.toString() ?? '',
    dob: formData.get('dob')?.toString() ?? '',
    about: formData.get('about')?.toString() ?? '',
    street: formData.get('street')?.toString() ?? '',
    streetNumber: formData.get('street-number')?.toString() ?? '',
    city: formData.get('city')?.toString() ?? '',
    country: formData.get('country')?.toString() ?? '',
    postalCode: formData.get('postal-code')?.toString() ?? '',
    github: formData.get('github')?.toString() ?? '',
    linkedin: formData.get('linkedin')?.toString() ?? '',
    instagram: formData.get('instagram')?.toString() ?? '',
    facebook: formData.get('facebook')?.toString() ?? ''
  };

  await update(ref(database, 'users/0'), data);

  return data;
};

Component.displayName = 'AdminSettingsRoute';
