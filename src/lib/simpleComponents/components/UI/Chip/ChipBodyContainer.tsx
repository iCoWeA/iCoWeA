import React, { type BaseHTMLAttributes, forwardRef } from 'react';
import chipConfig from '../../../configs/chipConfig';
import { mergeClasses } from '../../../utils/propsHelper';

interface ChipBodyContainerProps extends BaseHTMLAttributes<HTMLDivElement> {}

const ChipBodyContainer = forwardRef<HTMLDivElement, ChipBodyContainerProps>(({ className, ...restProps }, ref) => {
  /* --- Set default props --- */
  const styles = chipConfig.styles.bodyContainer;

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

ChipBodyContainer.displayName = 'ChipBodyContainer';

export default ChipBodyContainer;
