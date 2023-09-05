import React, {
  type BaseHTMLAttributes,
  forwardRef,
  useContext,
  useEffect,
  type TransitionEvent,
  type AnimationEvent,
  useRef,
  useImperativeHandle
} from 'react';
import drawerConfig, { type DrawerPositions } from '../../../configs/drawerConfig';
import useTransition, { TransitionStates, type TransitionConfig } from '../../../hooks/useTransition';
import { type BackdropProps } from '../Backdrop/Backdrop';
import themeContext from '../../../contexts/theme';
import { mergeClasses } from '../../../utils/propsHelper';
import { createPortal } from 'react-dom';
import DrawerBackdrop from './DrawerBackdrop';

export interface DrawerProps extends BaseHTMLAttributes<HTMLDivElement> {
  onClose?: () => void;
  open?: boolean;
  position?: DrawerPositions;
  color?: Colors;
  lockScroll?: boolean;
  transitionConfig?: TransitionConfig;
  overlayRef?: Element | null;
  backdropProps?: BackdropProps;
}

const Drawer = forwardRef<HTMLDivElement, DrawerProps>((props, ref) => {
  /* --- Set context props --- */
  const theme = useContext(themeContext).theme;

  /* --- Set default props --- */
  const styles = drawerConfig.styles.drawer;
  const {
    onClose,
    open,
    position,
    color,
    lockScroll,
    transitionConfig,
    overlayRef,
    backdropProps,
    onTransitionEnd,
    onAnimationEnd,
    style,
    className,
    ...restProps
  } = {
    ...drawerConfig.defaultProps,
    ...props
  };
  const mergedTransitionConfig = { ...drawerConfig.defaultProps.transitionConfig, ...transitionConfig };

  /* --- Set refs --- */
  const componentRef = useRef<HTMLDivElement>(null);

  /* --- Set imperative handler --- */
  useImperativeHandle<HTMLDivElement | null, HTMLDivElement | null>(ref, () => componentRef.current, []);

  /* --- Set states --- */
  const { state: transitionState, className: transitionClassName, enter, exit } = useTransition(mergedTransitionConfig);

  /* --- Set open state --- */
  useEffect(() => {
    if (open && transitionState.exit) {
      enter();
    }

    if (!open && transitionState.enter) {
      exit();
    }
  }, [open, transitionState.enter, transitionState.exit]);

  /* --- Set lockScroll state --- */
  useEffect(() => {
    if (lockScroll) {
      if (transitionState.current === TransitionStates.EXITED) {
        document.body.style.overflow = 'auto';
      } else {
        document.body.style.overflow = 'hidden';
      }
    }
  }, [lockScroll, transitionState.current]);

  /* --- Unmount --- */
  if (transitionState.current === TransitionStates.EXITED && !open) {
    return <></>;
  }

  /* --- Set backdrop props --- */
  const mergedBackdropProps = { ...drawerConfig.defaultProps.backdropProps, ...backdropProps };

  /* --- Set props --- */
  const transitionEndHandler = (event: TransitionEvent<HTMLDivElement>): void => {
    if (transitionState.current === TransitionStates.ENTERING && event.target === componentRef.current) {
      enter(true);
    }

    if (transitionState.current === TransitionStates.EXITING && event.target === componentRef.current) {
      exit(true);
    }

    if (onTransitionEnd !== undefined) {
      onTransitionEnd(event);
    }
  };

  const animationEndHandler = (event: AnimationEvent<HTMLDivElement>): void => {
    if (transitionState.current === TransitionStates.ENTERING && event.target === componentRef.current) {
      enter(true);
    }

    if (transitionState.current === TransitionStates.EXITING && event.target === componentRef.current) {
      exit(true);
    }

    if (onAnimationEnd !== undefined) {
      onAnimationEnd(event);
    }
  };

  const mergedStyle = {
    transitionDuration: `${transitionState.entering ? mergedTransitionConfig.enterDuration : mergedTransitionConfig.exitDuration}ms`,
    ...style
  };

  const mergedClassName = mergeClasses(
    styles.base,
    styles.positions[position],
    transitionState.entering && styles.open[position],
    styles.colors[theme][color],
    className,
    transitionClassName
  );

  let node = (
    <div
      onTransitionEnd={transitionEndHandler}
      onAnimationEnd={animationEndHandler}
      style={mergedStyle}
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
        transitionState={transitionState}
        enterDuration={mergedTransitionConfig.enterDuration}
        exitDuration={mergedTransitionConfig.exitDuration}
        {...mergedBackdropProps}
      />
      {node}
    </>
  );
});

Drawer.displayName = 'Drawer';

export default Drawer;
