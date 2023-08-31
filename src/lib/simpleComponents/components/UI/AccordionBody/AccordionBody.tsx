import React, { type BaseHTMLAttributes, forwardRef, useContext } from 'react';
import Collapse, { type CollapseProps } from '../Collapse';
import accordionContext from '../../../contexts/accordion';
import accordionBodyConfig from '../../../configs/accordionBodyConfig';
import { mergeProps } from '../../../utils/propsHelper';

export interface AccordionBodyProps extends BaseHTMLAttributes<HTMLDivElement> {
  collapseProps?: CollapseProps;
  className?: string;
}

const AccordionBody = forwardRef<HTMLDivElement, AccordionBodyProps>((props, ref) => {
  /* --- Set default props --- */
  const { open: isOpen, duration } = useContext(accordionContext);
  const { collapseProps, className: containerClassName, ...restContainerProps } = mergeProps(accordionBodyConfig.defaultProps, props);

  /* --- Set props --- */
  const { open, transitionConfig, ...restProps } = mergeProps({ open: isOpen }, collapseProps);
  const mergedTransitionConfig = mergeProps({ enterDuration: duration, exitDuration: duration }, transitionConfig ?? {});

  return (
    <Collapse
      open={open}
      transitionConfig={mergedTransitionConfig}
      ref={ref}
      {...restProps}
    >
      <AccordionBody
        className={containerClassName}
        {...restContainerProps}
      />
    </Collapse>
  );
});

AccordionBody.displayName = 'AccordionBody';

export default AccordionBody;
