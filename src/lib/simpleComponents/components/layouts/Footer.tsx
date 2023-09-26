import React, { type BaseHTMLAttributes, forwardRef } from 'react';
import footerConfig from '../../configs/footerConfig';
import { mergeClasses } from '../../utils/utils';
import Box, { type BoxProps } from '../UI/Box';

/* ARIA
 *
 * Set aria-label to multiple region
 *
 */

export interface FooterProps extends BoxProps {
  divider?: TextVariants;
  fullwidth?: boolean;
  containerProps?: BaseHTMLAttributes<HTMLElement>;
}

const Footer = forwardRef<HTMLElement, FooterProps>((props, ref) => {
  /* --- Set default props --- */
  const styles = footerConfig.styles;
  const { divider, fullwidth, containerProps, className, children, ...restProps } = { ...footerConfig.defaultProps.box, ...props };
  const mergedContainerProps = { ...footerConfig.defaultProps.container, ...containerProps };

  /* --- Set classes --- */
  const mergedClassName = mergeClasses(styles.base, divider !== undefined && styles.divider, className);

  return (
    <footer
      ref={ref}
      {...mergedContainerProps}
    >
      <Box
        layout={fullwidth ? 'dashboard' : 'fullbleed'}
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
