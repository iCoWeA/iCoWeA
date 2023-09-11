import React, { type BaseHTMLAttributes, forwardRef, useContext } from 'react';
import accordionBodyConfig from '../../../configs/accordionBodyConfig';
import accordionContext from '../../../contexts/accordion';
import { mergeClasses } from '../../../utils/propsHelper';
import Collapse, { type CollapseProps } from '../Collapse/Collapse';

export interface AccordionBodyProps extends BaseHTMLAttributes<HTMLDivElement> {
  collapseProps?: CollapseProps;
}

const AccordionBody = forwardRef<HTMLDivElement, AccordionBodyProps>((props, ref) => {
  /* --- Set context props --- */
  const { size: accordionSize, open: isAccordionOpen, id: accordionId } = useContext(accordionContext);

  /* --- Set default props --- */
  const styles = accordionBodyConfig.styles;
  const { collapseProps, className, ...restProps } = { ...accordionBodyConfig.defaultProps, ...props };

  /* --- Set props --- */
  const ariaLabelledBy = accordionId === undefined ? undefined : `acd-header-${accordionId}`;
  const id = accordionId === undefined ? undefined : `acd-body-${accordionId}`;

  const mergedClassName = mergeClasses(styles.base, styles.sizes[accordionSize], className);

  return (
    <Collapse
      aria-labelledby={ariaLabelledBy}
      hidden={!isAccordionOpen}
      role="region"
      id={id}
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

AccordionBody.displayName = 'AccordionBody';

export default AccordionBody;
