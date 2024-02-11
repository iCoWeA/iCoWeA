/* eslint-disable @typescript-eslint/prefer-nullish-coalescing */
import React, { forwardRef, useContext, useRef, useImperativeHandle, useMemo } from 'react';

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
      size,
      variant,
      color,
      noRipple,
      open,
      openVariant,
      openColor,
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

    /* --- Set event handlers --- */
    useAddEventListener(ref, 'click', onToggle);

    /* --- Set classes --- */
    const mergedClassName = useMemo(() => {
      const styles = accordionConfig.styles.header;

      return mergeClasses(styles.base, styles.sizes[size], className);
    }, [size, className]);

    return (
      <Button
        size={size}
        block
        icon={false}
        variant={(open && openVariant) || variant}
        color={(open && openColor) || color}
        border={false}
        radius="none"
        loading={false}
        noRipple={noRipple}
        aria-controls={indexId ? `${indexId}-body` : indexId}
        aria-expanded={open}
        className={mergedClassName}
        disabled={disabled}
        id={indexId ? `${indexId}-header` : indexId}
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
