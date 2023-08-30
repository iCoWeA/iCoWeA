import React, { type BaseHTMLAttributes, forwardRef, useContext } from 'react';
import Collapse, { type CollapseProps } from './Collapse';
import accordionContext from '../../contexts/accordion';
import themeContext from '../../contexts/theme';
import { mergeClasses, mergeProps } from '../../utils/propsHelper';

export interface AccordionBodyProps extends BaseHTMLAttributes<HTMLDivElement> {
  collapseProps?: CollapseProps;
  className?: string;
}

const AccordionBody = forwardRef<HTMLDivElement, AccordionBodyProps>((bodyProps, collapseRef) => {
  const { open, duration } = useContext(accordionContext);
  const { config } = useContext(themeContext);
  const { defaultProps, styles } = config.accordionBody;
  const { collapseProps, className: bodyClassName, ...restBodyProps } = mergeProps(defaultProps, bodyProps);

  /* Set collapse props */
  const { open: collapseOpen = open, transitionConfig: collapseTransitionConfig, ...restCollapseProps } = collapseProps;
  const mergedCollapseTransitionConfig = mergeProps({ enterDuration: duration, exitDuration: duration }, collapseTransitionConfig ?? {});

  /* Set body props */
  const mergedBodyClassName = mergeClasses(styles.base, bodyClassName);

  return (
    <Collapse
      open={collapseOpen}
      transitionConfig={mergedCollapseTransitionConfig}
      ref={collapseRef}
      {...restCollapseProps}
    >
      <div
        className={mergedBodyClassName}
        {...restBodyProps}
      />
    </Collapse>
  );
});

AccordionBody.displayName = 'AccordionBody';

export default AccordionBody;
