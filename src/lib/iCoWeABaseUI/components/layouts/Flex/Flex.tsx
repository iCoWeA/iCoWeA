import React, { forwardRef, useMemo } from 'react';

import { mergeClasses } from '../../../../iCoWeAUI/utils/utils';
import useConfig from '../../../hooks/useConfig';
import Box, { type BoxProps } from '../Box/Box';
import flexConfig from './flexConfig';

export type FlexDefaultProps = {
  direction?: Directions;
  wrap?: Wraps;
  justify?: JustifyContent;
  align?: AlignItems;
  gap?: Gaps;
};

export type FlexProps = BoxProps & FlexDefaultProps;

const Flex = forwardRef<HTMLDivElement, FlexProps>((props, ref) => {
  const { direction, wrap, justify, align, gap, defaultClassName, className, ...restProps } =
    useConfig('flex', flexConfig.defaultProps, props);

  /* --- Set classes --- */
  const mergedClassName = useMemo(() => {
    const styles = flexConfig.styles;

    return mergeClasses(
      styles.base,
      direction !== 'row' && styles.directions[direction],
      wrap !== 'nowrap' && styles.wraps[wrap],
      justify !== 'start' && styles.justifies[justify],
      align !== 'stretch' && styles.aligns[align],
      gap !== 'none' && styles.gaps[gap],
      defaultClassName,
      className
    );
  }, [direction, wrap, justify, align, gap, defaultClassName, className]);

  return (
    <Box
      position="static"
      block={false}
      spacing="none"
      variant="default"
      color="inherit"
      border={false}
      radius="none"
      shadow={false}
      className={mergedClassName}
      ref={ref}
      {...restProps}
    />
  );
});

Flex.displayName = 'Flex';

export default Flex;
