import React, { type BaseHTMLAttributes, forwardRef, useContext } from 'react';
import { type MainColors } from '../../configs/mainConfig';
import themeContext from '../../contexts/theme';
import { mergeProps, mergeClasses } from '../../utils/propsHelper';

export interface MainProps extends BaseHTMLAttributes<HTMLElement> {
  color?: MainColors;
  className?: string;
}

const Main = forwardRef<HTMLElement, MainProps>((props, ref) => {
  const { theme, config } = useContext(themeContext);
  const { defaultProps, styles } = config.main;
  const { color, className, ...restProps } = mergeProps(defaultProps, props);

  const mergedClassName = mergeClasses(styles.base, styles.colors[theme][color], className);

  return (
    <main
      className={mergedClassName}
      ref={ref}
      {...restProps}
    />
  );
});

Main.displayName = 'Main';

export default Main;
