import React, { type ChangeEvent, type FC, type FocusEvent, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { Form } from 'react-router-dom';

import InputControl from '../../components/InputControl/InputControl';
import SubmitButton from '../../components/SubmitButton/SubmitButton';
import Textfield from '../../components/Textfield/Textfield';
import Title from '../../lib/iCoWeABaseUI/components/data-display/Title/Title';
import Textarea from '../../lib/iCoWeABaseUI/components/inputs/Textarea/Textarea';
import Grid from '../../lib/iCoWeABaseUI/components/layouts/Grid/Grid';
import Card from '../../lib/iCoWeABaseUI/components/surfaces/Card/Card';
import useForm from '../../lib/iCoWeAHooks/hooks/useForm';
import {
  NAME_PATTERN,
  EMAIL_PATTERN,
  PHONE_PATTERN,
  NUMBER_PATTERN
} from '../../lib/iCoWeAUtilsUI/data/constants';
import { selectUser } from '../../store/slices/user';
import { isFormChanged } from '../../utils/utils';

const SettingsForm: FC = () => {
  const user = useSelector(selectUser);

  const initialValues = {
    firstname: user.firstname,
    lastname: user.lastname,
    phone: user.phone,
    email: user.email,
    'image-url': user.imageURL,
    dob: user.dob,
    about: user.about,
    street: user.street,
    'street-number': user.streetNumber,
    'postal-code': user.postalCode,
    city: user.city,
    country: user.country,
    'github-url': user.githubURL,
    'linkedin-url': user.linkedinURL,
    'instagram-url': user.instagramURL,
    'facebook-url': user.facebookURL
  };

  const {
    state: { inputs, isFormValid },
    change,
    blur,
    revalidForm
  } = useForm(initialValues);

  /* -- Set event handlers --- */
  const changeHandler = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => change(event, 1000),
    []
  );

  const changeTextareaHandler = useCallback(
    (event: ChangeEvent<HTMLTextAreaElement>) => change(event, 1000),
    []
  );

  const focusHandler = useCallback(
    (event: FocusEvent<HTMLFormElement>) => revalidForm(event.target),
    []
  );

  return (
    <Form
      method="post"
      onFocus={focusHandler}
    >
      <Card
        spacing="lg"
        gap="xxl"
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
          <InputControl errorText={inputs.firstname.error && 'Invalid firstname'}>
            <Textfield
              onChange={changeHandler}
              onBlur={blur}
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
          </InputControl>
          <InputControl errorText={inputs.lastname.error && 'Invalid lastname'}>
            <Textfield
              onChange={changeHandler}
              onBlur={blur}
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
          </InputControl>
          <InputControl errorText={inputs.email.error && 'Invalid email'}>
            <Textfield
              onChange={changeHandler}
              onBlur={blur}
              variant="default"
              invalid={inputs.email.error}
              label="Email"
              id="email"
              name="email"
              pattern={EMAIL_PATTERN}
              required
              value={inputs.email.value}
            />
          </InputControl>
          <InputControl errorText={inputs.phone.error && 'Invalid phone'}>
            <Textfield
              onChange={changeHandler}
              onBlur={blur}
              variant="default"
              invalid={inputs.phone.error}
              label="Phone"
              id="phone"
              maxLength={13}
              name="phone"
              pattern={PHONE_PATTERN}
              required
              value={inputs.phone.value}
            />
          </InputControl>
          <InputControl errorText={inputs['image-url'].error && 'Invalid image URL'}>
            <Textfield
              onChange={changeHandler}
              onBlur={blur}
              variant="default"
              invalid={inputs['image-url'].error}
              label="Image URL"
              id="image-url"
              name="image-url"
              required
              value={inputs['image-url'].value}
            />
          </InputControl>
          <InputControl errorText={inputs.dob.error && 'Invalid date of birth'}>
            <Textfield
              onChange={changeHandler}
              onBlur={blur}
              variant="default"
              invalid={inputs.dob.error}
              label="Date of birth"
              id="dob"
              name="dob"
              required
              type="date"
              value={inputs.dob.value}
            />
          </InputControl>
          <InputControl
            errorText={inputs.about.error && 'Invalid about me'}
            className="col-span-2 max-md:col-span-1"
          >
            <Textarea
              onChange={changeTextareaHandler}
              onBlur={blur}
              variant="default"
              block
              invalid={inputs.about.error}
              label="About me"
              id="about"
              maxLength={500}
              name="about"
              required
              value={inputs.about.value}
            />
          </InputControl>
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
          <InputControl errorText={inputs.street.error && 'Invalid street'}>
            <Textfield
              onChange={changeHandler}
              onBlur={blur}
              variant="default"
              invalid={inputs.street.error}
              label="Street"
              id="street"
              name="street"
              pattern={NAME_PATTERN}
              required
              value={inputs.street.value}
            />
          </InputControl>
          <InputControl errorText={inputs['street-number'].error && 'Invalid street number'}>
            <Textfield
              onChange={changeHandler}
              onBlur={blur}
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
          </InputControl>
          <InputControl errorText={inputs.city.error && 'Invalid city'}>
            <Textfield
              onChange={changeHandler}
              onBlur={blur}
              variant="default"
              invalid={inputs.city.error}
              label="City"
              id="city"
              name="city"
              pattern={NAME_PATTERN}
              required
              value={inputs.city.value}
            />
          </InputControl>
          <InputControl errorText={inputs.country.error && 'Invalid country'}>
            <Textfield
              onChange={changeHandler}
              onBlur={blur}
              variant="default"
              invalid={inputs.country.error}
              label="Country"
              id="country"
              name="country"
              pattern={NAME_PATTERN}
              required
              value={inputs.country.value}
            />
          </InputControl>
          <InputControl errorText={inputs['postal-code'].error && 'Invalid postal-code'}>
            <Textfield
              onChange={changeHandler}
              onBlur={blur}
              variant="default"
              invalid={inputs['postal-code'].error}
              label="Postal code"
              id="postal-code"
              maxLength={10}
              name="postal-code"
              required
              value={inputs['postal-code'].value}
            />
          </InputControl>
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
          <InputControl errorText={inputs['github-url'].error && 'Invalid github'}>
            <Textfield
              onChange={changeHandler}
              onBlur={blur}
              variant="default"
              invalid={inputs['github-url'].error}
              label="Github URL"
              id="github-url"
              name="github-url"
              required
              value={inputs['github-url'].value}
            />
          </InputControl>
          <InputControl errorText={inputs['linkedin-url'].error && 'Invalid linkedIn'}>
            <Textfield
              onChange={changeHandler}
              onBlur={blur}
              variant="default"
              invalid={inputs['linkedin-url'].error}
              label="LinkedIn URL"
              id="linkedin-url"
              name="linkedin-url"
              required
              value={inputs['linkedin-url'].value}
            />
          </InputControl>
          <InputControl errorText={inputs['facebook-url'].error && 'Invalid facebook'}>
            <Textfield
              onChange={changeHandler}
              onBlur={blur}
              variant="default"
              invalid={inputs['facebook-url'].error}
              label="Facebook URL"
              id="facebook-url"
              name="facebook-url"
              required
              value={inputs['facebook-url'].value}
            />
          </InputControl>
          <InputControl errorText={inputs['instagram-url'].error && 'Invalid instagram'}>
            <Textfield
              onChange={changeHandler}
              onBlur={blur}
              variant="default"
              invalid={inputs['instagram-url'].error}
              label="Instagram URL"
              id="instagram-url"
              name="instagram-url"
              required
              value={inputs['instagram-url'].value}
            />
          </InputControl>
        </Grid>
        <SubmitButton
          size="lg"
          disabled={!isFormValid || !isFormChanged(initialValues, inputs)}
        >
          Save
        </SubmitButton>
      </Card>
    </Form>
  );
};

export default SettingsForm;
