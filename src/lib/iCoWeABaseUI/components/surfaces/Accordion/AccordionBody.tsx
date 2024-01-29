import React, { type ReactNode, forwardRef, useContext } from 'react';

import accordionContext from '../../../contexts/accordion';
import Stack, { type StackProps } from '../../layouts/Stack/Stack';
import Collapse, { type CollapseProps } from '../../utils/Collapse/Collapse';

export type AccordionBodyDefaultProps = StackProps;

export type AccordionBodyProps = AccordionBodyDefaultProps & {
  divider?: ReactNode;
  collapseProps?: CollapseProps;
};

const AccordionBody = forwardRef<HTMLDivElement, AccordionBodyProps>(
  ({ divider, collapseProps, className, ...restProps }, ref) => {
    const {
      onToggle,
      open,
      variant,
      color,
      size,
      divider: borderDivider,
      indexId,
      disabled
    } = useContext(accordionContext);

    return (
      <Collapse
        onClose={onToggle}
        open={open}
        closeOnOutsideClick={false}
        closeOnEscape={false}
        closeDuration={-1}
        horizontal={false}
        smooth={false}
        ref={ref}
        {...collapseProps}
      >
        {divider}
        <Stack
          variant={variant}
          color={color}
          spacing={size}
          border={borderDivider ? 'top' : 'none'}
          justify="start"
          align="stretch"
          gap="none"
          id={indexId ? `${indexId}-body` : indexId}
          aria-labelledby={indexId ? `${indexId}-header` : indexId}
          role="region"
          disabled={disabled}
          {...restProps}
        />
      </Collapse>
    );
  }
);

AccordionBody.displayName = 'AccordionBody';

export default AccordionBody;
