import React, { type BaseHTMLAttributes, forwardRef } from 'react';

import useConfig from '../../../hooks/useConfig';
import { mergeClasses } from '../../../utils/utils';
import headerConfig from './headerConfig';

/* --- ARIA ---
 * aria-labelledby
 */

export type HeaderDefaultProps = {
  shadow?: boolean;
};

export type HeaderProps = BaseHTMLAttributes<HTMLElement> & HeaderDefaultProps;

const Header = forwardRef<HTMLElement, HeaderProps>((props, ref) => {
  const { shadow, defaultClassName, className, ...restProps } = useConfig(
    'header',
    headerConfig.defaultProps,
    props
  );

  /* --- Set classes --- */
  const styles = headerConfig.styles;

  const mergedClassName = mergeClasses(
    styles.base,
    shadow && styles.shadow,
    defaultClassName,
    className
  );

  return (
    <header
      className={mergedClassName}
      ref={ref}
      {...restProps}
    />
  );
});

Header.displayName = 'Header';

export default Header;
