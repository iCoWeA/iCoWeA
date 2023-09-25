import React, { type FC } from 'react';
import ExampleSection from '../../components/ExampleSection';
import Button from '../../lib/simpleComponents/components/UI/Button';

const SoftVariantExample: FC = () => (
  <ExampleSection
    title="Soft variant"
    titleId="soft"
    row
  >
    <Button
      variant="soft"
      color="default"
    >
      Button
    </Button>
    <Button
      variant="soft"
      color="primary"
    >
      Button
    </Button>
    <Button
      variant="soft"
      color="secondary"
    >
      Button
    </Button>
    <Button
      variant="soft"
      color="success"
    >
      Button
    </Button>
    <Button
      variant="soft"
      color="warning"
    >
      Button
    </Button>
    <Button
      variant="soft"
      color="error"
    >
      Button
    </Button>
  </ExampleSection>
);

export default SoftVariantExample;
