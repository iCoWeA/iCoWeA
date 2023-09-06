import React, {
  type BaseHTMLAttributes,
  forwardRef,
  useContext,
  useRef,
  useImperativeHandle,
  useEffect,
  type TransitionEvent,
  type AnimationEvent
} from 'react';
import { createPortal } from 'react-dom';
import dialogConfig from '../../../configs/dialogConfig';
import themeContext from '../../../contexts/theme';
import useAnimation, { AnimationStates } from '../../../hooks/useAnimation';
import { mergeClasses } from '../../../utils/propsHelper';
import Backdrop, { type BackdropProps } from '../Backdrop/Backdrop';

export interface DialogProps extends BaseHTMLAttributes<HTMLDivElement> {
  onEntering?: () => void;
  onExiting?: () => void;
  onEnter?: () => void;
  onExit?: () => void;
  onClose?: () => void;
  color?: Colors;
  elevated?: boolean;
  open?: boolean;
  lockScroll?: boolean;
  overlayRef?: Element | null;
  backdropProps?: BackdropProps;
}

const Dialog = forwardRef<HTMLDivElement, DialogProps>((props, ref) => {
  /* --- Set context props --- */
  const theme = useContext(themeContext).theme;

  /* --- Set default props --- */
  const styles = dialogConfig.styles.dialog;
  const { onEntering, onExiting, onEnter, onExit, onClose, color, elevated, open, lockScroll, overlayRef, backdropProps, className, ...restProps } = {
    ...dialogConfig.defaultProps,
    ...props
  };

  /* --- Set refs --- */
  const componentRef = useRef<HTMLDivElement>(null);

  /* --- Set imperative handler --- */
  useImperativeHandle<HTMLDivElement | null, HTMLDivElement | null>(ref, () => componentRef.current, []);

  /* --- Set states --- */
  const { state: animationState, enter, stopEntering, exit, stopExiting } = useAnimation();

  /* --- Set open state --- */
  useEffect(() => {
    if (open && animationState.exit) {
      enter(onEntering);
    }

    if (!open && animationState.enter) {
      exit(onExiting);
    }
  }, [open, animationState.enter, animationState.exit]);

  /* --- Set lockScroll state --- */
  useEffect(() => {
    if (lockScroll) {
      if (animationState.current === AnimationStates.EXITED) {
        document.body.style.overflow = 'auto';
      } else {
        document.body.style.overflow = 'hidden';
      }
    }
  }, [lockScroll, animationState.current]);

  /* --- Unmount --- */
  if (!open && animationState.current === AnimationStates.EXITED) {
    return <></>;
  }

  /* --- Set props --- */
  const transitionEndHandler = (event: TransitionEvent<HTMLDivElement>): void => {
    if (animationState.current === AnimationStates.ENTERING && event.target === componentRef.current) {
      stopEntering(onEnter);
    }

    if (animationState.current === AnimationStates.EXITING && event.target === componentRef.current) {
      stopExiting(onExit);
    }
  };

  const animationEndHandler = (event: AnimationEvent<HTMLDivElement>): void => {
    if (animationState.current === AnimationStates.ENTERING && event.target === componentRef.current) {
      stopEntering(onEnter);
    }

    if (animationState.current === AnimationStates.EXITING && event.target === componentRef.current) {
      stopExiting(onExit);
    }
  };

  const mergedClassName = mergeClasses(
    styles.base,
    styles.colors[theme][color],
    elevated && styles.elevated[theme],
    animationState.enter && styles.open,
    className
  );

  let node = (
    <div
      onTransitionEnd={transitionEndHandler}
      onAnimationEnd={animationEndHandler}
      className={mergedClassName}
      ref={componentRef}
      {...restProps}
    />
  );

  if (overlayRef !== null) {
    node = createPortal(node, overlayRef);
  }

  return (
    <>
      <Backdrop
        onClose={onClose}
        open={animationState.enter}
        {...backdropProps}
      />
      {node}
    </>
  );
});

Dialog.displayName = 'Dialog';

export default Dialog;
