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
  ({ divider, collapseProps, ...restProps }, ref) => {
    const {
      onToggle,
      size,
      variant,
      color,
      divider: borderDivider,
      open,
      indexId,
      disabled
    } = useContext(accordionContext);

    return (
      <Collapse
        onClose={onToggle}
        closeOnOutsideClick={false}
        closeOnEscape={false}
        closeDuration={-1}
        horizontal={false}
        smooth={false}
        open={open}
        ref={ref}
        {...collapseProps}
      >
        {divider}
        <Stack
          justify="start"
          align="stretch"
          gap="none"
          spacing={size}
          variant={variant}
          color={color}
          border={borderDivider ? 'top' : 'none'}
          aria-labelledby={indexId ? `${indexId}-header` : indexId}
          disabled={disabled}
          id={indexId ? `${indexId}-body` : indexId}
          role="region"
          {...restProps}
        />
      </Collapse>
    );
  }
);

AccordionBody.displayName = 'AccordionBody';

export default AccordionBody;
