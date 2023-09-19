import React, { type BaseHTMLAttributes, forwardRef } from 'react';
import menuBodyConfig from '../../configs/menuBodyConfig';
import { mergeClasses } from '../../utils/propsHelper';

export interface MenuBodyProps extends BaseHTMLAttributes<HTMLUListElement> {}

const MenuBody = forwardRef<HTMLUListElement, MenuBodyProps>((props, ref) => {
  /* --- Set default props --- */
  const styles = menuBodyConfig.styles;
  const { className, ...restProps } = { ...props };

  /* --- Set props --- */
  const mergedClassName = mergeClasses(styles.base, className);

  return (
    <ul
      className={mergedClassName}
      ref={ref}
      {...restProps}
    />
  );
});

MenuBody.displayName = 'MenuBody';

export default MenuBody;
