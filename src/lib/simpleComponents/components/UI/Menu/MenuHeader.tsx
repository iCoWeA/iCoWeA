import React, { type BaseHTMLAttributes, forwardRef } from 'react';
import menuHeaderConfig from '../../../configs/menuHeaderConfig';
import { mergeClasses } from '../../../utils/propsHelper';

export interface MenuHeaderProps extends BaseHTMLAttributes<HTMLDivElement> {
  columns?: boolean;
  fullwidht?: boolean;
  className?: string;
}

const MenuHeader = forwardRef<HTMLDivElement, MenuHeaderProps>((props, ref) => {
  /* --- Set default props --- */
  const styles = menuHeaderConfig.styles;
  const { columns, fullwidht, className, ...restProps } = { ...menuHeaderConfig.defaultProps, ...props };

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
