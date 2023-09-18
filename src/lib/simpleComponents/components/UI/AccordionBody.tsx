import React, { type BaseHTMLAttributes, forwardRef, useContext } from 'react';
import accordionBodyConfig from '../../configs/accordionBodyConfig';
import accordionContext from '../../contexts/accordion';
import { mergeClasses } from '../../utils/propsHelper';
import Collapse, { type CollapseProps } from './Collapse';

export interface AccordionBodyProps extends BaseHTMLAttributes<HTMLDivElement> {
  collapseProps?: CollapseProps;
}

const AccordionBody = forwardRef<HTMLDivElement, AccordionBodyProps>((props, ref) => {
  /* --- Set context props --- */
  const { open: isAccordionOpen } = useContext(accordionContext);

  /* --- Set default props --- */
  const styles = accordionBodyConfig.styles;
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

AccordionBody.displayName = 'AccordionBody';

export default AccordionBody;
