import React, { type BaseHTMLAttributes, forwardRef, useContext } from 'react';
import headerConfig from '../../configs/headerConfig';
import themeContext from '../../contexts/theme';
import { mergeClasses } from '../../utils/utils';
import Box, { type BoxProps } from '../UI/Box';

/* ARIA
 *
 * Set aria-label to multiple region
 *
 */

export interface HeaderProps extends BaseHTMLAttributes<HTMLElement> {
  variant?: Variants;
  fullwidth?: boolean;
  elevated?: boolean;
  boxProps?: BoxProps;
}

const Header = forwardRef<HTMLElement, HeaderProps>((props, ref) => {
  /* --- Set context props --- */
  const theme = useContext(themeContext).theme;

  /* --- Set default props --- */
  const styles = headerConfig.styles;
  const { variant, fullwidth, elevated, boxProps, className, children, ...restProps } = { ...headerConfig.defaultProps, ...props };

  /* --- Set props --- */
  const mergedClassName = mergeClasses(styles.base, styles.variants[variant][theme], elevated && styles.elevated, className);

  return (
    <header
      className={mergedClassName}
      ref={ref}
      {...restProps}
    >
      <Box {...{ ...headerConfig.defaultProps.boxProps, variant: fullwidth ? 'dashboard' : 'fullbleed', ...boxProps }}>{children}</Box>
    </header>
  );
});

Header.displayName = 'Header';

export default Header;
