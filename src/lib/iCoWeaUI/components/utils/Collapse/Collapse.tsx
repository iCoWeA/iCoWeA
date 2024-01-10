/* ARIA
 *
 * Set aria-controls to handler
 *
 */

import React, { type MutableRefObject, forwardRef, useRef, useImperativeHandle } from 'react';

import useClickOutside from '../../../hooks/useClickOutside';
import useConfig from '../../../hooks/useConfig';
import useKeyboard from '../../../hooks/useKeyboard';
import useTimer from '../../../hooks/useTimer';
import Transition, { type TransitionProps } from '../Transition/Transition';
import collapseConfig from './collapseConfig';

export type CollapseDefaultProps = {
  closeOnOutsideClick?: boolean;
  closeOnEscape?: boolean;
  closeDuration?: number;
  horizontal?: boolean;
};

export type CollapseProps = TransitionProps &
CollapseDefaultProps & {
  onClose?: ((state: boolean) => void) | ((state?: boolean) => void);
  anchorRef?: MutableRefObject<HTMLElement | null>;
  open?: boolean;
};

const Collapse = forwardRef<HTMLDivElement, CollapseProps>((props, forwardedRef) => {
  const {
    onClose,
    open,
    closeOnOutsideClick,
    closeOnEscape,
    closeDuration,
    horizontal,
    anchorRef,
    ...restProps
  } = useConfig('collapse', collapseConfig.defaultProps, props);

  const ref = useRef<HTMLDivElement>(null);

  useImperativeHandle<HTMLDivElement | null, HTMLDivElement | null>(
    forwardedRef,
    () => ref.current,
    []
  );

  const closeHandler = onClose && (() => onClose(false));

  useClickOutside(closeOnOutsideClick && open && closeHandler, ref, anchorRef);

  useKeyboard('Escape', closeOnEscape && closeHandler);

  useTimer(open && closeHandler, closeDuration);

  /* --- Set props --- */
  if (anchorRef?.current) {
    anchorRef.current.ariaExpanded = String(open);
  }

  return (
    <Transition
      enter={open}
      variant={horizontal ? 'grow-x' : 'grow-y'}
      unmountOnExit={false}
      ref={ref}
      {...restProps}
    />
  );
});

Collapse.displayName = 'Collapse';

export default Collapse;
