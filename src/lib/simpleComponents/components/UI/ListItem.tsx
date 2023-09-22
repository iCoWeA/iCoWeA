import React, { type LiHTMLAttributes, forwardRef, useContext } from 'react';
import listItemConfig from '../../configs/listItemConfig';
import themeContext from '../../contexts/theme';
import { mergeClasses } from '../../utils/propsHelper';

export interface ListItemProps extends LiHTMLAttributes<HTMLLIElement> {
  color?: Colors;
  fullwidth?: boolean;
}

const ListItem = forwardRef<HTMLLIElement, ListItemProps>((props, ref) => {
  /* --- Set context props --- */
  const theme = useContext(themeContext).theme;

  /* --- Set default props --- */
  const styles = listItemConfig.styles;
  const { color, fullwidth, className, ...restProps } = { ...listItemConfig.defaultProps, ...props };

  /* --- Set props --- */
  const mergedClassName = mergeClasses(
    styles.base,
    styles.color[theme],
    color !== undefined && styles.colors[theme][color],
    fullwidth && styles.fullwidth,
    className
  );

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
