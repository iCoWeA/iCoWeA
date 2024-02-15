import React, { type FC } from 'react';
import { useSelector } from 'react-redux';

import List from '../../lib/iCoWeABaseUI/components/data-display/List/List';
import Title from '../../lib/iCoWeABaseUI/components/data-display/Title/Title';
import Flex from '../../lib/iCoWeABaseUI/components/layouts/Flex/Flex';
import Layout from '../../lib/iCoWeABaseUI/components/layouts/Layout/Layout';
import Main from '../../lib/iCoWeABaseUI/components/layouts/Main/Main';
import Section from '../../lib/iCoWeABaseUI/components/layouts/Section/Section';
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
        <Section className="animate-slide">
          <Flex>
            {nodes.length === 0 && (
              <Title
                size="2"
                color="on-primary"
                align="center"
              >
                No projects
              </Title>
            )}
            {nodes.length !== 0 && <List align="center">{nodes}</List>}
          </Flex>
        </Section>
      </Main>
    </Layout>
  );
};

Component.displayName = 'HomeRoute';
