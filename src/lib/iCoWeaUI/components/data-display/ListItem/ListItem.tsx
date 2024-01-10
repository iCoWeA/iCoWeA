import React, { type LiHTMLAttributes, forwardRef } from 'react';

import useConfig from '../../../hooks/useConfig';
import { mergeClasses } from '../../../utils/utils';
import listItemConfig from './listItemConfig';

export type ListItemDefaultProps = {
  size?: Sizes;
  block?: boolean;
  divider?: boolean;
};

export type ListItemProps = LiHTMLAttributes<HTMLLIElement> & ListItemDefaultProps;

const ListItem = forwardRef<HTMLLIElement, ListItemProps>((props, ref) => {
  const { size, block, divider, defaultClassName, className, ...restProps } = useConfig(
    'listItem',
    listItemConfig.defaultProps,
    props
  );

  /* --- Set classes--- */
  const styles = listItemConfig.styles;

  const mergedClassName = mergeClasses(
    styles.base,
    styles.sizes[size],
    block && styles.block,
    divider && styles.divider,
    defaultClassName,
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
