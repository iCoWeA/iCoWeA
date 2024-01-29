import React, { forwardRef } from 'react';

import { mergeClasses } from '../../../../iCoWeAUI/utils/utils';
import useConfig from '../../../hooks/useConfig';
import Box, { type BoxProps } from '../Box/Box';
import gridConfig from './gridConfig';

export type GridDefaultProps = {
  flow?: Flows;
  justify?: JustifyItems;
  align?: AlignItems;
  justifyContent?: JustifyContent;
  alignContent?: AlignContent;
  gap?: Gaps;
  rowGap?: Gaps;
  colGap?: Gaps;
};

export type GridProps = BoxProps & GridDefaultProps;

const Grid = forwardRef<HTMLDivElement, GridProps>((props, ref) => {
  const {
    flow,
    justify,
    align,
    justifyContent,
    alignContent,
    gap,
    rowGap,
    colGap,
    defaultClassName,
    className,
    ...restProps
  } = useConfig('grid', gridConfig.defaultProps, props);

  /* --- Set classes --- */
  const styles = gridConfig.styles;

  const mergedClassName = mergeClasses(
    styles.base,
    flow !== 'row' && styles.flows[flow],
    justify !== 'stretch' && styles.justifies[justify],
    align !== 'stretch' && styles.aligns[align],
    justifyContent !== 'start' && styles.contentAligns[justifyContent],
    alignContent !== 'start' && styles.contentAligns[alignContent],
    gap !== 'none' && styles.gaps[gap],
    rowGap !== 'none' && styles.rowGaps[rowGap],
    colGap !== 'none' && styles.colGaps[colGap],
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

Grid.displayName = 'Grid';

export default Grid;
