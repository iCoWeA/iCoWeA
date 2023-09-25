import React, { type BaseHTMLAttributes, forwardRef, useContext } from 'react';
import sectionConfig from '../../configs/sectionConfig';
import themeContext from '../../contexts/theme';
import { mergeClasses } from '../../utils/utils';

/* ARIA
 *
 * Set aria-labeledby to multiple region (aria-label)
 *
 */

export interface SectionProps extends BaseHTMLAttributes<HTMLElement> {
  variant?: Variants;
}

const Section = forwardRef<HTMLElement, SectionProps>((props, ref) => {
  /* --- Set context props --- */
  const theme = useContext(themeContext).theme;

  /* --- Set default props --- */
  const styles = sectionConfig.styles;
  const { variant, className, ...restProps } = { ...sectionConfig.defaultProps, ...props };

  /* --- Set props --- */
  const mergedClassName = mergeClasses(styles.base, styles.variants[variant][theme], className);

  return (
    <section
      className={mergedClassName}
      ref={ref}
      {...restProps}
    />
  );
});

Section.displayName = 'Section';

export default Section;
