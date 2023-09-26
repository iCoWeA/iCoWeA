import React, { forwardRef } from 'react';
import headerConfig from '../../configs/headerConfig';
import { mergeClasses } from '../../utils/utils';
import Box, { type BoxProps } from '../UI/Box';

/* ARIA
 *
 * Set aria-label to multiple region
 *
 */

export interface HeaderProps extends BoxProps {
  variant?: BoxVariants;
  color?: Colors;
  divider?: TextVariants;
  elevated?: boolean;
  fullwidth?: boolean;
  containerProps?: BoxProps;
}

const Header = forwardRef<HTMLElement, HeaderProps>((props, ref) => {
  const styles = headerConfig.styles;
  const { variant, color, divider, elevated, fullwidth, containerProps, className, children, ...restProps } = { ...headerConfig.defaultProps, ...props };

  /* --- Set classes --- */
  const mergedClassName = mergeClasses(styles.base, divider !== undefined && styles.divider, className);

  return (
    <header
      role="banner"
      ref={ref}
      {...containerProps}
    >
      <Box
        layout={fullwidth ? 'dashboard' : 'fullbleed'}
        gap="lg"
        variant={variant}
        color={color}
        elevated={elevated}
        className={mergedClassName}
        {...restProps}
      >
        {children}
      </Box>
    </header>
  );
});

Header.displayName = 'Header';

export default Header;
