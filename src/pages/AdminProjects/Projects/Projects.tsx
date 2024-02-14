import React, { type FC, useState } from 'react';
import { useSelector } from 'react-redux';

import List from '../../../lib/iCoWeABaseUI/components/data-display/List/List';
import Title from '../../../lib/iCoWeABaseUI/components/data-display/Title/Title';
import Section from '../../../lib/iCoWeABaseUI/components/layouts/Section/Section';
import Card from '../../../lib/iCoWeABaseUI/components/surfaces/Card/Card';
import { selectProjects } from '../../../store/slices/projects';
import ProjectListButton from './ProjectListButton';
import TrashArea from './TrashArea';

const Projects: FC = () => {
  const projects = useSelector(selectProjects);

  const [isDraged, setIsDraged] = useState(false);
  const [isEditing, setIsEditing] = useState('');

  const nodes = Object.keys(projects).map((key) => (
    <ProjectListButton
      key={key}
      setIsDraged={setIsDraged}
      setIsEditing={setIsEditing}
      isEditing={isEditing}
      id={key}
      name={projects[key].name}
      url={projects[key].url}
      imageURL={projects[key].imageURL}
      draggable={!isDraged && isEditing === ''}
    />
  ));

  return (
    <Section>
      <Card
        spacing="lg"
        gap="lg"
      >
        <List gap="md">
          {nodes.length === 0 && (
            <Title
              size="4"
              color="primary"
              align="center"
            >
              No projects
            </Title>
          )}
          {nodes.length !== 0 && nodes}
        </List>
        {isDraged && <TrashArea setIsDraged={setIsDraged} />}
      </Card>
    </Section>
  );
};

export default Projects;
