import React, { forwardRef, useMemo } from 'react';

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
  gap?: BoxGaps;
  rowGap?: BoxGaps;
  colGap?: BoxGaps;
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
  const mergedClassName = useMemo(() => {
    const styles = gridConfig.styles;

    return mergeClasses(
      styles.base,
      flow !== 'row' && styles.flows[flow],
      justify !== 'stretch' && styles.justifies[justify],
      align !== 'stretch' && styles.aligns[align],
      justifyContent !== 'start' && styles.contentJustifies[justifyContent],
      alignContent !== 'start' && styles.contentAligns[alignContent],
      gap !== 'none' && styles.gaps[gap],
      rowGap !== 'none' && styles.rowGaps[rowGap],
      colGap !== 'none' && styles.colGaps[colGap],
      defaultClassName,
      className
    );
  }, [
    flow,
    justify,
    align,
    justifyContent,
    alignContent,
    gap,
    rowGap,
    colGap,
    defaultClassName,
    className
  ]);

  return (
    <Box
      position="static"
      block={false}
      spacing="none"
      variant="text"
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

Grid.displayName = 'Grid';

export default Grid;
