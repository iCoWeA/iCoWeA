import React, { type BaseHTMLAttributes, forwardRef } from 'react';
import menuHeaderConfig from '../../configs/menuHeaderConfig';
import { mergeClasses } from '../../utils/propsHelper';

export interface MenuHeaderProps extends BaseHTMLAttributes<HTMLDivElement> {}

const MenuHeader = forwardRef<HTMLDivElement, MenuHeaderProps>((props, ref) => {
  /* --- Set default props --- */
  const styles = menuHeaderConfig.styles;
  const { className, ...restProps } = { ...props };

  /* --- Set props --- */
  const mergedClassName = mergeClasses(styles.base, className);

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
