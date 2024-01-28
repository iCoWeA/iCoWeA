import React, { forwardRef, useContext, useRef, useImperativeHandle } from 'react';

import accordionContext from '../../../contexts/accordion';
import useAddEventListener from '../../../hooks/useAddEventListener';
import ListButton, { type ListButtonProps } from '../../data-display/ListButton/ListButton';
import AccordionExpandIcon, { type AccordionExpandIconDefaultProps } from './AccordionExpandIcon';

export type AccordionHeaderDefaultProps = ListButtonProps;

export type AccordionHeaderProps = AccordionHeaderDefaultProps & {
  leftExpandIconProps?: AccordionExpandIconDefaultProps;
  rightExpandIconProps?: AccordionExpandIconDefaultProps;
};

const AccordionHeader = forwardRef<HTMLButtonElement, AccordionHeaderProps>(
  ({ leftExpandIconProps, rightExpandIconProps, children, ...restProps }, forwardedRef) => {
    const {
      onToggle,
      open,
      variant,
      color,
      size,
      leftExpandIcon,
      rightExpandIcon,
      indexId,
      disabled
    } = useContext(accordionContext);

    const ref = useRef<HTMLButtonElement>(null);

    useImperativeHandle<HTMLButtonElement | null, HTMLButtonElement | null>(
      forwardedRef,
      () => ref.current,
      []
    );

    useAddEventListener(ref, 'click', onToggle);

    return (
      <ListButton
        unselectVariant={variant}
        variant={variant}
        unselectColor={color}
        color={color}
        size={size}
        border={false}
        block
        noRipple={false}
        selected={open}
        id={indexId ? `${indexId}-header` : indexId}
        aria-controls={indexId ? `${indexId}-body` : indexId}
        aria-pressed={undefined}
        aria-expanded={open}
        disabled={disabled}
        ref={ref}
        {...restProps}
      >
        {leftExpandIcon && (
          <AccordionExpandIcon
            open={open}
            {...leftExpandIconProps}
          />
        )}
        {children}
        {rightExpandIcon && (
          <AccordionExpandIcon
            right
            open={open}
            {...rightExpandIconProps}
          />
        )}
      </ListButton>
    );
  }
);

AccordionHeader.displayName = 'AccordionHeader';

export default AccordionHeader;
