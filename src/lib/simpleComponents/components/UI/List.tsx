import React, { type BaseHTMLAttributes, forwardRef } from 'react';
import listConfig from '../../configs/listConfig';
import { mergeClasses } from '../../utils/propsHelper';

export interface ListProps extends BaseHTMLAttributes<HTMLUListElement> {
  orientation?: Orientations;
  group?: boolean;
}

const List = forwardRef<HTMLUListElement, ListProps>((props, ref) => {
  /* --- Set default props --- */
  const styles = listConfig.styles;
  const { orientation, group, className, ...restProps } = { ...listConfig.defaultProps, ...props };

  /* --- Set props --- */
  const groupProps: BaseHTMLAttributes<HTMLUListElement> = {};

  if (group) {
    groupProps.role = 'group';
  }

  const mergedClassName = mergeClasses(styles.base, orientation === 'vertical' && styles.vertical, group && styles.group, className);

  return (
    <ul
      {...groupProps}
      className={mergedClassName}
      ref={ref}
      {...restProps}
    />
  );
});

List.displayName = 'List';

export default List;
