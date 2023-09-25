import React, { type FC } from 'react';
import ExampleSection from '../../components/ExampleSection';
import Button from '../../lib/simpleComponents/components/UI/Button';

const ShapesExample: FC = () => (
  <ExampleSection
    title="Shapes"
    titleId="shapes"
    row
  >
    <Button shape="circular">Button</Button>
    <Button shape="rounded">Button</Button>
    <Button shape="square">Button</Button>
  </ExampleSection>
);

export default ShapesExample;
