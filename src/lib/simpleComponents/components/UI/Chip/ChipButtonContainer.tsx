import React, { type BaseHTMLAttributes, forwardRef } from 'react';
import chipConfig from '../../../configs/chipConfig';
import { mergeClasses } from '../../../utils/propsHelper';

interface ChipButtonContainerProps extends BaseHTMLAttributes<HTMLDivElement> {}

const ChipButtonContainer = forwardRef<HTMLDivElement, ChipButtonContainerProps>(({ className, ...restProps }, ref) => {
  /* --- Set default props --- */
  const styles = chipConfig.styles.buttonContainer;

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

ChipButtonContainer.displayName = 'ChipButtonContainer';

export default ChipButtonContainer;
