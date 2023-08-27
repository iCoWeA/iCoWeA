import React, { type BaseHTMLAttributes, forwardRef, useContext } from 'react';
import themeContext from '../../contexts/theme';
import { mergeProps, mergeClasses } from '../../utils/propsHelper';

export interface HeaderProps extends BaseHTMLAttributes<HTMLElement> {
  color?: Colors;
  flex?: boolean;
  className?: string;
}

const Header = forwardRef<HTMLElement, HeaderProps>((props, ref) => {
  const { theme, config } = useContext(themeContext);
  const { defaultProps, styles } = config.header;
  const { color, flex, className, ...restProps } = mergeProps(defaultProps, props);

  const mergedClassName = mergeClasses(styles.base, styles.colors[theme][color], flex && styles.flex, className);

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
