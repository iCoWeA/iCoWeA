import React, { type BaseHTMLAttributes, forwardRef } from 'react';

import { mergeClasses } from '../../../../iCoWeAUI/utils/utils';
import useConfig from '../../../hooks/useConfig';
import listConfig from './listConfig';

export type ListDefaultProps = {
  spacing?: Spacing;
  gap?: Gaps;
  row?: boolean;
  block?: boolean;
};

export type ListProps = BaseHTMLAttributes<HTMLUListElement> & ListDefaultProps;

const List = forwardRef<HTMLUListElement, ListProps>((props, ref) => {
  const { spacing, gap, row, block, defaultClassName, className, ...restProps } = useConfig(
    'list',
    listConfig.defaultProps,
    props
  );

  /* --- Set classes --- */
  const styles = listConfig.styles;

  const mergedClassName = mergeClasses(
    styles.base,
    spacing !== 'none' && styles.spacing[spacing],
    gap !== 'none' && styles.gaps[gap],
    row ? styles.row : styles.column,
    block && styles.block,
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
