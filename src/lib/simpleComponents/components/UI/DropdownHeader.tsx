import React, { type BaseHTMLAttributes, forwardRef } from 'react';
import dropdownHeaderConfig from '../../configs/dropdownHeaderConfig';
import { mergeClasses } from '../../utils/propsHelper';

export interface DropdownHeaderProps extends BaseHTMLAttributes<HTMLDivElement> {}

const DropdownHeader = forwardRef<HTMLDivElement, DropdownHeaderProps>((props, ref) => {
  /* --- Set default props --- */
  const styles = dropdownHeaderConfig.styles;
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

DropdownHeader.displayName = 'DropdownHeader';

export default DropdownHeader;
