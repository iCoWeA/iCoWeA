import React, { type BaseHTMLAttributes, forwardRef, useRef, useImperativeHandle, useEffect } from 'react';
import { createPortal } from 'react-dom';
import modalConfig from '../../configs/modalConfig';
import useAnimation, { AnimationStates } from '../../hooks/useAnimation';
import { mergeClasses } from '../../utils/propsHelper';
import Backdrop, { type BackdropProps } from './Backdrop';

export interface ModalProps extends BaseHTMLAttributes<HTMLDivElement> {
  onClose?: () => void;
  onEnter?: () => void;
  onExit?: () => void;
  onEntering?: () => void;
  onExiting?: () => void;
  open?: boolean;
  lockScroll?: boolean;
  keepMounted?: boolean;
  backdropProps?: BackdropProps;
  overlayRef?: Element | null;
}

const Modal = forwardRef<HTMLDivElement, ModalProps>((props, ref) => {
  /* --- Set default props --- */
  const styles = modalConfig.styles;
  const { onClose, onEnter, onExit, onEntering, onExiting, open, lockScroll, keepMounted, backdropProps, overlayRef, className, ...restProps } = {
    ...modalConfig.defaultProps,
    ...props
  };

  /* --- Set refs --- */
  const modalRef = useRef<HTMLDivElement>(null);

  /* --- Set states --- */
  const {
    state: animationState,
    enter,
    exit,
    transitionEndHandler,
    animationEndHandler
  } = useAnimation<HTMLDivElement>(modalRef.current, open, onEnter, onExit);

  /* --- Set imperative anchorElement --- */
  useImperativeHandle<HTMLDivElement | null, HTMLDivElement | null>(ref, () => modalRef.current, [
    !keepMounted && !open && animationState.current === AnimationStates.EXITED
  ]);

  /* --- Set open state --- */
  useEffect(() => {
    if (open && animationState.exit) {
      enter(onEntering);
    }

    if (!open && animationState.enter) {
      exit(onExiting);
    }
  }, [open, animationState.enter, animationState.exit]);

  /* --- Set lock scroll action --- */
  useEffect(() => {
    if (lockScroll) {
      if (open) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = 'auto';
      }
    }
  }, [lockScroll, open]);

  /* --- Unmount --- */
  if (!keepMounted && !open && animationState.current === AnimationStates.EXITED) {
    return <></>;
  }

  /* --- Set backdrop --- */
  const backdropNode = (
    <Backdrop
      onClose={onClose}
      open={open}
      keepMounted={keepMounted}
      {...backdropProps}
    />
  );

  /* --- Set props --- */
  const mergedClassName = mergeClasses(
    styles.base,
    animationState.enter && styles.open,
    animationState.current === AnimationStates.EXITED && !open && styles.hide,
    className
  );

  const node = (
    <>
      {backdropNode}
      <div
        onTransitionEnd={transitionEndHandler}
        onAnimationEnd={animationEndHandler}
        className={mergedClassName}
        ref={modalRef}
        {...restProps}
      />
    </>
  );

  return overlayRef === null ? node : createPortal(node, overlayRef);
});

Modal.displayName = 'Modal';

export default Modal;
