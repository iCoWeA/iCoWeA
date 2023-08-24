import React, { type BaseHTMLAttributes, forwardRef, useContext } from 'react';
import themeContext from '../../contexts/theme';
import { mergeClasses, mergeProps } from '../../utils/propsHelper';

export interface MenuFooterProps extends BaseHTMLAttributes<HTMLDivElement> {
  columns?: boolean;
  fullwidht?: boolean;
  className?: string;
}

const MenuFooter = forwardRef<HTMLDivElement, MenuFooterProps>((props, ref) => {
  const { config } = useContext(themeContext);
  const { defaultProps, styles } = config.menuFooter;
  const { columns, fullwidht, className, ...restProps } = mergeProps(defaultProps, props);

  /* Set props */
  const mergedClassName = mergeClasses(styles.base, columns && styles.columns, fullwidht && styles.fullwidth, className);

  return (
    <div
      className={mergedClassName}
      ref={ref}
      {...restProps}
    />
  );
});

MenuFooter.displayName = 'MenuFooter';

export default MenuFooter;
