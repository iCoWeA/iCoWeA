import React, { type BaseHTMLAttributes, type FC } from 'react';

import { mergeClasses } from '../../../utils/utils';
import breadcrumbsConfig from './breadcrumbsConfig';

export type BreadcrumbsSeparatorDefaultProps = BaseHTMLAttributes<HTMLSpanElement> & {
  color?: TextColors;
};

export type BreadcrumbsSeparatorProps = BreadcrumbsSeparatorDefaultProps & {
  theme: Themes;
  color: TextColors;
};

const BreadcrumbsSeparator: FC<BreadcrumbsSeparatorProps> = ({
  theme,
  color,
  className,
  ...restProps
}) => {
  /* --- Set classes --- */
  const styles = breadcrumbsConfig.styles.separator;

  const mergedClassName = mergeClasses(
    styles.base,
    color !== 'inherit' && styles.colors[theme][color],
    className
  );

  return (
    <span
      className={mergedClassName}
      {...restProps}
    />
  );
};

export default BreadcrumbsSeparator;
