import React, { type FC } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import AnimatedSection from '../../components/AnimatedSection/AnimatedSection';
import FacebookIcon from '../../components/Icons/FacebookIcon';
import GithubIcon from '../../components/Icons/GithubIcon';
import InstagramIcon from '../../components/Icons/InstagramIcon';
import LinkedInIcon from '../../components/Icons/LinkedInIcon';
import MessageIcon from '../../components/Icons/MessageIcon';
import PhoneIcon from '../../components/Icons/PhoneIcon';
import PointIcon from '../../components/Icons/PointIcon';
import Title from '../../lib/iCoWeABaseUI/components/data-display/Title/Title';
import Flex from '../../lib/iCoWeABaseUI/components/layouts/Flex/Flex';
import Grid from '../../lib/iCoWeABaseUI/components/layouts/Grid/Grid';
import Stack from '../../lib/iCoWeABaseUI/components/layouts/Stack/Stack';
import { selectUser } from '../../store/slices/user';
import { modifyNumber } from '../../utils/utils';
import ContactForm from './ContactForm';

const Contact: FC = () => {
  const user = useSelector(selectUser);

  return (
    <AnimatedSection>
      <Stack gap="xxl">
        <Title
          size="1"
          color="secondary"
        >
          Contact
        </Title>
        <Flex
          align="start"
          gap="xxl"
        >
          <Grid
            align="center"
            rowGap="lg"
            colGap="sm"
            className="grid-cols-[2.5rem_auto]"
          >
            <PhoneIcon spacing="default" />
            <Title color="inherit">{modifyNumber(user.phone)}</Title>
            <PointIcon spacing="default" />
            <Title
              color="inherit"
              className="break-all"
            >{`${user.street} ${user.streetNumber} ${user.city}, ${user.country}`}</Title>
            <MessageIcon spacing="default" />
            <Title
              color="inherit"
              className="break-all"
            >
              {user.email}
            </Title>
            <Flex
              justify="between"
              align="end"
              className="col-span-2"
            >
              <Link
                to={user.githubURL}
                target="_blanc"
              >
                <GithubIcon
                  spacing="default"
                  variant="default"
                  color="primary"
                />
              </Link>
              <Link
                to={user.linkedinURL}
                target="_blanc"
              >
                <LinkedInIcon
                  spacing="default"
                  variant="default"
                  color="primary"
                />
              </Link>
              <Link
                to={user.facebookURL}
                target="_blanc"
              >
                <FacebookIcon
                  spacing="default"
                  variant="default"
                  color="primary"
                />
              </Link>
              <Link
                to={user.instagramURL}
                target="_blanc"
              >
                <InstagramIcon
                  spacing="default"
                  variant="default"
                  color="primary"
                />
              </Link>
            </Flex>
          </Grid>
          <ContactForm />
        </Flex>
      </Stack>
    </AnimatedSection>
  );
};

export default Contact;
