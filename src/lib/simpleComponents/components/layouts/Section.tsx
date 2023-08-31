import React, { type BaseHTMLAttributes, forwardRef, useContext } from 'react';
import themeContext from '../../contexts/theme';
import sectionConfig from '../../configs/sectionConfig';
import { mergeClasses } from '../../utils/propsHelper';

export interface SectionProps extends BaseHTMLAttributes<HTMLElement> {
  color?: Colors;
}

const Section = forwardRef<HTMLElement, SectionProps>((props, ref) => {
  /* --- Set context props --- */
  const theme = useContext(themeContext).theme;

  /* --- Set default props --- */
  const styles = sectionConfig.styles;
  const { color, className, ...restProps } = { ...sectionConfig.defaultProps, ...props };

  /* --- Set props --- */
  const mergedClassName = mergeClasses(styles.base, styles.colors[theme][color], className);

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
