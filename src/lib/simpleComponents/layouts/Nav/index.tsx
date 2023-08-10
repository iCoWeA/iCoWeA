import React, { type BaseHTMLAttributes, forwardRef, useContext } from 'react';
import { twMerge } from 'tailwind-merge';
import themeContext from '../../contexts/theme';
import { mergeClasses } from '../../utils/styleHelper';

export interface NavDefaultProps {
  color?: Colors;
}

export interface NavProps
  extends NavDefaultProps,
  BaseHTMLAttributes<HTMLElement> {}

const Nav = forwardRef<HTMLElement, NavProps>(
  ({ color, className: rootClassNames, ...restRootProps }, rootRef) => {
    const { theme, config } = useContext(themeContext);
    const { defaultProps, styles } = config.nav;
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
      <nav
        className={rootClassName}
        ref={rootRef}
        {...restRootProps}
      />
    );
  }
);

Nav.displayName = 'Nav';

export default Nav;
