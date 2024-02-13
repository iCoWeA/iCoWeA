import React, { type BaseHTMLAttributes, forwardRef, useMemo } from 'react';

import { mergeClasses } from '../../../../iCoWeAUI/utils/utils';
import useConfig from '../../../hooks/useConfig';
import listConfig from './listConfig';

export type ListDefaultProps = {
  block?: boolean;
  row?: boolean;
  justify?: JustifyContent;
  align?: AlignItems;
  gap?: BoxGaps;
};

export type ListProps = BaseHTMLAttributes<HTMLUListElement> & ListDefaultProps;

const List = forwardRef<HTMLUListElement, ListProps>((props, ref) => {
  const { block, row, justify, align, gap, defaultClassName, className, ...restProps } = useConfig(
    'list',
    listConfig.defaultProps,
    props
  );

  /* --- Set classes --- */
  const mergedClassName = useMemo(() => {
    const styles = listConfig.styles;

    return mergeClasses(
      styles.base,
      block && styles.block,
      !row && styles.column,
      justify !== 'start' && styles.justifies[justify],
      align !== 'stretch' && styles.aligns[align],
      gap !== 'none' && styles.gaps[gap],
      defaultClassName,
      className
    );
  }, [block, row, justify, align, gap, defaultClassName, className]);

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
