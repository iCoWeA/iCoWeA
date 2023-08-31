import React, { type BaseHTMLAttributes, type ReactNode, forwardRef } from 'react';
import alertConfig from '../../../configs/alertConfig';
import { mergeClasses } from '../../../utils/propsHelper';

interface AlertIconContainerProps extends BaseHTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

const AlertIconContainer = forwardRef<HTMLDivElement, AlertIconContainerProps>(({ className, children, ...restProps }, ref) => {
  /* --- Set default props --- */
  const styles = alertConfig.styles.iconContainer;

  /* --- Set props --- */
  const mergedClassName = mergeClasses(styles.base, className);

  return (
    <div
      className={mergedClassName}
      ref={ref}
      {...restProps}
    >
      {children}
    </div>
  );
});

AlertIconContainer.displayName = 'AlertIconContainer';

export default AlertIconContainer;
