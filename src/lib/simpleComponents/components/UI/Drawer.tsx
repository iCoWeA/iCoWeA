import React, { type BaseHTMLAttributes, forwardRef, useContext, useRef, useImperativeHandle, useEffect, type TransitionEvent } from 'react';
import { createPortal } from 'react-dom';
import drawerConfig from '../../configs/drawerConfig';
import themeContext from '../../contexts/theme';
import useAnimation, { AnimationStates } from '../../hooks/useAnimation';
import { mergeClasses } from '../../utils/propsHelper';
import Backdrop, { type BackdropProps } from './Backdrop';

/* ARIA
 *
 * Set aria-controls to handler
 * Set aria-expanded to handler
 *
 */

export type DrawerVariants = 'plain' | 'filled';

export interface DrawerProps extends BaseHTMLAttributes<HTMLDivElement> {
  onClose?: () => void;
  onEnter?: () => void;
  onExit?: () => void;
  onEntering?: () => void;
  onExiting?: () => void;
  variant?: DrawerVariants;
  direction?: Directions;
  open?: boolean;
  lockScroll?: boolean;
  keepMounted?: boolean;
  backdropProps?: BackdropProps;
  overlayRef?: Element | null;
}

const Drawer = forwardRef<HTMLDivElement, DrawerProps>((props, ref) => {
  /* --- Set context props --- */
  const theme = useContext(themeContext).theme;

  /* --- Set default props --- */
  const styles = drawerConfig.styles;
  const {
    onClose,
    onEnter,
    onExit,
    onEntering,
    onExiting,
    onTransitionEnd,
    variant,
    direction,
    open,
    lockScroll,
    keepMounted,
    backdropProps,
    overlayRef,
    className,
    ...restProps
  } = {
    ...drawerConfig.defaultProps,
    ...props
  };

  /* --- Set refs --- */
  const drawerRef = useRef<HTMLDivElement>(null);

  /* --- Set states --- */
  const { state: animationState, startAnimation, endAnimation } = useAnimation(open);

  /* --- Set imperative anchorElement --- */
  useImperativeHandle<HTMLDivElement | null, HTMLDivElement | null>(ref, () => drawerRef.current, [
    !keepMounted && !open && animationState.current === AnimationStates.EXITED
  ]);

  /* --- Set open state --- */
  useEffect(() => {
    startAnimation(open, onEntering, onExiting);
  }, [open, onEntering, onExiting]);

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
      onClick={onClose}
      open={open}
      keepMounted={keepMounted}
      {...backdropProps}
    />
  );

  /* --- Set props --- */
  const transitionEndHandler = (event: TransitionEvent<HTMLDivElement>): void => {
    if (event.target === drawerRef.current) {
      endAnimation(onEnter, onExit);
    }

    if (onTransitionEnd !== undefined) {
      onTransitionEnd(event);
    }
  };

  const mergedClassName = mergeClasses(
    styles.base,
    styles.variants[variant][theme],
    styles.directions[direction],
    animationState.enter && styles.open[direction],
    animationState.current === AnimationStates.EXITED && !open && styles.hide,
    className
  );

  const node = (
    <>
      {backdropNode}
      <div
        onTransitionEnd={transitionEndHandler}
        className={mergedClassName}
        ref={drawerRef}
        {...restProps}
      />
    </>
  );

  return overlayRef === undefined || overlayRef === null ? node : createPortal(node, overlayRef);
});

Drawer.displayName = 'Drawer';

export default Drawer;
