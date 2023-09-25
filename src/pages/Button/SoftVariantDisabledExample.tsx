import React, { type FC } from 'react';
import ExampleSection from '../../components/ExampleSection';
import Button from '../../lib/simpleComponents/components/UI/Button';

const SoftVariantExample: FC = () => (
  <ExampleSection
    title="Soft disabled variant"
    titleId="soft-disabled"
  >
    <Button
      disabled
      variant="soft"
      color="default"
    >
      Button
    </Button>
    <Button
      disabled
      variant="soft"
      color="primary"
    >
      Button
    </Button>
    <Button
      disabled
      variant="soft"
      color="secondary"
    >
      Button
    </Button>
    <Button
      disabled
      variant="soft"
      color="success"
    >
      Button
    </Button>
    <Button
      disabled
      variant="soft"
      color="warning"
    >
      Button
    </Button>
    <Button
      disabled
      variant="soft"
      color="error"
    >
      Button
    </Button>
  </ExampleSection>
);

export default SoftVariantExample;
