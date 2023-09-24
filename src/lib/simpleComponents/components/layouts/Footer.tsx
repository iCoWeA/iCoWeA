import React, { type BaseHTMLAttributes, forwardRef, useContext } from 'react';
import footerConfig from '../../configs/footerConfig';
import themeContext from '../../contexts/theme';
import { mergeClasses } from '../../utils/utils';
import Container, { type ContainerProps } from '../UI/Container';

/* ARIA
 *
 * Set aria-label to multiple region
 *
 */

export interface FooterProps extends BaseHTMLAttributes<HTMLElement> {
  variant?: Variants;
  layout?: Layouts;
  containerProps?: ContainerProps;
}

const Footer = forwardRef<HTMLElement, FooterProps>((props, ref) => {
  /* --- Set context props --- */
  const theme = useContext(themeContext).theme;

  /* --- Set default props --- */
  const styles = footerConfig.styles;
  const { variant, layout, containerProps, className, children, ...restProps } = { ...footerConfig.defaultProps, ...props };

  /* --- Set props --- */
  const mergedClassName = mergeClasses(styles.base, styles.variants[variant][theme], className);

  return (
    <footer
      className={mergedClassName}
      ref={ref}
      {...restProps}
    >
      <Container
        variant={layout}
        {...containerProps}
      >
        {children}
      </Container>
    </footer>
  );
});

Footer.displayName = 'Footer';

export default Footer;
