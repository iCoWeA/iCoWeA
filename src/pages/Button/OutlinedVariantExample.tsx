import React, { type FC } from 'react';
import ExampleSection from '../../components/ExampleSection';
import Button from '../../lib/simpleComponents/components/UI/Button';

const OutlinedVariantExample: FC = () => (
  <ExampleSection
    title="Outlined variant"
    titleId="outlined"
  >
    <Button
      variant="outlined"
      color="default"
    >
      Button
    </Button>
    <Button
      variant="outlined"
      color="primary"
    >
      Button
    </Button>
    <Button
      variant="outlined"
      color="secondary"
    >
      Button
    </Button>
    <Button
      variant="outlined"
      color="success"
    >
      Button
    </Button>
    <Button
      variant="outlined"
      color="warning"
    >
      Button
    </Button>
    <Button
      variant="outlined"
      color="error"
    >
      Button
    </Button>
  </ExampleSection>
);

export default OutlinedVariantExample;
