import React, { type BaseHTMLAttributes, forwardRef } from 'react';
import listConfig from '../../configs/listConfig';
import { mergeClasses } from '../../utils/propsHelper';

export interface ListProps extends BaseHTMLAttributes<HTMLUListElement> {}

const List = forwardRef<HTMLUListElement, ListProps>((props, ref) => {
  /* --- Set default props --- */
  const styles = listConfig.styles;
  const { className, ...restProps } = { ...props };

  /* --- Set props --- */
  const mergedClassName = mergeClasses(styles.base, className);

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
