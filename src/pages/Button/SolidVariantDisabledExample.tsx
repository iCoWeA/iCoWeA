import React, { type FC } from 'react';
import ExampleSection from '../../components/ExampleSection';
import Button from '../../lib/simpleComponents/components/UI/Button';

const SolidVariantExample: FC = () => (
  <ExampleSection
    title="Solid disabled variant"
    titleId="solid-disabled"
  >
    <Button
      disabled
      variant="solid"
      color="default"
    >
      Button
    </Button>
    <Button
      disabled
      variant="solid"
      color="primary"
    >
      Button
    </Button>
    <Button
      disabled
      variant="solid"
      color="secondary"
    >
      Button
    </Button>
    <Button
      disabled
      variant="solid"
      color="success"
    >
      Button
    </Button>
    <Button
      disabled
      variant="solid"
      color="warning"
    >
      Button
    </Button>
    <Button
      disabled
      variant="solid"
      color="error"
    >
      Button
    </Button>
  </ExampleSection>
);

export default SolidVariantExample;
