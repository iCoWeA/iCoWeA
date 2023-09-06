import React, { type BaseHTMLAttributes, forwardRef, useContext } from 'react';
import mainConfig from '../../configs/mainConfig';
import themeContext from '../../contexts/theme';
import { mergeClasses } from '../../utils/propsHelper';

export interface MainProps extends BaseHTMLAttributes<HTMLElement> {
  color?: Colors;
}

const Main = forwardRef<HTMLElement, MainProps>((props, ref) => {
  /* --- Set context props --- */
  const theme = useContext(themeContext).theme;

  /* --- Set default props --- */
  const styles = mainConfig.styles;
  const { color, className, ...restProps } = { ...mainConfig.defaultProps, ...props };

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
