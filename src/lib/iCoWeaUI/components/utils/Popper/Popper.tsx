/* ARIA
 *
 * Set aria-controls to handler
 *
 */

import React, {
  type MutableRefObject,
  forwardRef,
  useRef,
  useImperativeHandle,
  type ReactNode
} from 'react';
import { createPortal } from 'react-dom';

import useClickOutside from '../../../hooks/useClickOutside';
import useConfig from '../../../hooks/useConfig';
import useKeyboard from '../../../hooks/useKeyboard';
import useLockScroll from '../../../hooks/useLockScroll';
import useTimer from '../../../hooks/useTimer';
import { mergeClasses } from '../../../utils/utils';
import Backdrop, { type BackdropProps } from '../../feedback/Backdrop/Backdrop';
import Transition, { type TransitionProps } from '../Transition/Transition';
import popperConfig from './popperConfig';

export type PopperDefaultProps = {
  onClose?: ((state: boolean) => void) | ((state?: boolean) => void);
  open?: boolean;
  lockScroll?: boolean;
  closeOnOutsideClick?: boolean;
  closeOnEscape?: boolean;
  closeDuration?: number;
  backdrop?: boolean;
  closeOnBackdropClick?: boolean;
  anchorRef?: MutableRefObject<HTMLElement | null>;
  portalTarget?: Element | null;
  backdropProps?: BackdropProps;
};

export type PopperProps = TransitionProps & PopperDefaultProps;

const Popper = forwardRef<HTMLDivElement, PopperProps>((props, forwardedRef) => {
  const {
    onClose,
    open,
    lockScroll,
    closeOnOutsideClick,
    closeOnEscape,
    closeDuration,
    backdrop,
    closeOnBackdropClick,
    anchorRef,
    portalTarget,
    backdropProps,
    defaultClassName,
    className,
    ...restProps
  } = useConfig('popper', popperConfig.defaultProps, props);

  const ref = useRef<HTMLDivElement>(null);

  useImperativeHandle<HTMLDivElement | null, HTMLDivElement | null>(
    forwardedRef,
    () => ref.current,
    []
  );

  const closeHandler = onClose && (() => onClose(false));

  useLockScroll(lockScroll && open);

  useClickOutside(closeOnOutsideClick && open && !backdrop && closeHandler, ref, anchorRef);

  useKeyboard('Escape', closeOnEscape && closeHandler);

  useTimer(open && closeHandler, closeDuration);

  /* --- Set classes --- */
  const styles = popperConfig.styles;

  const mergedClassName = mergeClasses(styles.base, defaultClassName, className);

  /* --- Set anchor --- */
  if (anchorRef?.current) {
    anchorRef.current.ariaExpanded = String(open);
  }

  /* --- Set backdrop --- */
  let backdropNode: ReactNode;

  if (backdrop) {
    backdropNode = (
      <Backdrop
        onClose={closeOnBackdropClick ? onClose : undefined}
        open={open}
        invisible
        {...backdropProps}
      />
    );
  }

  /* --- Set portal --- */
  let node = (
    <Transition
      enter={open}
      variant="fade"
      unmountOnExit={false}
      className={mergedClassName}
      ref={ref}
      {...restProps}
    />
  );

  node = portalTarget ? createPortal(node, portalTarget) : node;

  return (
    <>
      {backdropNode}
      {node}
    </>
  );
});

Popper.displayName = 'Popper';

export default Popper;
