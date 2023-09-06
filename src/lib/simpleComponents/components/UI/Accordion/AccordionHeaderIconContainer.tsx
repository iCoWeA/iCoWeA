import React, { type BaseHTMLAttributes, forwardRef } from 'react';
import accordionHeaderConfig from '../../../configs/accordionHeaderConfig';
import { mergeClasses } from '../../../utils/propsHelper';

export interface AccordionHeaderIconContainerProps extends BaseHTMLAttributes<HTMLDivElement> {
  open: boolean;
}

const AccordionHeaderIconContainer = forwardRef<HTMLDivElement, AccordionHeaderIconContainerProps>(({ open, className, ...restProps }, ref) => {
  /* --- Set default props --- */
  const styles = accordionHeaderConfig.styles.iconContainer;

  /* --- Set props --- */
  const mergedClassName = mergeClasses(styles.base, open && styles.open, className);

  return (
    <div
      className={mergedClassName}
      ref={ref}
      {...restProps}
    />
  );
});

AccordionHeaderIconContainer.displayName = 'AccordionHeaderIconContainer';

export default AccordionHeaderIconContainer;
