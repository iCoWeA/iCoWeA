import React, { type ReactNode, type FC, useContext } from 'react';
import Card from '../lib/simpleComponents/components/UI/Card';
import Typography from '../lib/simpleComponents/components/UI/Typography';
import Section from '../lib/simpleComponents/components/layouts/Section';
import themeContext from '../lib/simpleComponents/contexts/theme';

interface ExampleSectionProps {
  titleId: string;
  title: ReactNode;
  description?: ReactNode;
  children: ReactNode;
}

const ExampleSection: FC<ExampleSectionProps> = ({ titleId, title, description, children }) => {
  /* --- Set context props --- */
  const theme = useContext(themeContext).theme;
  const light = theme === 'light';

  return (
    <Section aria-labelledby={titleId}>
      <Typography
        id={`example-${titleId}`}
        type="title-lg"
      >
        {title}
      </Typography>
      {description}
      <Card
        variant="outlined"
        simple
        gap="md"
        className={light ? 'bg-light-surface-dark' : 'bg-light-surface-dark'}
      >
        {children}
      </Card>
    </Section>
  );
};

export default ExampleSection;
