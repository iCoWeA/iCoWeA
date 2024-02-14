import React, { type FC } from 'react';
import { useSelector } from 'react-redux';
import { Form } from 'react-router-dom';

import List from '../../../lib/iCoWeABaseUI/components/data-display/List/List';
import Section from '../../../lib/iCoWeABaseUI/components/layouts/Section/Section';
import Card from '../../../lib/iCoWeABaseUI/components/surfaces/Card/Card';
import { selectProjects } from '../../../store/slices/projects';
import ProjectListButton from './ProjectListButton';

const Projects: FC = () => {
  const projects = useSelector(selectProjects);

  const nodes = Object.keys(projects).map((key) => (
    <ProjectListButton
      key={key}
      id={key}
      name={projects[key].name}
      url={projects[key].url}
      imageURL={projects[key].imageURL}
    />
  ));

  return (
    <Section>
      <Card
        spacing="lg"
        gap="lg"
      >
        <Form>
          <List gap="md">{nodes}</List>
        </Form>
      </Card>
    </Section>
  );
};

export default Projects;
