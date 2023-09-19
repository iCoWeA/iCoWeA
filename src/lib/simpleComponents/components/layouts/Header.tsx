import React, { type BaseHTMLAttributes, forwardRef, useContext } from 'react';
import headerConfig from '../../configs/headerConfig';
import themeContext from '../../contexts/theme';
import { mergeClasses } from '../../utils/propsHelper';

/* ARIA
 *
 * Set aria-label to multiple region
 *
 */

export type HeaderVariants = 'plain' | 'filled';

export interface HeaderProps extends BaseHTMLAttributes<HTMLElement> {
  variant?: HeaderVariants;
}

const Header = forwardRef<HTMLElement, HeaderProps>((props, ref) => {
  /* --- Set context props --- */
  const theme = useContext(themeContext).theme;

  /* --- Set default props --- */
  const styles = headerConfig.styles;
  const { variant, className, ...restProps } = { ...headerConfig.defaultProps, ...props };

  /* --- Set props --- */
  const mergedClassName = mergeClasses(styles.base, styles.variants[variant][theme], className);

  return (
    <header
      role="banner"
      className={mergedClassName}
      ref={ref}
      {...restProps}
    />
  );
});

Header.displayName = 'Header';

export default Header;
