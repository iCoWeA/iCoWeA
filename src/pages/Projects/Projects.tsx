import React, { type FC, useMemo } from 'react';
import { useSelector } from 'react-redux';

import AnimatedSection from '../../components/AnimatedSection/AnimatedSection';
import List from '../../lib/iCoWeABaseUI/components/data-display/List/List';
import Title from '../../lib/iCoWeABaseUI/components/data-display/Title/Title';
import { selectProjects } from '../../store/slices/projects';
import ProjectCard from './ProjectCard';

const Projects: FC = () => {
  const projects = useSelector(selectProjects);

  const nodes = useMemo(
    () =>
      Object.keys(projects).map((key) => (
        <ProjectCard
          key={key}
          name={projects[key].name}
          url={projects[key].url}
          imageURL={projects[key].imageURL}
        />
      )),
    [projects]
  );

  return (
    <AnimatedSection>
      {nodes.length === 0 && (
        <Title
          size="2"
          color="on-primary"
          align="center"
        >
          No projects
        </Title>
      )}
      {nodes.length !== 0 && (
        <List
          row
          justify="center"
          gap="xxl"
        >
          {nodes}
        </List>
      )}
    </AnimatedSection>
  );
};

export default Projects;
