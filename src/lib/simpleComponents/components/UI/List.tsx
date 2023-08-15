import React, { type BaseHTMLAttributes, forwardRef, useContext } from 'react';
import { type ListProps } from '../../configs/listConfig';
import themeContext from '../../contexts/theme';
import { mergeClasses, setDefaultProps } from '../../utils/propsHelper';

const List = forwardRef<HTMLUListElement, ListProps & BaseHTMLAttributes<HTMLUListElement>>((props, ref) => {
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
