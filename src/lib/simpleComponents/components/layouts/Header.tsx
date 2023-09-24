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
  layout?: Layouts;
  elevated?: boolean;
  containerProps?: BoxProps;
}

const Header = forwardRef<HTMLElement, HeaderProps>((props, ref) => {
  /* --- Set context props --- */
  const theme = useContext(themeContext).theme;

  /* --- Set default props --- */
  const styles = headerConfig.styles;
  const { variant, layout, elevated, containerProps, className, children, ...restProps } = { ...headerConfig.defaultProps, ...props };

  /* --- Set props --- */
  const mergedClassName = mergeClasses(styles.base, styles.variants[variant][theme], elevated && styles.elevated, className);

  return (
    <header
      className={mergedClassName}
      ref={ref}
      {...restProps}
    >
      <Box
        size="lg"
        variant={layout}
        {...containerProps}
      >
        {children}
      </Box>
    </header>
  );
});

Header.displayName = 'Header';

export default Header;
