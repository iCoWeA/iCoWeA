import React, { forwardRef } from 'react';

import useConfig from '../../../hooks/useConfig';
import Box, { type BoxProps } from '../Box/Box';
import stackConfig from './stackConfig';

export type StackDefaultProps = {
  justify?: JustifyContent;
  align?: AlignItems;
  gap?: Gaps;
};

export type StackProps = BoxProps & StackDefaultProps;

const Stack = forwardRef<HTMLDivElement, StackProps>((props, ref) => {
  const mergedProps = useConfig('stack', stackConfig.defaultProps, props);

  return (
    <Box
      variant="default"
      color="inherit"
      spacing="none"
      panel={false}
      bordered="none"
      direction="col"
      wrap="wrap"
      grow={false}
      block={false}
      ref={ref}
      {...mergedProps}
    />
  );
});

Stack.displayName = 'Stack';

export default Stack;
