import React, { type BaseHTMLAttributes, forwardRef } from 'react';
import sectionConfig from '../../configs/sectionConfig';
import { mergeClasses } from '../../utils/utils';

/* ARIA
 *
 * Set aria-labeledby to multiple region (aria-label)
 *
 */

export interface SectionProps extends BaseHTMLAttributes<HTMLElement> {}

const Section = forwardRef<HTMLElement, SectionProps>((props, ref) => {
  /* --- Set default props --- */
  const styles = sectionConfig.styles;
  const { className, ...restProps } = { ...props };

  /* --- Set classes --- */
  const mergedClassName = mergeClasses(styles.base, className);

  return (
    <section
      role="region"
      className={mergedClassName}
      ref={ref}
      {...restProps}
    />
  );
});

Section.displayName = 'Section';

export default Section;
