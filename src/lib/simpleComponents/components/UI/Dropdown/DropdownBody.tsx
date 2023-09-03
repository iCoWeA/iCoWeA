import React, { type BaseHTMLAttributes, forwardRef } from 'react';
import dropdownBodyConfig from '../../../configs/dropdownBodyConfig';
import { mergeClasses } from '../../../utils/propsHelper';

export interface DropdownBodyProps extends BaseHTMLAttributes<HTMLDivElement> {
  columns?: boolean;
  fullwidht?: boolean;
}

const DropdownBody = forwardRef<HTMLDivElement, DropdownBodyProps>((props, ref) => {
  /* --- Set default props --- */
  const styles = dropdownBodyConfig.styles;
  const { columns, fullwidht, className, ...restProps } = { ...dropdownBodyConfig.defaultProps, ...props };

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

DropdownBody.displayName = 'DropdownBody';

export default DropdownBody;
