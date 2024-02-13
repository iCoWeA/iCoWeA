import React, { type FC } from 'react';

import ListItem from '../../../lib/iCoWeABaseUI/components/data-display/ListItem/ListItem';
import Navigation from '../../../lib/iCoWeABaseUI/components/layouts/Navigation/Navigation';
import Navlink from '../../../lib/iCoWeARouterUI/components/Navlink/Navlink';

const DefaultNavigation: FC = () => (
  <Navigation>
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
);

export default DefaultNavigation;
