import React, { type LiHTMLAttributes, forwardRef, useContext } from 'react';
import { type ListItemProps } from '../../configs/listItemConfig';
import themeContext from '../../contexts/theme';
import { mergeClasses, setDefaultProps } from '../../utils/propsHelper';

const ListItem = forwardRef<HTMLLIElement, ListItemProps & LiHTMLAttributes<HTMLLIElement>>((props, ref) => {
  const { theme, config } = useContext(themeContext);
  const { defaultProps, styles } = config.listItem;
  const { size, color, disablePadding, className, ...restProps } = setDefaultProps(defaultProps, props);

  /* Set props */
  const mergedClassName = mergeClasses(styles.base, styles.sizes[size], styles.colors[theme][color], disablePadding && styles.disablePadding, className);

  return (
    <li
      className={mergedClassName}
      ref={ref}
      {...restProps}
    />
  );
});

ListItem.displayName = 'ListItem';

export default ListItem;
