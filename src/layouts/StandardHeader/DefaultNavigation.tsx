import React, { type FC } from 'react';

import Navlink from '../../components/NavlinkButton/NavlinkButton';
import ThemeButton from '../../components/ThemeButton.tsx/ThemeButton';
import ListItem from '../../lib/iCoWeABaseUI/components/data-display/ListItem/ListItem';
import Navigation from '../../lib/iCoWeABaseUI/components/layouts/Navigation/Navigation';

const DefaultNavigation: FC = () => (
  <>
    <Navigation className="ml-auto">
      <ListItem>
        <Navlink
          to="/"
          activeVariant="solid"
          activeColor="secondary"
        >
          Home
        </Navlink>
      </ListItem>
      <ListItem>
        <Navlink
          to="projects"
          activeVariant="solid"
          activeColor="secondary"
        >
          Projects
        </Navlink>
      </ListItem>
      <ListItem>
        <Navlink
          to="about"
          activeVariant="solid"
          activeColor="secondary"
        >
          About
        </Navlink>
      </ListItem>
      <ListItem>
        <Navlink
          to="contact"
          activeVariant="solid"
          activeColor="secondary"
        >
          Contact
        </Navlink>
      </ListItem>
    </Navigation>
    <ThemeButton
      icon
      radius="rounded"
    />
  </>
);

export default DefaultNavigation;
