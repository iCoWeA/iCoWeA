import React, { type BaseHTMLAttributes, forwardRef, useContext } from 'react';
import Collapse, { type CollapseProps } from '../Collapse/Collapse';
import accordionContext from '../../../contexts/accordion';
import accordionBodyConfig from '../../../configs/accordionBodyConfig';
import { mergeClasses } from '../../../utils/propsHelper';

export interface AccordionBodyProps extends BaseHTMLAttributes<HTMLDivElement> {
  collapseProps?: CollapseProps;
}

const AccordionBody = forwardRef<HTMLDivElement, AccordionBodyProps>((props, ref) => {
  /* --- Set context props --- */
  const { open: isAccordionOpen, transitionDuration: accordionTransitionDuration } = useContext(accordionContext);

  /* --- Set default props --- */
  const styles = accordionBodyConfig.styles;
  const { collapseProps, className, ...restProps } = { ...accordionBodyConfig.defaultProps, ...props };

  /* --- Set collapse props --- */
  const { transitionConfig, ...restCollapseProps } = collapseProps;
  const mergedTransitionConfig = { enterDuration: accordionTransitionDuration, exitDuration: accordionTransitionDuration, ...(transitionConfig ?? {}) };

  /* --- Set props --- */
  const mergedClassName = mergeClasses(styles.base, className);

  return (
    <Collapse
      open={isAccordionOpen}
      transitionConfig={mergedTransitionConfig}
      ref={ref}
      {...restCollapseProps}
    >
      <div
        className={mergedClassName}
        {...restProps}
      />
    </Collapse>
  );
});

AccordionBody.displayName = 'AccordionBody';

export default AccordionBody;
