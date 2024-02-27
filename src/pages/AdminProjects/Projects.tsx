import React, { type FC, useState, useMemo } from 'react';
import { useSelector } from 'react-redux';

import List from '../../lib/iCoWeABaseUI/components/data-display/List/List';
import Title from '../../lib/iCoWeABaseUI/components/data-display/Title/Title';
import Section from '../../lib/iCoWeABaseUI/components/layouts/Section/Section';
import { selectProjects } from '../../store/slices/projects';
import AddProject from './AddProject';
import Project from './Project';
import TrashArea from './TrashArea';

const Projects: FC = () => {
  const projects = useSelector(selectProjects);

  const [draging, setDraging] = useState('');

  const nodes = useMemo(() => {
    return Object.keys(projects)
      .sort((a, b) => +projects[a].order - +projects[b].order)
      .map((key) => (
        <Project
          key={key}
          setDraging={setDraging}
          draging={draging}
          id={key}
          projects={projects}
        />
      ));
  }, [projects, draging]);

  return (
    <Section>
      <Title
        size="1"
        color="primary"
        align="center"
        className="mb-12"
      >
        Projects
      </Title>
      <AddProject />
      {nodes.length === 0 && (
        <Title
          size="4"
          align="center"
          className="mt-8"
        >
          No projects
        </Title>
      )}
      {nodes.length !== 0 && (
        <List
          gap="sm"
          className="mt-8"
        >
          {nodes}
        </List>
      )}
      <TrashArea
        setDraging={setDraging}
        draging={draging}
      />
    </Section>
  );
};

export default Projects;
