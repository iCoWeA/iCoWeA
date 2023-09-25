import React, { type ReactNode, type FC, useContext } from 'react';
import Card from '../lib/simpleComponents/components/UI/Card';
import Typography from '../lib/simpleComponents/components/UI/Typography';
import Section from '../lib/simpleComponents/components/layouts/Section';
import themeContext from '../lib/simpleComponents/contexts/theme';
import { mergeClasses } from '../lib/simpleComponents/utils/utils';

interface ExampleSectionProps {
  titleId: string;
  title: ReactNode;
  description?: ReactNode;
  row?: boolean;
  children: ReactNode;
}

const ExampleSection: FC<ExampleSectionProps> = ({ titleId, title, description, row, children }) => {
  /* --- Set context props --- */
  const theme = useContext(themeContext).theme;
  const light = theme === 'light';

  /* --- Set props --- */
  const mergedClassName = mergeClasses(row === true ? 'flex-row justify-evenly' : 'items-center', light ? 'bg-light-surface-dark' : 'bg-light-surface-dark');

  return (
    <Section aria-labelledby={`example-${titleId}`}>
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
        className={mergedClassName}
      >
        {children}
      </Card>
    </Section>
  );
};

export default ExampleSection;
