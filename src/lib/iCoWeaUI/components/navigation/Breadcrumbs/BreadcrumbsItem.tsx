import React, { type LiHTMLAttributes, type FC } from 'react';

import { mergeClasses } from '../../../utils/utils';
import breadcrumbsConfig from './breadcrumbsConfig';

export type BreadcrumbsItemDefaultProps = LiHTMLAttributes<HTMLLIElement>;

export type BreadcrumbsItemProps = BreadcrumbsItemDefaultProps & {
  gap: Gaps;
};

const BreadcrumbsItem: FC<BreadcrumbsItemProps> = ({ gap, className, ...restProps }) => {
  /* --- Set classes --- */
  const styles = breadcrumbsConfig.styles.item;

  const mergedClassName = mergeClasses(styles.base, gap !== 'none' && styles.gaps[gap], className);

  return (
    <li
      className={mergedClassName}
      {...restProps}
    />
  );
};

export default BreadcrumbsItem;
