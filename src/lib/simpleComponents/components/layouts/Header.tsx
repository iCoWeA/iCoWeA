import React, { type BaseHTMLAttributes, forwardRef } from 'react';
import headerConfig from '../../configs/headerConfig';
import { mergeClasses } from '../../utils/utils';
import Box, { type BoxProps } from '../UI/Box';

/* ARIA
 *
 * Set aria-label to multiple region
 *
 */

export interface HeaderProps extends BoxProps {
  divider?: TextVariants;
  fullwidth?: boolean;
  containerProps?: BaseHTMLAttributes<HTMLElement>;
}

const Header = forwardRef<HTMLElement, HeaderProps>((props, ref) => {
  /* --- Set default props --- */
  const styles = headerConfig.styles;
  const { divider, fullwidth, containerProps, className, children, ...restProps } = { ...headerConfig.defaultProps.box, ...props };
  const mergedContainerProps = { ...headerConfig.defaultProps.container, ...containerProps };

  /* --- Set classes --- */
  const mergedClassName = mergeClasses(styles.base, divider !== undefined && styles.divider, className);

  return (
    <header
      ref={ref}
      {...mergedContainerProps}
    >
      <Box
        layout={fullwidth ? 'dashboard' : 'fullbleed'}
        outlined={divider}
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
