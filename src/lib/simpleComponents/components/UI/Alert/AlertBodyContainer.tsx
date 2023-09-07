import React, { type BaseHTMLAttributes, forwardRef } from 'react';
import alertConfig from '../../../configs/alertConfig';
import { mergeClasses } from '../../../utils/propsHelper';

interface AlertBodyContainerProps extends BaseHTMLAttributes<HTMLDivElement> {
  icon: boolean;
  action: boolean;
}

const AlertBodyContainer = forwardRef<HTMLDivElement, AlertBodyContainerProps>(({ icon, action, className, ...restProps }, ref) => {
  /* --- Set default props --- */
  const styles = alertConfig.styles.bodyContainer;

  /* --- Set props --- */
  const mergedClassName = mergeClasses(styles.base, icon && styles.icon, action && styles.action, className);

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
