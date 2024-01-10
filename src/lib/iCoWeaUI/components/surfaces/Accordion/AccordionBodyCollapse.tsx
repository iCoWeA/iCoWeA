import React, { forwardRef } from 'react';

import { mergeClasses } from '../../../utils/utils';
import Collapse, { type CollapseProps } from '../../utils/Collapse/Collapse';
import accordionConfig from './accordionConfig';

export type AccordionBodyCollapseDefaultProps = CollapseProps;

export type AccordionBodyCollapseProps = AccordionBodyCollapseDefaultProps & {
  open: boolean;
};

const AccordionBodyCollapse = forwardRef<HTMLDivElement, AccordionBodyCollapseProps>(
  ({ className, ...restProps }, ref) => {
    /* --- Set classes --- */
    const styles = accordionConfig.styles.collape;

    const mergedClassName = mergeClasses(styles.base, className);

    return (
      <Collapse
        closeOnOutsideClick={false}
        closeOnEscape={false}
        closeDuration={-1}
        horizontal={false}
        className={mergedClassName}
        ref={ref}
        {...restProps}
      />
    );
  }
);

AccordionBodyCollapse.displayName = 'AccordionBodyCollapse';

export default AccordionBodyCollapse;
