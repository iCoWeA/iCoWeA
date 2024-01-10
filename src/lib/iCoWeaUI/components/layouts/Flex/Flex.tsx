import React, { forwardRef } from 'react';

import useConfig from '../../../hooks/useConfig';
import { mergeClasses } from '../../../utils/utils';
import Container, { type ContainerProps } from '../Container/Container';
import flexConfig from './flexConfig';

export type FlexDefaultProps = {
  direction?: Directions;
  justify?: JustifyContent;
  align?: AlignItems;
  wrap?: Wraps;
  gap?: Gaps;
};

export type FlexProps = ContainerProps & FlexDefaultProps;

const Flex = forwardRef<HTMLDivElement, FlexProps>((props, ref) => {
  const { direction, justify, align, wrap, gap, defaultClassName, className, ...restProps } =
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
    defaultClassName,
    className
  );

  return (
    <Container
      variant="default"
      color="inherit"
      bordered={false}
      block={false}
      className={mergedClassName}
      ref={ref}
      {...restProps}
    />
  );
});

Flex.displayName = 'Flex';

export default Flex;
