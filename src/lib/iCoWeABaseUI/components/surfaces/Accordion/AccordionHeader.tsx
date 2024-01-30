/* eslint-disable @typescript-eslint/prefer-nullish-coalescing */
import React, { forwardRef, useContext, useRef, useImperativeHandle } from 'react';

import { mergeClasses } from '../../../../iCoWeAUI/utils/utils';
import accordionContext from '../../../contexts/accordion';
import useAddEventListener from '../../../hooks/useAddEventListener';
import Button, { type ButtonProps } from '../../inputs/Button/Button';
import AccordionExpandIcon, { type AccordionExpandIconDefaultProps } from './AccordionExpandIcon';
import accordionConfig from './accordionConfig';

type AccordionHeaderDefaultProps = ButtonProps;

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
      noRipple,
      leftExpandIcon,
      rightExpandIcon,
      openVariant,
      openColor,
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
      <Button
        variant={(open && openVariant) || variant}
        color={(open && openColor) || color}
        size={size}
        icon={false}
        border={false}
        block
        shadow={false}
        loading={false}
        noRipple={noRipple}
        className={mergedClassName}
        id={indexId ? `${indexId}-header` : indexId}
        aria-controls={indexId ? `${indexId}-body` : indexId}
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
      </Button>
    );
  }
);

AccordionHeader.displayName = 'AccordionHeader';

export default AccordionHeader;
