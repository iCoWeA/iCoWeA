/* --- ARIA ---
 * aria-labelledby
 */

import React, { type BaseHTMLAttributes, forwardRef } from 'react';

import useConfig from '../../../hooks/useConfig';
import useTheme from '../../../hooks/useTheme';
import { mergeClasses } from '../../../utils/utils';
import sectionConfig from './sectionConfig';

export type SectionDefaultProps = {
  variant?: Variants;
  color?: Colors;
  border?: Borders;
};

export type SectionProps = BaseHTMLAttributes<HTMLElement> & SectionDefaultProps;

const Section = forwardRef<HTMLElement, SectionProps>((props, ref) => {
  const { variant, color, border, defaultClassName, className, ...restProps } = useConfig(
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
    typeof border === 'string' && border !== 'none' && styles.borders[border],
    typeof border === 'boolean' && border && styles.borders.all,
    defaultClassName,
    className
  );

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
