import React, { forwardRef } from 'react';

import useConfig from '../../../hooks/useConfig';
import Flex, { type FlexProps } from '../Flex/Flex';
import stackConfig from './stackConfig';

export type StackDefaultProps = {
  justify?: JustifyContent;
  align?: AlignItems;
  gap?: BoxGaps;
};

export type StackProps = FlexProps & StackDefaultProps;

const Stack = forwardRef<HTMLDivElement, StackProps>((props, ref) => {
  const mergedProps = useConfig('stack', stackConfig.defaultProps, props);

  return (
    <Flex
      direction="col"
      wrap="wrap"
      ref={ref}
      {...mergedProps}
    />
  );
});

Stack.displayName = 'Stack';

export default Stack;
