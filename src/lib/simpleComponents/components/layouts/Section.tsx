import React, { type BaseHTMLAttributes, forwardRef } from 'react';
import sectionConfig from '../../configs/sectionConfig';
import { mergeClasses } from '../../utils/utils';

/* ARIA
 *
 * Set aria-labeledby to multiple region (aria-label)
 *
 */

export interface SectionProps extends BaseHTMLAttributes<HTMLElement> {
  gap?: Sizes;
}

const Section = forwardRef<HTMLElement, SectionProps>((props, ref) => {
  /* --- Set default props --- */
  const styles = sectionConfig.styles;
  const { gap, className, ...restProps } = { ...sectionConfig.defaultProps, ...props };

  /* --- Set props --- */
  const mergedClassName = mergeClasses(styles.base, gap !== undefined && styles.gaps[gap], className);

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
