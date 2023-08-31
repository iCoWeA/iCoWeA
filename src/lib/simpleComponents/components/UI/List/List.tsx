import React, { type BaseHTMLAttributes, forwardRef } from 'react';
import listConfig from '../../../configs/listConfig';
import { mergeClasses, mergeProps } from '../../../utils/propsHelper';

export interface ListProps extends BaseHTMLAttributes<HTMLUListElement> {
  row?: boolean;
  disableGap?: boolean;
  className?: string;
}

const List = forwardRef<HTMLUListElement, ListProps>((props, ref) => {
  /* --- Set default props --- */
  const { defaultProps, styles } = listConfig;
  const { row, disableGap, className, ...restProps } = mergeProps(defaultProps, props);

  /* --- Set props --- */
  const mergedClassName = mergeClasses(styles.base, row && styles.row, disableGap && styles.disableGap, className);

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
