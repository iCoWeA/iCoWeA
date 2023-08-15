import React, { type BaseHTMLAttributes, forwardRef, useContext } from 'react';
import { type ListDefaultProps } from '../../configs/listConfig';
import themeContext from '../../contexts/theme';
import { mergeClasses, setDefaultProps } from '../../utils/propsHelper';

export interface ListProps extends ListDefaultProps, BaseHTMLAttributes<HTMLUListElement> {}

const List = forwardRef<HTMLUListElement, ListProps>((props, ref) => {
  const { config } = useContext(themeContext);
  const { defaultProps, styles } = config.list;
  const { row, disableGap, className, ...restProps } = setDefaultProps(props, defaultProps);

  /* Set props */
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
