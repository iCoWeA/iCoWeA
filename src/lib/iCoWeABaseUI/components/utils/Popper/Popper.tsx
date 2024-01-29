import React, { type MutableRefObject, forwardRef, useRef, useImperativeHandle } from 'react';
import { createPortal } from 'react-dom';

import { mergeClasses } from '../../../../iCoWeAUI/utils/utils';
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
  backdrop?: boolean;
  closeOnBackdropClick?: boolean;
};

export type PopperProps = TransitionProps &
PopperDefaultProps & {
  onClose?: ((state: boolean) => void) | ((state?: boolean) => void);
  open?: boolean;
  portalTarget?: Element | null;
  anchorRef?: MutableRefObject<HTMLElement | null>;
  backdropProps?: BackdropProps;
};

const Popper = forwardRef<HTMLDivElement, PopperProps>((props, forwardedRef) => {
  const {
    onClose,
    open,
    lockScroll,
    closeOnOutsideClick,
    closeOnEscape,
    closeDuration,
    focusTrap,
    backdrop,
    closeOnBackdropClick,
    portalTarget,
    anchorRef,
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

  /* --- Set event handlers --- */
  const closeHandler = onClose && (() => onClose(false));

  useFocusTrap(ref, open && focusTrap);

  useLockScroll(lockScroll && open);

  useClickOutside(closeOnOutsideClick && open && !backdrop && closeHandler, ref, anchorRef);

  useKeyboard('Escape', closeOnEscape && closeHandler);

  useTimer(open && closeHandler, closeDuration);

  /* --- Set classes --- */
  const styles = popperConfig.styles;

  const mergedClassName = mergeClasses(styles.base, defaultClassName, className);

  /* --- Set portal --- */
  const node = (
    <Transition
      enter={open}
      variant="fade"
      smooth={false}
      unmountOnExit={false}
      className={mergedClassName}
      ref={ref}
      {...restProps}
    />
  );

  return (
    <>
      {backdrop && (
        <Backdrop
          onClose={closeOnBackdropClick ? onClose : undefined}
          open={open}
          invisible
          {...backdropProps}
        />
      )}
      {portalTarget ? createPortal(node, portalTarget) : node}
    </>
  );
});

Popper.displayName = 'Popper';

export default Popper;
