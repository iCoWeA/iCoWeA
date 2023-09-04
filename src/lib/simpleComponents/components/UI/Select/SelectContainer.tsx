import React, { type BaseHTMLAttributes, forwardRef } from 'react';
import selectConfig from '../../../configs/selectConfig';
import { mergeClasses } from '../../../utils/propsHelper';

interface SelectContainerProps extends BaseHTMLAttributes<HTMLDivElement> {
  open: boolean;
  value: string | number | readonly string[];
}

const SelectContainer = forwardRef<HTMLDivElement, SelectContainerProps>(({ open, value, className, ...restProps }, ref) => {
  /* --- Set default props --- */
  const styles = selectConfig.styles.container;

  /* --- Set props --- */
  const mergedClassName = mergeClasses(styles.base, value !== '' && styles.shifted, open && styles.focused, className);

  return (
    <div
      className={mergedClassName}
      ref={ref}
      {...restProps}
    />
  );
});

SelectContainer.displayName = 'SelectContainer';

export default SelectContainer;
