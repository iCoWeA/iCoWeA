import React, { type FC } from 'react';
import ExampleSection from '../../components/ExampleSection';
import Button from '../../lib/simpleComponents/components/UI/Button';

const SolidVariantExample: FC = () => (
  <ExampleSection
    title="Solid variant"
    titleId="solid"
    row
  >
    <Button
      variant="solid"
      color="default"
    >
      Button
    </Button>
    <Button
      variant="solid"
      color="primary"
    >
      Button
    </Button>
    <Button
      variant="solid"
      color="secondary"
    >
      Button
    </Button>
    <Button
      variant="solid"
      color="success"
    >
      Button
    </Button>
    <Button
      variant="solid"
      color="warning"
    >
      Button
    </Button>
    <Button
      variant="solid"
      color="error"
    >
      Button
    </Button>
  </ExampleSection>
);

export default SolidVariantExample;
