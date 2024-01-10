/* ARIA
 *
 * Set aria-controls to handler
 *
 */

import React, { forwardRef, useRef, useImperativeHandle, useCallback, useEffect } from 'react';

import useAddEventListener from '../../../hooks/useAddEventListener';
import useConfig from '../../../hooks/useConfig';
import useWindowResize from '../../../hooks/useWindowResize';
import useWindowScroll from '../../../hooks/useWindowScroll';
import { setPosition } from '../../../utils/popoverHelper';
import { mergeClasses } from '../../../utils/utils';
import Card, { type CardProps } from '../../surfaces/Card/Card';
import Popper, { type PopperProps } from '../Popper/Popper';
import popoverConfig from './popoverConfig';

export type PopoverDefaultProps = {
  onOpen?: ((state: boolean) => void) | ((state?: boolean) => void);
  color?: Colors;
  bordered?: boolean;
  position?: OuterPositions;
  responsive?: boolean;
  offset?: number | string;
  openOnHover?: boolean;
  dropdownProps?: CardProps;
};

export type PopoverProps = PopperProps & PopoverDefaultProps;

const Popover = forwardRef<HTMLDivElement, PopoverProps>((props, forwardedRef) => {
  const {
    onOpen,
    color,
    bordered,
    position,
    responsive,
    offset,
    openOnHover,
    dropdownProps,
    open,
    anchorRef,
    portalTarget,
    defaultClassName,
    className,
    children,
    ...restProps
  } = useConfig('popover', popoverConfig.defaultProps, props);
  const isPorted = !!portalTarget;

  const ref = useRef<HTMLDivElement>(null);

  useImperativeHandle<HTMLDivElement | null, HTMLDivElement | null>(
    forwardedRef,
    () => ref.current,
    []
  );

  /* --- Set mouse event --- */
  const openHandler = onOpen && (() => onOpen(true));

  useAddEventListener(anchorRef, 'mouseenter', openOnHover && !open && openHandler);

  /* --- Set resize event --- */
  const resizeHandler = useCallback(() => {
    if (!ref.current || !anchorRef?.current) {
      return;
    }

    setPosition(
      ref.current,
      position,
      anchorRef.current.getBoundingClientRect().x,
      anchorRef.current.getBoundingClientRect().y,
      isPorted
        ? anchorRef.current.getBoundingClientRect().y + document.documentElement.scrollTop
        : anchorRef.current.offsetTop,
      isPorted
        ? anchorRef.current.getBoundingClientRect().x + document.documentElement.scrollLeft
        : anchorRef.current.offsetLeft,
      anchorRef.current.offsetHeight,
      anchorRef.current.offsetWidth,
      +offset,
      responsive
    );
  }, [position, isPorted, offset, responsive]);

  useEffect(() => {
    resizeHandler();
  }, [open]);

  useWindowResize(responsive && open && resizeHandler);
  useWindowScroll(responsive && open && resizeHandler);

  /* --- Set classes --- */
  const styles = popoverConfig.styles;

  const mergedClassName = mergeClasses(styles.base, defaultClassName, className);

  return (
    <Popper
      open={open}
      lockScroll={false}
      closeOnOutsideClick
      closeOnEscape
      closeDuration={-1}
      backdrop={false}
      closeOnBackdropClick
      anchorRef={anchorRef}
      portalTarget={portalTarget}
      className={mergedClassName}
      ref={ref}
      {...restProps}
    >
      <Card
        color={color}
        simple={false}
        shadow={false}
      >
        {children}
      </Card>
    </Popper>
  );
});

Popover.displayName = 'Popover';

export default Popover;
