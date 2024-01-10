/* ARIA
 *
 * Set aria-labeledby to multiple region (aria-label)
 *
 */

import React, { type BaseHTMLAttributes, forwardRef } from 'react';

import useConfig from '../../../hooks/useConfig';
import useTheme from '../../../hooks/useTheme';
import { mergeClasses } from '../../../utils/utils';
import sectionConfig from './sectionConfig';

export type SectionDefaultProps = {
  variant?: Variants;
  color?: Colors;
  bordered?: boolean;
};

export type SectionProps = BaseHTMLAttributes<HTMLElement> & SectionDefaultProps;

const Section = forwardRef<HTMLElement, SectionProps>((props, ref) => {
  const { variant, color, bordered, defaultClassName, className, ...restProps } = useConfig(
    'section',
    sectionConfig.defaultProps,
    props
  );
  const theme = useTheme();

  /* --- Set classes --- */
  const styles = sectionConfig.styles;

  const mergedClassName = mergeClasses(
    styles.base,
    styles.variants[variant][theme][color],
    bordered && styles.border,
    defaultClassName,
    className
  );

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
