/* eslint-disable @typescript-eslint/prefer-nullish-coalescing */

import React, { type MouseEvent, forwardRef, useCallback, useContext, useMemo } from 'react';

import { mergeClasses } from '../../../../iCoWeAUI/utils/utils';
import accordionContext from '../../../contexts/accordion';
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
    { onClick, leftExpandIconProps, rightExpandIconProps, className, children, ...restProps },
    ref
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

    /* --- Set event handlers --- */
    const clickHandler = useCallback(
      (event: MouseEvent<HTMLButtonElement>) => {
        if (onToggle) {
          onToggle((open) => !open);
        }

        if (onClick) {
          onClick(event);
        }
      },
      [onToggle, onClick]
    );

    /* --- Set classes --- */
    const mergedClassName = useMemo(() => {
      const styles = accordionConfig.styles.header;

      return mergeClasses(styles.base, styles.sizes[size], className);
    }, [size, className]);

    return (
      <Button
        onClick={clickHandler}
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
