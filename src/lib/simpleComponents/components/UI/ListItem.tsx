import React, { type LiHTMLAttributes, forwardRef, useContext } from 'react';
import { type ListItemSizes, type ListItemColors } from '../../configs/listItemConfig';
import themeContext from '../../contexts/theme';
import { mergeClasses, setDefaultProps } from '../../utils/propsHelper';

export interface ListItemProps extends LiHTMLAttributes<HTMLLIElement> {
  size?: ListItemSizes;
  color?: ListItemColors;
  disablePadding?: boolean;
  className?: string;
}

const ListItem = forwardRef<HTMLLIElement, ListItemProps>((props, ref) => {
  const { theme, config } = useContext(themeContext);
  const { defaultProps, styles } = config.listItem;
  const { size, color, disablePadding, className, ...restProps } = setDefaultProps(props, defaultProps);

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
