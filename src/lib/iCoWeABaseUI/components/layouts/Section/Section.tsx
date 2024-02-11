/* --- ARIA ---
 * aria-labelledby
 */

import React, { type BaseHTMLAttributes, forwardRef, useMemo } from 'react';

import useTheme from '../../../../iCoWeAUI/hooks/useTheme';
import { mergeClasses } from '../../../../iCoWeAUI/utils/utils';
import useConfig from '../../../hooks/useConfig';
import { getBorderType, getBorderVariant } from '../../../utils/utils';
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
  const mergedClassName = useMemo(() => {
    const styles = sectionConfig.styles;
    const borderType = getBorderType(border);
    const borderVariant = getBorderVariant(variant);

    return mergeClasses(
      styles.base,
      borderType !== 'none' && styles.borders[borderType],
      color !== 'inherit' && styles.variants[variant][theme][color],
      color !== 'inherit' &&
        borderType !== 'none' &&
        styles.borderVariants[borderVariant][theme][color],
      defaultClassName,
      className
    );
  }, [border, variant, theme, color, defaultClassName, className]);

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
