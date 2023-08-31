import React, { type BaseHTMLAttributes, forwardRef } from 'react';
import menuBodyConfig from '../../../configs/menuBodyConfig';
import { mergeClasses } from '../../../utils/propsHelper';

export interface MenuBodyProps extends BaseHTMLAttributes<HTMLDivElement> {
  columns?: boolean;
  fullwidht?: boolean;
  className?: string;
}

const MenuBody = forwardRef<HTMLDivElement, MenuBodyProps>((props, ref) => {
  /* --- Set default props --- */
  const styles = menuBodyConfig.styles;
  const { columns, fullwidht, className, ...restProps } = { ...menuBodyConfig.defaultProps, ...props };

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
