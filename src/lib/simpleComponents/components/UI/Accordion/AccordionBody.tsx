import React, { type BaseHTMLAttributes, forwardRef, useContext } from 'react';
import Collapse, { type CollapseProps } from '../Collapse/Collapse';
import accordionContext from '../../../contexts/accordion';
import accordionBodyConfig from '../../../configs/accordionBodyConfig';
import AccordionBodyContainer from './AccordionBodyContainer';

export interface AccordionBodyProps extends BaseHTMLAttributes<HTMLDivElement> {
  collapseProps?: CollapseProps;
  className?: string;
}

const AccordionBody = forwardRef<HTMLDivElement, AccordionBodyProps>((props, ref) => {
  /* --- Set context props --- */
  const { isOpen, transitionDuration } = useContext(accordionContext);

  /* --- Set default props --- */
  const { collapseProps, className, ...restContainerProps } = { ...accordionBodyConfig.defaultProps, ...props };

  /* --- Set props --- */
  const { transitionConfig, ...restProps } = collapseProps;
  const mergedTransitionConfig = { enterDuration: transitionDuration, exitDuration: transitionDuration, ...(transitionConfig ?? {}) };

  return (
    <Collapse
      open={isOpen}
      transitionConfig={mergedTransitionConfig}
      ref={ref}
      {...restProps}
    >
      <AccordionBodyContainer
        className={className}
        {...restContainerProps}
      />
    </Collapse>
  );
});

AccordionBody.displayName = 'AccordionBody';

export default AccordionBody;
