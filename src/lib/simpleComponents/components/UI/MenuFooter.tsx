import React, { type BaseHTMLAttributes, forwardRef } from 'react';
import menuFooterConfig from '../../configs/menuFooterConfig';
import { mergeClasses } from '../../utils/propsHelper';

export interface MenuFooterProps extends BaseHTMLAttributes<HTMLDivElement> {}

const MenuFooter = forwardRef<HTMLDivElement, MenuFooterProps>((props, ref) => {
  /* --- Set default props --- */
  const styles = menuFooterConfig.styles;
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

MenuFooter.displayName = 'MenuFooter';

export default MenuFooter;
