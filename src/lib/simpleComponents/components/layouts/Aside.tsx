import React, { type BaseHTMLAttributes, forwardRef, useContext } from 'react';
import asideConfig from '../../configs/asideConfig';
import themeContext from '../../contexts/theme';
import { mergeClasses } from '../../utils/propsHelper';

/* ARIA
 *
 * Set aria-labeledby to multiple region
 *
 */

export type AsideVariants = 'plain' | 'filled';

export interface AsideProps extends BaseHTMLAttributes<HTMLElement> {
  variant?: AsideVariants;
}

const Aside = forwardRef<HTMLElement, AsideProps>((props, ref) => {
  /* --- Set context props --- */
  const theme = useContext(themeContext).theme;

  /* --- Set default props --- */
  const styles = asideConfig.styles;
  const { variant, className, ...restProps } = { ...asideConfig.defaultProps, ...props };

  /* --- Set props --- */
  const mergedClassName = mergeClasses(styles.base, styles.variants[variant][theme], className);

  return (
    <aside
      className={mergedClassName}
      ref={ref}
      {...restProps}
    />
  );
});

Aside.displayName = 'Aside';

export default Aside;
