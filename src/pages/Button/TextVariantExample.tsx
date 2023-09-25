import React, { type FC } from 'react';
import ExampleSection from '../../components/ExampleSection';
import Button from '../../lib/simpleComponents/components/UI/Button';

const TextVariantExample: FC = () => (
  <ExampleSection
    title="Text variant"
    titleId="text"
  >
    <Button
      variant="text"
      color="default"
    >
      Button
    </Button>
    <Button
      variant="text"
      color="primary"
    >
      Button
    </Button>
    <Button
      variant="text"
      color="secondary"
    >
      Button
    </Button>
    <Button
      variant="text"
      color="success"
    >
      Button
    </Button>
    <Button
      variant="text"
      color="warning"
    >
      Button
    </Button>
    <Button
      variant="text"
      color="error"
    >
      Button
    </Button>
  </ExampleSection>
);

export default TextVariantExample;
