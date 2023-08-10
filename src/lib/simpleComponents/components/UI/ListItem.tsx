import React, { type LiHTMLAttributes, forwardRef, useContext } from 'react';
import {
  type ListItemSizes,
  type ListItemColors
} from '../../configs/listItemConfig';
import themeContext from '../../contexts/theme';
import { twMerge } from 'tailwind-merge';
import { mergeClasses } from '../../utils/styleHelper';

export interface ListItemDefaultProps {
  size?: ListItemSizes;
  color?: ListItemColors;
  disablePadding?: boolean;
}

export interface ListItemProps
  extends ListItemDefaultProps,
  LiHTMLAttributes<HTMLLIElement> {}

const ListItem = forwardRef<HTMLLIElement, ListItemProps>(
  ({ size, color, disablePadding, className, ...restProps }, ref) => {
    const { theme, config } = useContext(themeContext);
    const { defaultProps, styles } = config.listItem;

    size = size ?? defaultProps.size;
    color = color ?? defaultProps.color;
    disablePadding = disablePadding ?? defaultProps.disablePadding;

    const mergedClassName = twMerge(
      mergeClasses(
        styles.base,
        styles.sizes[size],
        styles.colors[theme][color],
        disablePadding && styles.disablePadding,
        className
      )
    );

    return (
      <li
        className={mergedClassName}
        ref={ref}
        {...restProps}
      />
    );
  }
);

ListItem.displayName = 'ListItem';

export default ListItem;
