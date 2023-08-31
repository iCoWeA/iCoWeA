import React, { type BaseHTMLAttributes, forwardRef } from 'react';
import menuFooterConfig from '../../../configs/menuFooterConfig';
import { mergeClasses } from '../../../utils/propsHelper';

export interface MenuFooterProps extends BaseHTMLAttributes<HTMLDivElement> {
  columns?: boolean;
  fullwidht?: boolean;
  className?: string;
}

const MenuFooter = forwardRef<HTMLDivElement, MenuFooterProps>((props, ref) => {
  /* --- Set default props --- */
  const styles = menuFooterConfig.styles;
  const { columns, fullwidht, className, ...restProps } = { ...menuFooterConfig.defaultProps, ...props };

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

MenuFooter.displayName = 'MenuFooter';

export default MenuFooter;
