import React, { forwardRef } from 'react';
import footerConfig from '../../configs/footerConfig';
import { mergeClasses } from '../../utils/utils';
import Box, { type BoxProps } from '../UI/Box';

/* ARIA
 *
 * Set aria-label to multiple region
 *
 */

export interface FooterProps extends BoxProps {
  variant?: BoxVariants;
  color?: Colors;
  divider?: TextVariants;
  fullwidth?: boolean;
  containerProps?: BoxProps;
}

const Footer = forwardRef<HTMLElement, FooterProps>((props, ref) => {
  /* --- Set default props --- */
  const styles = footerConfig.styles;
  const { variant, color, divider, fullwidth, containerProps, className, children, ...restProps } = { ...footerConfig.defaultProps, ...props };

  /* --- Set classes --- */
  const mergedClassName = mergeClasses(styles.base, divider !== undefined && styles.divider, className);

  return (
    <footer
      role="contentinfo"
      ref={ref}
      {...containerProps}
    >
      <Box
        layout={fullwidth ? 'dashboard' : 'fullbleed'}
        gap="lg"
        variant={variant}
        color={color}
        className={mergedClassName}
        {...restProps}
      >
        {children}
      </Box>
    </footer>
  );
});

Footer.displayName = 'Footer';

export default Footer;
