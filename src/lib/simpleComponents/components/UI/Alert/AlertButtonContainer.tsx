import React, { type BaseHTMLAttributes, forwardRef } from 'react';
import alertConfig from '../../../configs/alertConfig';
import { mergeClasses } from '../../../utils/propsHelper';

interface AlertButtonContainerProps extends BaseHTMLAttributes<HTMLDivElement> {}

const AlertButtonContainer = forwardRef<HTMLDivElement, AlertButtonContainerProps>(({ className, ...restProps }, ref) => {
  /* --- Set default props --- */
  const styles = alertConfig.styles.buttonContainer;

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

AlertButtonContainer.displayName = 'AlertButtonContainer';

export default AlertButtonContainer;
