import React, { type FC } from 'react';
import ExampleSection from '../../components/ExampleSection';
import Button from '../../lib/simpleComponents/components/UI/Button';

const SizesExample: FC = () => (
  <ExampleSection
    title="Sizes"
    titleId="sizes"
  >
    <Button size="xs">Button</Button>
    <Button size="sm">Button</Button>
    <Button size="md">Button</Button>
    <Button size="lg">Button</Button>
  </ExampleSection>
);

export default SizesExample;
