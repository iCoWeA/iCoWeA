/* --- ARIA ---
 * aria-labelledby
 */

import React, { type BaseHTMLAttributes, forwardRef } from 'react';

import useConfig from '../../../hooks/useConfig';
import { mergeClasses } from '../../../utils/utils';
import sectionConfig from './sectionConfig';

export type SectionProps = BaseHTMLAttributes<HTMLElement>;

const Section = forwardRef<HTMLElement, SectionProps>((props, ref) => {
  const { defaultClassName, className, ...restProps } = useConfig(
    'section',
    sectionConfig.defaultProps,
    props
  );

  /* --- Set classes --- */
  const styles = sectionConfig.styles;

  const mergedClassName = mergeClasses(styles.base, defaultClassName, className);

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
