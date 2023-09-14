import React, { type BaseHTMLAttributes, type FC, useContext, forwardRef, useRef, useImperativeHandle, useEffect, useCallback } from 'react';
import snackbarConfig from '../../configs/snackbarConfig';
import themeContext from '../../contexts/theme';
import useAnimation, { AnimationStates } from '../../hooks/useAnimation';
import useOutsideClick from '../../hooks/useOutsideClick';
import { mergeClasses, setStyles } from '../../utils/propsHelper';

/********************************************************************************
 *
 *   Container
 *
 */
interface ContainerProps extends BaseHTMLAttributes<HTMLDivElement> {}

const Container: FC<ContainerProps> = ({ className, ...restProps }) => {
  /* --- Set context props --- */
  const theme = useContext(themeContext).theme;

  /* --- Set default props --- */
  const styles = snackbarConfig.styles.container;

  /* --- Set props --- */
  const mergedClassName = mergeClasses(styles.base, styles.colors[theme], className);

  return (
    <div
      className={mergedClassName}
      {...restProps}
    />
  );
};

/********************************************************************************
 *
 *   Snackbar
 *
 */
export interface SnackbarProps extends BaseHTMLAttributes<HTMLDivElement> {
  onClose?: () => void;
  onEnter?: () => void;
  onExit?: () => void;
  position?: InnerPositions;
  open?: boolean;
  closeOnAwayClick?: boolean;
  closeDuration?: number;
  unmountOnExit?: boolean;
}

const Snackbar = forwardRef<HTMLDivElement, SnackbarProps>((props, ref) => {
  /* --- Set default props --- */
  const styles = snackbarConfig.styles.snackbar;
  const { onClose, onEnter, onExit, position, open, closeOnAwayClick, closeDuration, unmountOnExit, style, className, children, ...restProps } = {
    ...snackbarConfig.defaultProps,
    ...props
  };

  /* --- Set refs --- */
  const snackbarRef = useRef<HTMLDivElement>(null);

  /* --- Set states --- */
  const {
    state: animationState,
    enter,
    exit,
    transitionEndHandler,
    animationEndHandler
  } = useAnimation<HTMLDivElement>(snackbarRef.current, open, onEnter, onExit);

  /* --- Set imperative handler --- */
  useImperativeHandle<HTMLDivElement | null, HTMLDivElement | null>(ref, () => snackbarRef.current, [
    unmountOnExit && !open && animationState.current === AnimationStates.EXITED
  ]);

  /* --- Set open state --- */
  useEffect(() => {
    if (open && animationState.exit) {
      enter();
    }

    if (!open && animationState.enter) {
      exit();
    }
  }, [open, animationState.enter, animationState.exit]);

  /* --- Set outside click action --- */
  const outsideClickHandler = useCallback((event: MouseEvent) => {
    const isSnackbarClicked = snackbarRef.current?.contains(event.target as Node) ?? false;

    if (!isSnackbarClicked && onClose !== undefined) {
      onClose();
    }
  }, []);

  useOutsideClick(outsideClickHandler, closeOnAwayClick && animationState.enter && onClose !== undefined);

  /* --- Set timer action --- */
  useEffect(() => {
    let timerId: number;

    if (animationState.enter && closeDuration !== undefined && onClose !== undefined) {
      timerId = window.setTimeout(() => {
        onClose();
      }, closeDuration);
    }

    return () => {
      if (animationState.enter && closeDuration !== undefined && onClose !== undefined) {
        clearTimeout(timerId);
      }
    };
  }, [animationState.enter, closeDuration]);

  useEffect(() => {
    if (animationState.enter) {
      setStyles<HTMLDivElement>(snackbarRef.current, { opacity: '100', ...style });
    } else {
      setStyles<HTMLDivElement>(snackbarRef.current, { opacity: '0', ...style });
    }
  }, [animationState.enter, style]);

  if (unmountOnExit && !open && animationState.current === AnimationStates.EXITED) {
    return <></>;
  }

  /* --- Set props --- */
  const mergedClassName = mergeClasses(styles.base, position !== undefined && styles.positions[position], className);

  const childrenNode = typeof children !== 'object' ? <Container>{children}</Container> : children;

  return (
    <div
      onTransitionEnd={transitionEndHandler}
      onAnimationEnd={animationEndHandler}
      className={mergedClassName}
      ref={snackbarRef}
      {...restProps}
    >
      {childrenNode}
    </div>
  );
});

Snackbar.displayName = 'Snackbar';

export default Snackbar;

/* ON_CLOSE() IS NOT IN DEPENDENCY LIST !!! */
