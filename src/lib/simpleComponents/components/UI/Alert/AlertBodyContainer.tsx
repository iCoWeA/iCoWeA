import React, { type BaseHTMLAttributes, forwardRef } from 'react';
import alertConfig from '../../../configs/alertConfig';
import { mergeClasses } from '../../../utils/propsHelper';

interface AlertBodyContainerProps extends BaseHTMLAttributes<HTMLDivElement> {}

const AlertBodyContainer = forwardRef<HTMLDivElement, AlertBodyContainerProps>(({ className, ...restProps }, ref) => {
  /* --- Set default props --- */
  const styles = alertConfig.styles.bodyContainer;

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

AlertBodyContainer.displayName = 'AlertBodyContainer';

export default AlertBodyContainer;
