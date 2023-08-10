import React, { type BaseHTMLAttributes, forwardRef, useContext } from 'react';
import { twMerge } from 'tailwind-merge';
import themeContext from '../../contexts/theme';
import { mergeClasses } from '../../utils/styleHelper';

export interface SectionDefaultProps {
  color?: Colors;
}

export interface SectionProps
  extends SectionDefaultProps,
  BaseHTMLAttributes<HTMLElement> {}

const Section = forwardRef<HTMLElement, SectionProps>(
  ({ color, className: rootClassNames, ...restRootProps }, rootRef) => {
    const { theme, config } = useContext(themeContext);
    const { defaultProps, styles } = config.section;
    const rootClasses = styles.root;

    color = color ?? defaultProps.color;

    const rootClassName = twMerge(
      mergeClasses(
        rootClasses.base,
        rootClasses.colors[theme][color],
        rootClassNames
      )
    );

    return (
      <section
        className={rootClassName}
        ref={rootRef}
        {...restRootProps}
      />
    );
  }
);

Section.displayName = 'Section';

export default Section;
