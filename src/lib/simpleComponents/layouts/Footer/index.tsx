import React, { type BaseHTMLAttributes, forwardRef, useContext } from 'react';
import { twMerge } from 'tailwind-merge';
import themeContext from '../../contexts/theme';
import { mergeClasses } from '../../utils/styleHelper';

export interface FooterDefaultProps {
  color?: Colors;
}

export interface FooterProps
  extends FooterDefaultProps,
  BaseHTMLAttributes<HTMLElement> {}

const Footer = forwardRef<HTMLElement, FooterProps>(
  ({ color, className: rootClassNames, ...restRootProps }, rootRef) => {
    const { theme, config } = useContext(themeContext);
    const { defaultProps, styles } = config.footer;
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
      <footer
        className={rootClassName}
        ref={rootRef}
        {...restRootProps}
      />
    );
  }
);

Footer.displayName = 'Footer';

export default Footer;
