import React, { type BaseHTMLAttributes, forwardRef } from 'react';

import useConfig from '../../../hooks/useConfig';
import { mergeClasses } from '../../../utils/utils';
import footerConfig from './footerConfig';

/* --- ARIA ---
 * aria-labelledby
 */

export type FooterProps = BaseHTMLAttributes<HTMLElement>;

const Footer = forwardRef<HTMLElement, FooterProps>((props, ref) => {
  const { defaultClassName, className, ...restProps } = useConfig(
    'footer',
    footerConfig.defaultProps,
    props
  );

  /* --- Set classes --- */
  const styles = footerConfig.styles;

  const mergedClassName = mergeClasses(styles.base, defaultClassName, className);

  return (
    <footer
      className={mergedClassName}
      ref={ref}
      {...restProps}
    ></footer>
  );
});

Footer.displayName = 'Footer';

export default Footer;
