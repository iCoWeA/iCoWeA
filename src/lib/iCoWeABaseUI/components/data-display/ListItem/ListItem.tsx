import React, { forwardRef, useMemo } from 'react';

import DefaultListItem, {
  type DefaultListItemProps
} from '../../../../iCoWeAUI/components/DefaultListItem/DefaultListItem';
import { mergeClasses } from '../../../../iCoWeAUI/utils/utils';
import useConfig from '../../../hooks/useConfig';
import listItemConfig from './listItemConfig';

export type ListItemDefaultProps = {
  spacing?: Spacings;
  variant?: Variants;
  color?: Colors;
  border?: Borders;
  radius?: Radiuses;
  justify?: JustifyContent;
  align?: AlignItems;
  gap?: Gaps;
};

export type ListItemProps = DefaultListItemProps & ListItemDefaultProps;

const ListItem = forwardRef<HTMLLIElement, ListItemProps>((props, ref) => {
  const { defaultClassName, className, ...restProps } = useConfig(
    'listItem',
    listItemConfig.defaultProps,
    props
  );

  /* --- Set classes--- */
  const mergedClassName = useMemo(
    () => mergeClasses(defaultClassName, className),
    [defaultClassName, className]
  );

  return (
    <DefaultListItem
      className={mergedClassName}
      ref={ref}
      {...restProps}
    />
  );
});

ListItem.displayName = 'ListItem';

export default ListItem;
