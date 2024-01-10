import React, { type BaseHTMLAttributes, forwardRef } from 'react';

import useConfig from '../../../hooks/useConfig';
import { mergeClasses } from '../../../utils/utils';
import listConfig from './listConfig';

export type ListDefaultProps = {
  spacing?: Spacing;
  justify?: JustifyContent;
  align?: AlignItems;
  gap?: Gaps;
  row?: boolean;
  fit?: boolean;
};

export type ListProps = BaseHTMLAttributes<HTMLUListElement> & ListDefaultProps;

const List = forwardRef<HTMLUListElement, ListProps>((props, ref) => {
  const { spacing, justify, align, gap, row, fit, defaultClassName, className, ...restProps } = useConfig(
    'list',
    listConfig.defaultProps,
    props
  );

  /* --- Set classes --- */
  const styles = listConfig.styles;

  const mergedClassName = mergeClasses(
    styles.base,
    spacing !== 'none' && styles.spacing[spacing],
    justify !== 'start' && styles.justifies[justify],
    align !== 'stretch' && styles.aligns[align],
    gap !== 'none' && styles.gaps[gap],
    !row && styles.column,
    !fit && styles.block,
    defaultClassName,
    className
  );

  return (
    <ul
      className={mergedClassName}
      ref={ref}
      {...restProps}
    />
  );
});

List.displayName = 'List';

export default List;
