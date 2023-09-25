import React, { type FC } from 'react';
import ExampleSection from '../../components/ExampleSection';
import Button from '../../lib/simpleComponents/components/UI/Button';

const DefaultExample: FC = () => (
  <ExampleSection
    title="Default configuration"
    titleId="default"
  >
    <Button>Button</Button>
  </ExampleSection>
);

export default DefaultExample;
