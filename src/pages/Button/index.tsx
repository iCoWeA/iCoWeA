import React, { type FC } from 'react';
import Typography from '../../lib/simpleComponents/components/UI/Typography';
import DefaultExample from './DefaultExample';
import OutlinedVariantDisabledExample from './OutlinedVariantDisabledExample';
import OutlinedVariantExample from './OutlinedVariantExample';
import PlainVariantDisabledExample from './PlainVariantDisabledExample';
import PlainVariantExample from './PlainVariantExample';
import ShapesExample from './ShapesExample';
import SizesExample from './SizesExample';
import SoftVariantDisabledExample from './SoftVariantDisabledExample';
import SoftVariantExample from './SoftVariantExample';
import SolidVariantDisabledExample from './SolidVariantDisabledExample';
import SolidVariantExample from './SolidVariantExample';
import TextVariantDisabledExample from './TextVariantDisabledExample';
import TextVariantExample from './TextVariantExample';

export const Component: FC = () => (
  <>
    <Typography
      type="headline-lg"
      color="primary"
    >
      BUTTON
    </Typography>
    <DefaultExample />
    <SizesExample />
    <ShapesExample />
    <PlainVariantExample />
    <TextVariantExample />
    <SoftVariantExample />
    <SolidVariantExample />
    <OutlinedVariantExample />
    <PlainVariantDisabledExample />
    <TextVariantDisabledExample />
    <SoftVariantDisabledExample />
    <SolidVariantDisabledExample />
    <OutlinedVariantDisabledExample />
  </>
);

Component.displayName = 'ButtonRoute';
