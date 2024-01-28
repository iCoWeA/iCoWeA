import React, { forwardRef } from 'react';

import useConfig from '../../../hooks/useConfig';
import { mergeClasses } from '../../../utils/utils';
import Box, { type BoxProps } from '../Box/Box';
import flexConfig from './flexConfig';

export type FlexDefaultProps = {
  direction?: Directions;
  wrap?: Wraps;
  justify?: JustifyContent;
  align?: AlignItems;
  gap?: Gaps;
  grow?: boolean;
};

export type FlexProps = BoxProps & FlexDefaultProps;

const Flex = forwardRef<HTMLDivElement, FlexProps>((props, ref) => {
  const { direction, wrap, justify, align, gap, grow, defaultClassName, className, ...restProps } =
    useConfig('flex', flexConfig.defaultProps, props);

  /* --- Set classes --- */
  const styles = flexConfig.styles;

  const mergedClassName = mergeClasses(
    styles.base,
    direction !== 'row' && styles.directions[direction],
    wrap !== 'nowrap' && styles.wraps[wrap],
    justify !== 'start' && styles.justifies[justify],
    align !== 'stretch' && styles.aligns[align],
    gap !== 'none' && styles.gaps[gap],
    grow && styles.grow,
    defaultClassName,
    className
  );

  return (
    <Box
      variant="default"
      color="inherit"
      spacing="none"
      panel={false}
      border={false}
      block={false}
      className={mergedClassName}
      ref={ref}
      {...restProps}
    />
  );
});

Flex.displayName = 'Flex';

export default Flex;
