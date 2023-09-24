import React, { type BaseHTMLAttributes, forwardRef, useContext } from 'react';
import sectionConfig from '../../configs/sectionConfig';
import themeContext from '../../contexts/theme';
import { mergeClasses } from '../../utils/utils';
import Box, { type BoxProps } from '../UI/Box';

/* ARIA
 *
 * Set aria-labeledby to multiple region (aria-label)
 *
 */

export interface SectionProps extends BaseHTMLAttributes<HTMLElement> {
  variant?: Variants;
  layout?: Layouts;
  containerProps?: BoxProps;
}

const Section = forwardRef<HTMLElement, SectionProps>((props, ref) => {
  /* --- Set context props --- */
  const theme = useContext(themeContext).theme;

  /* --- Set default props --- */
  const styles = sectionConfig.styles;
  const { variant, layout, containerProps, className, children, ...restProps } = { ...sectionConfig.defaultProps, ...props };

  /* --- Set props --- */
  const mergedClassName = mergeClasses(styles.base, styles.variants[variant][theme], className);

  return (
    <section
      className={mergedClassName}
      ref={ref}
      {...restProps}
    >
      <Box
        variant={layout}
        {...containerProps}
      >
        {children}
      </Box>
    </section>
  );
});

Section.displayName = 'Section';

export default Section;
