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
  color?: Colors;
  elevated?: boolean;
  fullwidth?: boolean;
  boxProps?: BoxProps;
}

const Header = forwardRef<HTMLElement, HeaderProps>((props, ref) => {
  /* --- Set context props --- */
  const theme = useContext(themeContext).theme;

  /* --- Set default props --- */
  const styles = headerConfig.styles;
  const { variant, color, elevated, fullwidth, boxProps, className, children, ...restProps } = { ...headerConfig.defaultProps, ...props };

  /* --- Set classes --- */
  const mergedClassName = mergeClasses(styles.base, styles.variants[variant][theme][color], elevated && styles.elevated, className);

  return (
    <header
      className={mergedClassName}
      ref={ref}
      {...restProps}
    >
      <Box
        layout={fullwidth ? 'dashboard' : 'fullbleed'}
        gap="lg"
        color={color}
        {...boxProps}
      >
        {children}
      </Box>
    </header>
  );
});

Header.displayName = 'Header';

export default Header;
