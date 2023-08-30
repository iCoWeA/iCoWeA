import React, { type LiHTMLAttributes, forwardRef, useContext } from 'react';
import themeContext from '../../contexts/theme';
import { mergeClasses, mergeProps } from '../../utils/propsHelper';

export interface ListItemProps extends LiHTMLAttributes<HTMLLIElement> {
  size?: Sizes;
  color?: Colors;
  disablePadding?: boolean;
  className?: string;
}

const ListItem = forwardRef<HTMLLIElement, ListItemProps>((props, ref) => {
  /* --- Set default props --- */
  const { theme, config } = useContext(themeContext);
  const { defaultProps, styles } = config.listItem;
  const { size, color, disablePadding, className, ...restProps } = mergeProps(defaultProps, props);

  /* --- Set props --- */
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
