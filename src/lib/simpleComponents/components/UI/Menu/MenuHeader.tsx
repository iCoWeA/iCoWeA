import React, { type BaseHTMLAttributes, forwardRef } from 'react';
import menuHeaderConfig from '../../../configs/menuHeaderConfig';
import { mergeClasses, mergeProps } from '../../../utils/propsHelper';

export interface MenuHeaderProps extends BaseHTMLAttributes<HTMLDivElement> {
  columns?: boolean;
  fullwidht?: boolean;
  className?: string;
}

const MenuHeader = forwardRef<HTMLDivElement, MenuHeaderProps>((props, ref) => {
  /* --- Set default props --- */
  const { defaultProps, styles } = menuHeaderConfig;
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

MenuHeader.displayName = 'MenuHeader';

export default MenuHeader;
