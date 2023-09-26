import React, { type BaseHTMLAttributes, forwardRef, useContext } from 'react';
import footerConfig from '../../configs/footerConfig';
import themeContext from '../../contexts/theme';
import { mergeClasses } from '../../utils/utils';
import Box, { type BoxProps } from '../UI/Box';

/* ARIA
 *
 * Set aria-label to multiple region
 *
 */

export interface FooterProps extends BaseHTMLAttributes<HTMLElement> {
  variant?: Variants;
  color?: Colors;
  fullwidth?: boolean;
  boxProps?: BoxProps;
}

const Footer = forwardRef<HTMLElement, FooterProps>((props, ref) => {
  /* --- Set context props --- */
  const theme = useContext(themeContext).theme;

  /* --- Set default props --- */
  const styles = footerConfig.styles;
  const { variant, color, fullwidth, boxProps, className, children, ...restProps } = { ...footerConfig.defaultProps, ...props };

  /* --- Set classes --- */
  const mergedClassName = mergeClasses(styles.base, styles.variants[variant][theme][color], className);

  return (
    <footer
      className={mergedClassName}
      ref={ref}
      {...restProps}
    >
      <Box
        layout={fullwidth ? 'dashboard' : 'fullbleed'}
        gap="lg"
        variant="plain"
        color={color}
        {...boxProps}
      >
        {children}
      </Box>
    </footer>
  );
});

Footer.displayName = 'Footer';

export default Footer;
