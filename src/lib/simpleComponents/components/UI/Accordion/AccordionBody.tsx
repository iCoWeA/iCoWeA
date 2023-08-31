import React, { type BaseHTMLAttributes, forwardRef, useContext } from 'react';
import Collapse, { type CollapseProps } from '../Collapse/Collapse';
import accordionContext from '../../../contexts/accordion';
import accordionBodyConfig from '../../../configs/accordionBodyConfig';
import { mergeProps } from '../../../utils/propsHelper';
import AccordionBodyContainer from './AccordionBodyContainer';

export interface AccordionBodyProps extends BaseHTMLAttributes<HTMLDivElement> {
  collapseProps?: CollapseProps;
  className?: string;
}

const AccordionBody = forwardRef<HTMLDivElement, AccordionBodyProps>((props, ref) => {
  /* --- Set context props --- */
  const { isOpen, transitionDuration } = useContext(accordionContext);

  /* --- Set default props --- */
  const { collapseProps, className: containerClassName, ...restContainerProps } = mergeProps(accordionBodyConfig.defaultProps, props);

  /* --- Set props --- */
  const { open, transitionConfig, ...restProps } = mergeProps({ open: isOpen }, collapseProps);
  const mergedTransitionConfig = mergeProps({ enterDuration: transitionDuration, exitDuration: transitionDuration }, transitionConfig ?? {});

  return (
    <Collapse
      open={open}
      transitionConfig={mergedTransitionConfig}
      ref={ref}
      {...restProps}
    >
      <AccordionBodyContainer
        className={containerClassName}
        {...restContainerProps}
      />
    </Collapse>
  );
});

AccordionBody.displayName = 'AccordionBody';

export default AccordionBody;
