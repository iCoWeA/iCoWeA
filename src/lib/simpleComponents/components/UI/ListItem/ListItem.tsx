import React, { type LiHTMLAttributes, forwardRef, useContext } from 'react';
import listItemConfig from '../../../configs/listItemConfig';
import themeContext from '../../../contexts/theme';
import { mergeClasses } from '../../../utils/propsHelper';

export interface ListItemProps extends LiHTMLAttributes<HTMLLIElement> {
  size?: Sizes;
  color?: Colors;
}

const ListItem = forwardRef<HTMLLIElement, ListItemProps>((props, ref) => {
  /* --- Set context props --- */
  const theme = useContext(themeContext).theme;

  /* --- Set default props --- */
  const styles = listItemConfig.styles;
  const { size, color, className, ...restProps } = { ...listItemConfig.defaultProps, ...props };

  /* --- Set props --- */
  const mergedClassName = mergeClasses(styles.base, styles.sizes[size], styles.colors[theme][color], className);

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
