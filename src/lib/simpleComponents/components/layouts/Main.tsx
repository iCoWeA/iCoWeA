import React, { type BaseHTMLAttributes, forwardRef, useContext } from 'react';
import themeContext from '../../contexts/theme';
import mainConfig from '../../configs/mainConfig';
import { mergeProps, mergeClasses } from '../../utils/propsHelper';

export interface MainProps extends BaseHTMLAttributes<HTMLElement> {
  color?: Colors;
  className?: string;
}

const Main = forwardRef<HTMLElement, MainProps>((props, ref) => {
  /* --- Set context props --- */
  const { theme } = useContext(themeContext);

  /* --- Set default props --- */
  const { defaultProps, styles } = mainConfig;
  const { color, className, ...restProps } = mergeProps(defaultProps, props);

  /* --- Set props --- */
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
