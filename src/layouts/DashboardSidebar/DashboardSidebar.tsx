import React, { type FC } from 'react';

import HomeIcon from '../../components/Icons/HomeIcon';
import MessageIcon from '../../components/Icons/MessageIcon';
import ProjectIcon from '../../components/Icons/ProjectIcon';
import SettingsIcon from '../../components/Icons/SettingsIcon';
import LogoutButton from '../../components/LogoutButton/LogoutButton';
import ThemeButton from '../../components/ThemeButton.tsx/ThemeButton';
import ListItem from '../../lib/iCoWeABaseUI/components/data-display/ListItem/ListItem';
import Navigation from '../../lib/iCoWeABaseUI/components/layouts/Navigation/Navigation';
import Sidebar from '../../lib/iCoWeABaseUI/components/layouts/Sidebar/Sidebar';
import Stack from '../../lib/iCoWeABaseUI/components/layouts/Stack/Stack';
import ListNavlink from '../../lib/iCoWeARouterUI/components/ListNavlink/ListNavlink';

const DashboardSidebar: FC = () => (
  <Sidebar>
    <Stack
      block
      spacing="lg"
      variant="plain"
      color="neutral"
      gap="md"
    >
      <Navigation
        vertical
        block
      >
        <ListItem>
          <ListNavlink
            to=""
            end
            activeVariant="solid"
            leftDecorator={<HomeIcon />}
          >
            Home
          </ListNavlink>
        </ListItem>
        <ListItem>
          <ListNavlink
            to="projects"
            activeVariant="solid"
            leftDecorator={<ProjectIcon />}
          >
            Projects
          </ListNavlink>
        </ListItem>
        <ListItem>
          <ListNavlink
            to="messages"
            activeVariant="solid"
            leftDecorator={<MessageIcon />}
          >
            Messages
          </ListNavlink>
        </ListItem>
        <ListItem>
          <ListNavlink
            to="settings"
            activeVariant="solid"
            leftDecorator={<SettingsIcon />}
          >
            Settings
          </ListNavlink>
        </ListItem>
      </Navigation>
      <ThemeButton
        block
        className="mt-auto"
      />
      <LogoutButton />
    </Stack>
  </Sidebar>
);

export default DashboardSidebar;
