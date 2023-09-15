import React, { type BaseHTMLAttributes, forwardRef } from 'react';
import dropdownFooterConfig from '../../configs/dropdownFooterConfig';
import { mergeClasses } from '../../utils/propsHelper';

export interface DropdownFooterProps extends BaseHTMLAttributes<HTMLDivElement> {}

const DropdownFooter = forwardRef<HTMLDivElement, DropdownFooterProps>((props, ref) => {
  /* --- Set default props --- */
  const styles = dropdownFooterConfig.styles;
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

DropdownFooter.displayName = 'DropdownFooter';

export default DropdownFooter;
