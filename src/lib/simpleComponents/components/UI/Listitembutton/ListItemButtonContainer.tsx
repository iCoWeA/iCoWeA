import React, { type LiHTMLAttributes, forwardRef } from 'react';
import listItemButtonConfig from '../../../configs/listItemButtonConfig';
import { mergeClasses } from '../../../utils/propsHelper';

interface ListItemButtonContainerProps extends LiHTMLAttributes<HTMLLIElement> {}

const ListItemButtonContainer = forwardRef<HTMLLIElement, ListItemButtonContainerProps>(({ className, ...restProps }, ref) => {
  /* --- Set default props --- */
  const styles = listItemButtonConfig.styles.container;

  /* --- Set props --- */
  const mergedClassName = mergeClasses(styles.base, className);

  return (
    <li
      className={mergedClassName}
      ref={ref}
      {...restProps}
    />
  );
});

ListItemButtonContainer.displayName = 'ListItemButtonContainer';

export default ListItemButtonContainer;
