import React, { type LiHTMLAttributes, forwardRef } from 'react';

import { mergeClasses } from '../../../../iCoWeAUI/utils/utils';
import useConfig from '../../../hooks/useConfig';
import listItemConfig from './listItemConfig';

export type ListItemDefaultProps = {
  spacing?: Spacing;
  divider?: boolean;
  block?: boolean;
  justify?: JustifyContent;
  align?: AlignItems;
  gap?: Gaps;
};

export type ListItemProps = LiHTMLAttributes<HTMLLIElement> & ListItemDefaultProps;

const ListItem = forwardRef<HTMLLIElement, ListItemProps>((props, ref) => {
  const {
    spacing,
    block,
    divider,
    justify,
    align,
    gap,
    defaultClassName,
    className,
    ...restProps
  } = useConfig('listItem', listItemConfig.defaultProps, props);

  /* --- Set classes--- */
  const styles = listItemConfig.styles;

  const mergedClassName = mergeClasses(
    styles.base,
    spacing !== 'none' && styles.spacings[spacing],
    divider && styles.divider,
    block && styles.block,
    justify !== 'start' && styles.justifies[justify],
    align !== 'stretch' && styles.aligns[align],
    gap !== 'none' && styles.gaps[gap],
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
