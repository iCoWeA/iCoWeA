import React, {
  type BaseHTMLAttributes,
  forwardRef,
  useEffect,
  type TransitionEvent,
  type AnimationEvent,
  useRef,
  useImperativeHandle,
  useContext
} from 'react';
import useTransition, { TransitionStates, type TransitionConfig } from '../../../hooks/useTransition';
import { type BackdropProps } from '../Backdrop/Backdrop';
import dialogConfig from '../../../configs/dialogConfig';
import { mergeClasses } from '../../../utils/propsHelper';
import { createPortal } from 'react-dom';
import DialogBackdrop from './DialogBackdrop';
import themeContext from '../../../contexts/theme';

export interface DialogProps extends BaseHTMLAttributes<HTMLDivElement> {
  onClose?: () => void;
  color?: Colors;
  elevated?: boolean;
  open?: boolean;
  lockScroll?: boolean;
  transitionConfig?: TransitionConfig;
  overlayRef?: Element | null;
  backdropProps?: BackdropProps;
}

const Dialog = forwardRef<HTMLDivElement, DialogProps>((props, ref) => {
  /* --- Set context props --- */
  const theme = useContext(themeContext).theme;

  /* --- Set default props --- */
  const styles = dialogConfig.styles.dialog;
  const {
    onClose,
    open,
    color,
    elevated,
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
    ...dialogConfig.defaultProps,
    ...props
  };
  const mergedTransitionConfig = { ...dialogConfig.defaultProps.transitionConfig, ...transitionConfig };

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
  const mergedBackdropProps = { ...dialogConfig.defaultProps.backdropProps, ...backdropProps };

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
    styles.colors[theme][color],
    elevated && styles.elevated[theme],
    transitionState.entering && styles.open,
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
      <DialogBackdrop
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

Dialog.displayName = 'Dialog';

export default Dialog;
