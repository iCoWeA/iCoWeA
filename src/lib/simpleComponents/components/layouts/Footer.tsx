import React, { type BaseHTMLAttributes, forwardRef, useContext } from 'react';
import footerConfig from '../../configs/footerConfig';
import themeContext from '../../contexts/theme';
import { mergeClasses } from '../../utils/propsHelper';

/* ARIA
 *
 * Set aria-label to multiple region
 *
 */

export type FooterVariants = 'plain' | 'filled';

export interface FooterProps extends BaseHTMLAttributes<HTMLElement> {
  variant?: FooterVariants;
}

const Footer = forwardRef<HTMLElement, FooterProps>((props, ref) => {
  /* --- Set context props --- */
  const theme = useContext(themeContext).theme;

  /* --- Set default props --- */
  const styles = footerConfig.styles;
  const { variant, className, ...restProps } = { ...footerConfig.defaultProps, ...props };

  /* --- Set props --- */
  const mergedClassName = mergeClasses(styles.base, styles.variants[variant][theme], className);

  return (
    <footer
      role="contentinfo"
      className={mergedClassName}
      ref={ref}
      {...restProps}
    />
  );
});

Footer.displayName = 'Footer';

export default Footer;
