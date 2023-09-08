import React, { type OlHTMLAttributes, forwardRef } from 'react';
import breadcrumbsConfig from '../../../configs/breadcrumbsConfig';
import { mergeClasses } from '../../../utils/propsHelper';

interface BreadcrumbsListProps extends OlHTMLAttributes<HTMLOListElement> {}

const BreadcrumbsList = forwardRef<HTMLOListElement, BreadcrumbsListProps>(({ className, ...restProps }, ref) => {
  /* --- Set default props --- */
  const styles = breadcrumbsConfig.styles.list;

  /* --- Set props --- */
  const mergedClassName = mergeClasses(styles.base, className);

  return (
    <ol
      className={mergedClassName}
      ref={ref}
      {...restProps}
    />
  );
});

BreadcrumbsList.displayName = 'BreadcrumbsList';

export default BreadcrumbsList;
