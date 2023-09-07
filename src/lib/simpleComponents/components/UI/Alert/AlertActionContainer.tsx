import React, { type BaseHTMLAttributes, forwardRef } from 'react';
import alertConfig from '../../../configs/alertConfig';
import { mergeClasses } from '../../../utils/propsHelper';

interface AlertActionContainerProps extends BaseHTMLAttributes<HTMLDivElement> {
  button: boolean;
}

const AlertActionContainer = forwardRef<HTMLDivElement, AlertActionContainerProps>(({ button, className, ...restProps }, ref) => {
  /* --- Set default props --- */
  const styles = alertConfig.styles.actionContainer;

  /* --- Set props --- */
  const mergedClassName = mergeClasses(styles.base, button && styles.button, className);

  return (
    <div
      className={mergedClassName}
      ref={ref}
      {...restProps}
    />
  );
});

AlertActionContainer.displayName = 'AlertActionContainer';

export default AlertActionContainer;
