import React, { type FC } from 'react';
import ExampleSection from '../../components/ExampleSection';
import Button from '../../lib/simpleComponents/components/UI/Button';

const OutlinedVariantExample: FC = () => (
  <ExampleSection
    title="Outlined disabled variant"
    titleId="outlined-disabled"
  >
    <Button
      disabled
      variant="outlined"
      color="default"
    >
      Button
    </Button>
    <Button
      disabled
      variant="outlined"
      color="primary"
    >
      Button
    </Button>
    <Button
      disabled
      variant="outlined"
      color="secondary"
    >
      Button
    </Button>
    <Button
      disabled
      variant="outlined"
      color="success"
    >
      Button
    </Button>
    <Button
      disabled
      variant="outlined"
      color="warning"
    >
      Button
    </Button>
    <Button
      disabled
      variant="outlined"
      color="error"
    >
      Button
    </Button>
  </ExampleSection>
);

export default OutlinedVariantExample;
