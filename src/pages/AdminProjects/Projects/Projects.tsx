import React, { type FC, useState } from 'react';
import { useSelector } from 'react-redux';

import List from '../../../lib/iCoWeABaseUI/components/data-display/List/List';
import Title from '../../../lib/iCoWeABaseUI/components/data-display/Title/Title';
import Section from '../../../lib/iCoWeABaseUI/components/layouts/Section/Section';
import Card from '../../../lib/iCoWeABaseUI/components/surfaces/Card/Card';
import { selectProjects } from '../../../store/slices/projects';
import ProjectButton from './ProjectButton';
import ProjectItem from './ProjectItem';
import TrashArea from './TrashArea';

const Projects: FC = () => {
  const projects = useSelector(selectProjects);

  const [isDraged, setIsDraged] = useState(false);
  const [isEditing, setIsEditing] = useState('');

  const nodes = Object.keys(projects).map((key) =>
    isEditing === key
      ? (
      <ProjectItem
        key={key}
        setIsEditing={setIsEditing}
        id={key}
        name={projects[key].name}
        url={projects[key].url}
        imageURL={projects[key].imageURL}
      />
        )
      : (
      <ProjectButton
        key={key}
        setIsDraged={setIsDraged}
        setIsEditing={setIsEditing}
        isEditing={isEditing}
        id={key}
        name={projects[key].name}
        draggable={!isDraged && isEditing === ''}
      />
        )
  );

  return (
    <Section>
      <Card
        spacing="lg"
        gap="lg"
      >
        {nodes.length === 0 && (
          <Title
            size="3"
            color="primary"
            align="center"
          >
            No projects
          </Title>
        )}
        {nodes.length !== 0 && <List gap="md">{nodes}</List>}
        {isDraged && <TrashArea setIsDraged={setIsDraged} />}
      </Card>
    </Section>
  );
};

export default Projects;
