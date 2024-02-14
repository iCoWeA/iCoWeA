import React, { type FC } from 'react';
import { Form } from 'react-router-dom';

// import Textfield from '../../components/Textfield/Textfield';
// import { NAME_PATTERN } from '../../data/constants';
import Title from '../../lib/iCoWeABaseUI/components/data-display/Title/Title';
import Button from '../../lib/iCoWeABaseUI/components/inputs/Button/Button';
// import Label from '../../lib/iCoWeABaseUI/components/inputs/Label/Label';
// import Flex from '../../lib/iCoWeABaseUI/components/layouts/Flex/Flex';
import Section from '../../lib/iCoWeABaseUI/components/layouts/Section/Section';
// import Stack from '../../lib/iCoWeABaseUI/components/layouts/Stack/Stack';
import Card from '../../lib/iCoWeABaseUI/components/surfaces/Card/Card';
import useForm from '../../lib/iCoWeAHooks/hooks/useForm';
// import { EMAIL_PATTERN, NUMBER_PATTERN } from '../../lib/iCoWeAUtilsUI/data/constants';
import Main from '../../lib/iCoWeABaseUI/components/layouts/Main/Main';
import Textfield from '../../components/Textfield/Textfield';
import Input from '../../lib/iCoWeABaseUI/components/inputs/Input/Input';
import { NAME_PATTERN } from '../../data/constants';
import { EMAIL_PATTERN } from '../../lib/iCoWeAUtilsUI/data/constants';
import Grid from '../../lib/iCoWeABaseUI/components/layouts/Grid/Grid';
import Stack from '../../lib/iCoWeABaseUI/components/layouts/Stack/Stack';
import { useSelector } from 'react-redux';
import { selectUser } from '../../store/slices/user';

export const Component: FC = () => {
  const user = useSelector(selectUser);

  const {
    state: { inputs, isFormValid },
    change,
    blur,
    resetForm
  } = useForm({
    firstname: user.firstname,
    lastname: user.lastname,
    phone: user.phone,
    email: user.email,
    street: user.street,
    'postal-code': user.postalCode,
    city: user.city,
    country: user.country,
    github: user.github,
    linkedin: user.linkedin,
    instagram: user.instagram,
    facebook: user.facebook
  });

  return (
    <Main
      placement="full"
      block
    >
      <Section>
        <Card spacing="lg">
          <Form
            method="post"
            onSubmit={resetForm}
          >
            <Stack
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
                    name="phone"
                    required
                    value={inputs.phone.value}
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
                    required
                    value={inputs.street.value}
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
                disabled={!isFormValid}
                block
                type="submit"
              >
                Save
              </Button>
            </Stack>
          </Form>
        </Card>
      </Section>
    </Main>
  );
};

Component.displayName = 'AdminHomeRoute';
