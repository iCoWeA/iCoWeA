import React, { type BaseHTMLAttributes, forwardRef } from 'react';
import checkboxConfig from '../../../configs/checkboxConfig';
import { mergeClasses } from '../../../utils/propsHelper';

interface CheckboxContainerProps extends BaseHTMLAttributes<HTMLDivElement> {}

const CheckboxContainer = forwardRef<HTMLDivElement, CheckboxContainerProps>(({ className, ...restProps }, ref) => {
  /* --- Set default props --- */
  const styles = checkboxConfig.styles.container;

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

CheckboxContainer.displayName = 'CheckboxContainer';

export default CheckboxContainer;
