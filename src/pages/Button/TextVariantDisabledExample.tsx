import React, { type FC } from 'react';
import ExampleSection from '../../components/ExampleSection';
import Button from '../../lib/simpleComponents/components/UI/Button';

const TextVariantExample: FC = () => (
  <ExampleSection
    title="Text disabled variant"
    titleId="text-disabled"
  >
    <Button
      disabled
      variant="text"
      color="default"
    >
      Button
    </Button>
    <Button
      disabled
      variant="text"
      color="primary"
    >
      Button
    </Button>
    <Button
      disabled
      variant="text"
      color="secondary"
    >
      Button
    </Button>
    <Button
      disabled
      variant="text"
      color="success"
    >
      Button
    </Button>
    <Button
      disabled
      variant="text"
      color="warning"
    >
      Button
    </Button>
    <Button
      disabled
      variant="text"
      color="error"
    >
      Button
    </Button>
  </ExampleSection>
);

export default TextVariantExample;
