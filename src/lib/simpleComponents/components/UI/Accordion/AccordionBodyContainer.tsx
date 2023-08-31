import React, { type BaseHTMLAttributes, forwardRef } from 'react';
import accordionBodyConfig from '../../../configs/accordionBodyConfig';
import { mergeClasses } from '../../../utils/propsHelper';

interface AccordionBodyContainerProps extends BaseHTMLAttributes<HTMLDivElement> {
  className: string;
}

const AccordionBodyContainer = forwardRef<HTMLDivElement, AccordionBodyContainerProps>(({ className, ...restProps }, ref) => {
  /* --- Set default props --- */
  const styles = accordionBodyConfig.styles;

  /* --- Set props --- */
  const mergedBodyClassName = mergeClasses(styles.base, className);

  return (
    <div
      className={mergedBodyClassName}
      ref={ref}
      {...restProps}
    ></div>
  );
});

AccordionBodyContainer.displayName = 'AccordionBodyContainer';

export default AccordionBodyContainer;
