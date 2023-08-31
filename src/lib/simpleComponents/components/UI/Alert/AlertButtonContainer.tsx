import React, { type BaseHTMLAttributes, type ReactNode, forwardRef } from 'react';
import alertConfig from '../../../configs/alertConfig';
import { mergeClasses } from '../../../utils/propsHelper';

interface AlertButtonContainerProps extends BaseHTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

const AlertButtonContainer = forwardRef<HTMLDivElement, AlertButtonContainerProps>(({ className, children, ...restProps }, ref) => {
  /* --- Set default props --- */
  const styles = alertConfig.styles.buttonContainer;

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

AlertButtonContainer.displayName = 'AlertButtonContainer';

export default AlertButtonContainer;
