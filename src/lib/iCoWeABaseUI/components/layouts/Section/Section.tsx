/* --- ARIA ---
 * aria-labelledby
 */

import React, { type BaseHTMLAttributes, forwardRef, useMemo } from 'react';

import { mergeClasses } from '../../../../iCoWeAUI/utils/utils';
import useConfig from '../../../hooks/useConfig';
import sectionConfig from './sectionConfig';

export type SectionProps = BaseHTMLAttributes<HTMLElement>;

const Section = forwardRef<HTMLElement, SectionProps>((props, ref) => {
  const { defaultClassName, className, ...restProps } = useConfig(
    'section',
    sectionConfig.defaultProps,
    props
  );

  /* --- Set classes --- */
  const mergedClassName = useMemo(() => {
    const styles = sectionConfig.styles;

    return mergeClasses(styles.base, defaultClassName, className);
  }, [defaultClassName, className]);

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
