import React, { type BaseHTMLAttributes, forwardRef, useContext } from 'react';
import { twMerge } from 'tailwind-merge';
import themeContext from '../../contexts/theme';
import { mergeClasses } from '../../utils/styleHelper';

export interface MainDefaultProps {
  color?: Colors;
}

export interface MainProps
  extends MainDefaultProps,
  BaseHTMLAttributes<HTMLElement> {}

const Main = forwardRef<HTMLElement, MainProps>(
  ({ color, className: rootClassNames, ...restRootProps }, rootRef) => {
    const { theme, config } = useContext(themeContext);
    const { defaultProps, styles } = config.main;
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
      <main
        className={rootClassName}
        ref={rootRef}
        {...restRootProps}
      />
    );
  }
);

Main.displayName = 'Main';

export default Main;
