import React, {
  type MutableRefObject,
  forwardRef,
  useRef,
  useImperativeHandle,
  useCallback
} from 'react';
import { createPortal } from 'react-dom';

import useClickOutside from '../../../hooks/useClickOutside';
import useConfig from '../../../hooks/useConfig';
import useFocusTrap from '../../../hooks/useFocusTrap';
import useKeyboard from '../../../hooks/useKeyboard';
import useLockScroll from '../../../hooks/useLockScroll';
import useTimer from '../../../hooks/useTimer';
import Backdrop, { type BackdropProps } from '../../feedback/Backdrop/Backdrop';
import Transition, { type TransitionProps } from '../Transition/Transition';
import popperConfig from './popperConfig';

export type PopperDefaultProps = {
  lockScroll?: boolean;
  closeOnOutsideClick?: boolean;
  closeOnEscape?: boolean;
  closeDuration?: number;
  focusTrap?: boolean;
  closeOnBackdropClick?: boolean;
  backdrop?: Backdrop;
};

export type PopperProps = TransitionProps &
PopperDefaultProps & {
  onClose?: ((state: boolean) => void) | ((state?: boolean) => void);
  open?: boolean;
  portalTarget?: Element | null;
  backdropProps?: BackdropProps;
  anchorRef?: MutableRefObject<HTMLElement | null>;
};

const Popper = forwardRef<HTMLDivElement, PopperProps>((props, forwardedRef) => {
  const {
    onClose,
    lockScroll,
    closeOnOutsideClick,
    closeOnEscape,
    closeDuration,
    focusTrap,
    closeOnBackdropClick,
    backdrop,
    open,
    portalTarget,
    backdropProps,
    anchorRef,
    ...restProps
  } = useConfig('popper', popperConfig.defaultProps, props);

  const ref = useRef<HTMLDivElement>(null);

  useImperativeHandle<HTMLDivElement | null, HTMLDivElement | null>(
    forwardedRef,
    () => ref.current,
    []
  );

  /* --- Set event handlers --- */
  const closeHandler = useCallback(() => (onClose ? onClose(false) : undefined), [onClose]);

  useFocusTrap(ref, open && focusTrap);

  useLockScroll(lockScroll && open);

  useClickOutside(
    closeOnOutsideClick && open && backdrop === 'none' && closeHandler,
    ref,
    anchorRef
  );

  useKeyboard('Escape', closeOnEscape && closeHandler);

  useTimer(open && closeHandler, closeDuration);

  /* --- Set portal --- */
  const node = (
    <Transition
      transition="fade"
      smooth={false}
      unmountOnExit={false}
      enter={open}
      ref={ref}
      {...restProps}
    />
  );

  return (
    <>
      {backdrop !== 'none' && (
        <Backdrop
          onClose={closeOnBackdropClick ? onClose : undefined}
          invisible={backdrop === 'invisible'}
          open={open}
          {...backdropProps}
        />
      )}
      {portalTarget ? createPortal(node, portalTarget) : node}
    </>
  );
});

Popper.displayName = 'Popper';

export default Popper;
