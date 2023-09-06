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
import drawerConfig, { type DrawerPositions } from '../../../configs/drawerConfig';
import themeContext from '../../../contexts/theme';
import useAnimation, { AnimationStates } from '../../../hooks/useAnimation';
import { mergeClasses } from '../../../utils/propsHelper';
import { type BackdropProps } from '../Backdrop/Backdrop';
import DrawerBackdrop from './DrawerBackdrop';

export interface DrawerProps extends BaseHTMLAttributes<HTMLDivElement> {
  onEntering?: () => void;
  onExiting?: () => void;
  onEnter?: () => void;
  onExit?: () => void;
  onClose?: () => void;
  open?: boolean;
  position?: DrawerPositions;
  color?: Colors;
  lockScroll?: boolean;
  overlayRef?: Element | null;
  backdropProps?: BackdropProps;
}

const Drawer = forwardRef<HTMLDivElement, DrawerProps>((props, ref) => {
  /* --- Set context props --- */
  const theme = useContext(themeContext).theme;

  /* --- Set default props --- */
  const styles = drawerConfig.styles.drawer;
  const { onEntering, onExiting, onEnter, onExit, onClose, open, position, color, lockScroll, overlayRef, backdropProps, className, ...restProps } = {
    ...drawerConfig.defaultProps,
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
    styles.positions[position],
    animationState.enter && styles.open[position],
    styles.colors[theme][color],
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
      <DrawerBackdrop
        onClose={onClose}
        open={animationState.enter}
        {...backdropProps}
      />
      {node}
    </>
  );
});

Drawer.displayName = 'Drawer';

export default Drawer;
