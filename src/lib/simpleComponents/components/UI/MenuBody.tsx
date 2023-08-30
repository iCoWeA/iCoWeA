import React, { type BaseHTMLAttributes, forwardRef, useContext } from 'react';
import themeContext from '../../contexts/theme';
import { mergeClasses, mergeProps } from '../../utils/propsHelper';

export interface MenuBodyProps extends BaseHTMLAttributes<HTMLDivElement> {
  columns?: boolean;
  fullwidht?: boolean;
  className?: string;
}

const MenuBody = forwardRef<HTMLDivElement, MenuBodyProps>((props, ref) => {
  /* --- Set default props --- */
  const { config } = useContext(themeContext);
  const { defaultProps, styles } = config.menuBody;
  const { columns, fullwidht, className, ...restProps } = mergeProps(defaultProps, props);

  /* --- Set props --- */
  const mergedClassName = mergeClasses(styles.base, columns && styles.columns, fullwidht && styles.fullwidth, className);

  return (
    <div
      className={mergedClassName}
      ref={ref}
      {...restProps}
    />
  );
});

MenuBody.displayName = 'MenuBody';

export default MenuBody;
