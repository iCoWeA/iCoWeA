import React, { type FC } from 'react';
import ExampleSection from '../../components/ExampleSection';
import Button from '../../lib/simpleComponents/components/UI/Button';

const PlainVariantExample: FC = () => (
  <ExampleSection
    title="Plain disabled variant"
    titleId="plain-disabled"
    reverseColor
  >
    <Button
      disabled
      variant="plain"
      color="default"
    >
      Button
    </Button>
    <Button
      disabled
      variant="plain"
      color="primary"
    >
      Button
    </Button>
    <Button
      disabled
      variant="plain"
      color="secondary"
    >
      Button
    </Button>
    <Button
      disabled
      variant="plain"
      color="success"
    >
      Button
    </Button>
    <Button
      disabled
      variant="plain"
      color="warning"
    >
      Button
    </Button>
    <Button
      disabled
      variant="plain"
      color="error"
    >
      Button
    </Button>
  </ExampleSection>
);

export default PlainVariantExample;
