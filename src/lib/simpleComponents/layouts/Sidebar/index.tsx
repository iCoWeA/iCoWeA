import React, { type BaseHTMLAttributes, forwardRef, useContext } from 'react';
import { twMerge } from 'tailwind-merge';
import themeContext from '../../contexts/theme';
import { mergeClasses } from '../../utils/styleHelper';

export interface SidebarDefaultProps {
  color?: Colors;
}

export interface SidebarProps
  extends SidebarDefaultProps,
  BaseHTMLAttributes<HTMLElement> {}

const Sidebar = forwardRef<HTMLElement, SidebarProps>(
  ({ color, className: rootClassNames, ...restRootProps }, rootRef) => {
    const { theme, config } = useContext(themeContext);
    const { defaultProps, styles } = config.sidebar;
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
      <aside
        className={rootClassName}
        ref={rootRef}
        {...restRootProps}
      />
    );
  }
);

Sidebar.displayName = 'Sidebar';

export default Sidebar;
