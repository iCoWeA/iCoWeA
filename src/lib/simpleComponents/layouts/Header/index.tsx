import React, { type BaseHTMLAttributes, forwardRef, useContext } from 'react';
import { twMerge } from 'tailwind-merge';
import themeContext from '../../contexts/theme';
import { mergeClasses } from '../../utils/styleHelper';

export interface HeaderDefaultProps {
  color?: Colors;
}

export interface HeaderProps
  extends HeaderDefaultProps,
  BaseHTMLAttributes<HTMLElement> {}

const Header = forwardRef<HTMLElement, HeaderProps>(
  ({ color, className: rootClassNames, ...restRootProps }, rootRef) => {
    const { theme, config } = useContext(themeContext);
    const { defaultProps, styles } = config.header;
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
      <header
        className={rootClassName}
        ref={rootRef}
        {...restRootProps}
      />
    );
  }
);

Header.displayName = 'Header';

export default Header;
