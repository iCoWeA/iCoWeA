import React, { type BaseHTMLAttributes, type FC } from 'react';

import { mergeClasses } from '../../../utils/utils';
import breadcrumbsConfig from './breadcrumbsConfig';

export type BreadcrumbsContainerDefaultProps = BaseHTMLAttributes<HTMLSpanElement>;

export type BreadcrumbsContainerProps = BreadcrumbsContainerDefaultProps;

const BreadcrumbsContainer: FC<BreadcrumbsContainerProps> = ({ className, ...restProps }) => {
  /* --- Set classes --- */
  const styles = breadcrumbsConfig.styles.container;

  const mergedClassName = mergeClasses(styles.base, className);

  return (
    <span
      className={mergedClassName}
      {...restProps}
    />
  );
};

export default BreadcrumbsContainer;
