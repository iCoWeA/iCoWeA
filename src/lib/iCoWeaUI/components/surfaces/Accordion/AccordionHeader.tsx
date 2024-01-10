import React, { forwardRef, useContext, useRef, useImperativeHandle } from 'react';

import accordionContext from '../../../contexts/accordion';
import useAddEventListener from '../../../hooks/useAddEventListener';
import { mergeClasses } from '../../../utils/utils';
import ToggleButton, { type ToggleButtonProps } from '../../inputs/ToggleButton/ToggleButton';
import AccordionExpandIcon, { type AccordionExpandIconDefaultProps } from './AccordionExpandIcon';
import accordionConfig from './accordionConfig';

export type AccordionHeaderDefaultProps = ToggleButtonProps;

export type AccordionHeaderProps = AccordionHeaderDefaultProps & {
  leftExpandIconProps?: AccordionExpandIconDefaultProps;
  rightExpandIconProps?: AccordionExpandIconDefaultProps;
};

const AccordionHeader = forwardRef<HTMLButtonElement, AccordionHeaderProps>(
  (
    { leftExpandIconProps, rightExpandIconProps, className, children, ...restProps },
    forwardedRef
  ) => {
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

    /* --- Set classes --- */
    const styles = accordionConfig.styles.header;

    const mergedClassName = mergeClasses(styles.base, styles.sizes[size], className);

    return (
      <ToggleButton
        uncheckedVariant={variant}
        variant={variant}
        uncheckedColor={color}
        color={color}
        size={size}
        inner={false}
        icon={false}
        bordered={false}
        block
        shadow={false}
        noRipple={false}
        checked={open}
        id={indexId ? `${indexId}-header` : indexId}
        aria-controls={indexId ? `${indexId}-body` : indexId}
        aria-pressed={undefined}
        aria-expanded={open}
        disabled={disabled}
        className={mergedClassName}
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
      </ToggleButton>
    );
  }
);

AccordionHeader.displayName = 'AccordionHeader';

export default AccordionHeader;
