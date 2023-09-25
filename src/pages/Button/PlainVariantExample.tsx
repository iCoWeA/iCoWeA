import React, { type FC } from 'react';
import ExampleSection from '../../components/ExampleSection';
import Button from '../../lib/simpleComponents/components/UI/Button';

const PlainVariantExample: FC = () => (
  <ExampleSection
    title="Plain variant"
    titleId="plain"
    row
    reverseColor
  >
    <Button
      variant="plain"
      color="default"
    >
      Button
    </Button>
    <Button
      variant="plain"
      color="primary"
    >
      Button
    </Button>
    <Button
      variant="plain"
      color="secondary"
    >
      Button
    </Button>
    <Button
      variant="plain"
      color="success"
    >
      Button
    </Button>
    <Button
      variant="plain"
      color="warning"
    >
      Button
    </Button>
    <Button
      variant="plain"
      color="error"
    >
      Button
    </Button>
  </ExampleSection>
);

export default PlainVariantExample;
