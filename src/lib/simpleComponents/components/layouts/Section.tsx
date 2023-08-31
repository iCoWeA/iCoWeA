import React, { type BaseHTMLAttributes, forwardRef, useContext } from 'react';
import themeContext from '../../contexts/theme';
import sectionConfig from '../../configs/sectionConfig';
import { mergeProps, mergeClasses } from '../../utils/propsHelper';

export interface SectionProps extends BaseHTMLAttributes<HTMLElement> {
  color?: Colors;
  className?: string;
}

const Section = forwardRef<HTMLElement, SectionProps>((props, ref) => {
  /* --- Set context props --- */
  const { theme } = useContext(themeContext);

  /* --- Set default props --- */
  const { defaultProps, styles } = sectionConfig;
  const { color, className, ...restProps } = mergeProps(defaultProps, props);

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
