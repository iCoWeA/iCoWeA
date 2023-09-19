import React, { type BaseHTMLAttributes, forwardRef, useContext } from 'react';
import accordionPanelConfig from '../../configs/accordionPanelConfig';
import accordionContext from '../../contexts/accordion';
import { mergeClasses } from '../../utils/propsHelper';
import Collapse, { type CollapseProps } from './Collapse';

export interface AccordionPanelProps extends BaseHTMLAttributes<HTMLDivElement> {
  collapseProps?: CollapseProps;
}

const AccordionPanel = forwardRef<HTMLDivElement, AccordionPanelProps>((props, ref) => {
  /* --- Set context props --- */
  const { open: isAccordionOpen } = useContext(accordionContext);

  /* --- Set default props --- */
  const styles = accordionPanelConfig.styles;
  const { collapseProps, className, ...restProps } = { ...props };

  /* --- Set props --- */
  const mergedClassName = mergeClasses(styles.base, className);

  return (
    <Collapse
      role="region"
      open={isAccordionOpen}
      ref={ref}
      {...collapseProps}
    >
      <div
        className={mergedClassName}
        {...restProps}
      />
    </Collapse>
  );
});

AccordionPanel.displayName = 'AccordionPanel';

export default AccordionPanel;
