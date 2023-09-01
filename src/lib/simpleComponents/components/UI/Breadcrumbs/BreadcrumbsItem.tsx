import React, { forwardRef, type LiHTMLAttributes } from 'react';
import breadcrumbsConfig from '../../../configs/breadcrumbsConfig';
import { mergeClasses } from '../../../utils/propsHelper';

export interface BreacrumbsItemProps extends LiHTMLAttributes<HTMLLIElement> {}

const BreadcrumbsItem = forwardRef<HTMLLIElement, BreacrumbsItemProps>(({ className, ...restProps }, ref) => {
  /* --- Set default props --- */
  const styles = breadcrumbsConfig.styles.item;

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

BreadcrumbsItem.displayName = 'BreadcrumbsItem';

export default BreadcrumbsItem;
