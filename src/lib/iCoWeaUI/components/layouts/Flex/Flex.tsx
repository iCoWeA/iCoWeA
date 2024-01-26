import React, { forwardRef } from 'react';

import useConfig from '../../../hooks/useConfig';
import Box, { type BoxProps } from '../Box/Box';
import flexConfig from './flexConfig';

export type FlexDefaultProps = {
  justify?: JustifyContent;
  align?: AlignItems;
  gap?: Gaps;
};

export type FlexProps = BoxProps & FlexDefaultProps;

const Flex = forwardRef<HTMLDivElement, FlexProps>((props, ref) => {
  const mergedProps = useConfig('flex', flexConfig.defaultProps, props);

  return (
    <Box
      variant="default"
      color="inherit"
      spacing="none"
      panel={false}
      bordered="none"
      direction="row"
      wrap="wrap"
      grow={false}
      block={false}
      ref={ref}
      {...mergedProps}
    />
  );
});

Flex.displayName = 'Flex';

export default Flex;
