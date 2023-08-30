import React, { type BaseHTMLAttributes, forwardRef, useContext } from 'react';
import themeContext from '../../contexts/theme';
import { mergeProps, mergeClasses } from '../../utils/propsHelper';

export interface HeaderProps extends BaseHTMLAttributes<HTMLElement> {
  color?: Colors;
  className?: string;
}

const Header = forwardRef<HTMLElement, HeaderProps>((props, ref) => {
  /* --- Set default props --- */
  const { theme, config } = useContext(themeContext);
  const { defaultProps, styles } = config.header;
  const { color, className, ...restProps } = mergeProps(defaultProps, props);

  /* --- Set props --- */
  const mergedClassName = mergeClasses(styles.base, styles.colors[theme][color], className);

  return (
    <header
      className={mergedClassName}
      ref={ref}
      {...restProps}
    />
  );
});

Header.displayName = 'Header';

export default Header;
