import React, { type FC } from 'react';
import { useSelector } from 'react-redux';

import AnimatedSection from '../../components/AnimatedSection/AnimatedSection';
import List from '../../lib/iCoWeABaseUI/components/data-display/List/List';
import Title from '../../lib/iCoWeABaseUI/components/data-display/Title/Title';
import Layout from '../../lib/iCoWeABaseUI/components/layouts/Layout/Layout';
import Main from '../../lib/iCoWeABaseUI/components/layouts/Main/Main';
import { selectProjects } from '../../store/slices/projects';
import ProjectCard from './ProjectCard';

export const Component: FC = () => {
  const projects = useSelector(selectProjects);

  const nodes = Object.keys(projects).map((key) => (
    <ProjectCard
      key={key}
      name={projects[key].name}
      url={projects[key].url}
      imageURL={projects[key].imageURL}
    />
  ));

  return (
    <Layout layout="default">
      <Main>
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
      </Main>
    </Layout>
  );
};

Component.displayName = 'HomeRoute';
