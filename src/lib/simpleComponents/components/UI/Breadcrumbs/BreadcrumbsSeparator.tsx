import React, { type BaseHTMLAttributes, forwardRef, useContext } from 'react';
import breadcrumbsConfig from '../../../configs/breadcrumbsConfig';
import themeContext from '../../../contexts/theme';
import { mergeClasses } from '../../../utils/propsHelper';

export interface BreacrumbsSeparatorProps extends BaseHTMLAttributes<HTMLSpanElement> {}

const BreadcrumbsSeparator = forwardRef<HTMLSpanElement, BreacrumbsSeparatorProps>(({ color, className, ...restProps }, ref) => {
  /* --- Set context props --- */
  const theme = useContext(themeContext).theme;

  /* --- Set default props --- */
  const styles = breadcrumbsConfig.styles.separator;

  /* --- Set props --- */
  const mergedClassName = mergeClasses(styles.base, styles.colors[theme], className);

  return (
    <span
      className={mergedClassName}
      ref={ref}
      {...restProps}
    />
  );
});

BreadcrumbsSeparator.displayName = 'BreadcrumbsSeparator';

export default BreadcrumbsSeparator;
