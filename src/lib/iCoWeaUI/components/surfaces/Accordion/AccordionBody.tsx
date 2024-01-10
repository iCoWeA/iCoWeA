import React, { type ReactNode, forwardRef, useContext } from 'react';

import accordionContext from '../../../contexts/accordion';
import { mergeClasses } from '../../../utils/utils';
import Box, { type BoxProps } from '../Box/Box';
import AccordionBodyCollapse, { type AccordionBodyCollapseProps } from './AccordionBodyCollapse';
import accordionConfig from './accordionConfig';

export type AccordionBodyDefaultProps = BoxProps;

export type AccordionBodyProps = AccordionBodyDefaultProps & {
  divider?: ReactNode;
  collapseProps?: AccordionBodyCollapseProps;
};

const AccordionBody = forwardRef<HTMLDivElement, AccordionBodyProps>(
  ({ divider, collapseProps, className, ...restProps }, ref) => {
    const { open, size, divider: borderDivider, onToggle, indexId } = useContext(accordionContext);

    /* --- Set classes --- */
    const styles = accordionConfig.styles.body;

    const mergedClassName = mergeClasses(borderDivider && styles.divider, className);

    return (
      <AccordionBodyCollapse
        onClose={onToggle}
        open={open}
        ref={ref}
        {...collapseProps}
      >
        {divider}
        <Box
          size={size}
          layout="body"
          inner={false}
          closable="none"
          buttonGap="md"
          id={indexId ? `${indexId}-body` : indexId}
          aria-labelledby={indexId ? `${indexId}-header` : indexId}
          className={mergedClassName}
          role="region"
          {...restProps}
        />
      </AccordionBodyCollapse>
    );
  }
);

AccordionBody.displayName = 'AccordionBody';

export default AccordionBody;
