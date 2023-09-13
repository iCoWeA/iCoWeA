import React, { type BaseHTMLAttributes, type FC, type ReactNode, forwardRef, useContext, useRef, useImperativeHandle, useEffect, useCallback } from 'react';
import alertConfig from '../../configs/alertConfig';
import themeContext from '../../contexts/theme';
import useAnimation, { AnimationStates } from '../../hooks/useAnimation';
import useOutsideClick from '../../hooks/useOutsideClick';
import { mergeClasses } from '../../utils/propsHelper';

/********************************************************************************
 *
 *   Start decorator container
 *
 */
interface StartDecoratorContainerProps extends BaseHTMLAttributes<HTMLDivElement> {}

const StartDecoratorContainer: FC<StartDecoratorContainerProps> = ({ className, ...restProps }) => {
  /* --- Set default props --- */
  const styles = alertConfig.styles.startDecoratorContainer;

  /* --- Set props --- */
  const mergedClassName = mergeClasses(styles.base, className);

  return (
    <div
      className={mergedClassName}
      {...restProps}
    />
  );
};

/********************************************************************************
 *
 *   Body container
 *
 */
interface BodyContainerProps extends BaseHTMLAttributes<HTMLDivElement> {}

const BodyContainer: FC<BodyContainerProps> = ({ className, ...restProps }) => {
  /* --- Set default props --- */
  const styles = alertConfig.styles.bodyContainer;

  /* --- Set props --- */
  const mergedClassName = mergeClasses(styles.base, className);

  return (
    <div
      className={mergedClassName}
      {...restProps}
    />
  );
};

/********************************************************************************
 *
 *   End decorator container
 *
 */
interface EndDecoratorContainerProps extends BaseHTMLAttributes<HTMLDivElement> {
  closable: boolean;
}

const EndDecoratorContainer: FC<EndDecoratorContainerProps> = ({ closable, className, ...restProps }) => {
  /* --- Set default props --- */
  const styles = alertConfig.styles.endDecoratorContainer;

  /* --- Set props --- */
  const mergedClassName = mergeClasses(styles.base, closable && styles.closable, className);

  return (
    <div
      className={mergedClassName}
      {...restProps}
    />
  );
};

/********************************************************************************
 *
 *   Alert
 *
 */
export type AlertVariant = 'text' | 'filled' | 'ghost' | 'outlined';

export interface AlertProps extends BaseHTMLAttributes<HTMLDivElement> {
  onClose?: () => void;
  onEnter?: () => void;
  onExit?: () => void;
  variant?: AlertVariant;
  color?: Colors;
  closeButton?: boolean;
  position?: InnerPositions;
  open?: boolean;
  closeOnAwayClick?: boolean;
  closeDuration?: number;
  unmountOnExit?: boolean;
  startDecorator?: ReactNode;
  endDecorator?: ReactNode;
  startDecoratorContainerProps?: BaseHTMLAttributes<HTMLDivElement>;
  bodyContainerProps?: BaseHTMLAttributes<HTMLDivElement>;
  endDecoratorContainerProps?: BaseHTMLAttributes<HTMLDivElement>;
}

const Alert = forwardRef<HTMLDivElement, AlertProps>((props, ref) => {
  /* --- Set context props --- */
  const theme = useContext(themeContext).theme;

  /* --- Set default props --- */
  const styles = alertConfig.styles.container;
  const {
    onClose,
    onEnter,
    onExit,
    variant,
    color,
    closeButton,
    position,
    open,
    closeOnAwayClick,
    closeDuration,
    unmountOnExit,
    startDecorator,
    endDecorator,
    startDecoratorContainerProps,
    bodyContainerProps,
    endDecoratorContainerProps,
    className,
    children,
    ...restProps
  } = {
    ...alertConfig.defaultProps,
    ...props
  };

  /* --- Set refs --- */
  const alertRef = useRef<HTMLDivElement>(null);

  /* --- Set states --- */
  const {
    state: animationState,
    enter,
    exit,
    transitionEndHandler,
    animationEndHandler
  } = useAnimation<HTMLDivElement>(alertRef.current, open, onEnter, onExit);

  /* --- Set imperative handler --- */
  useImperativeHandle<HTMLDivElement | null, HTMLDivElement | null>(ref, () => alertRef.current, [
    unmountOnExit,
    open,
    animationState.current === AnimationStates.EXITED
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
    const isAlertClicked = alertRef.current?.contains(event.target as Node) ?? false;

    if (!isAlertClicked && onClose !== undefined) {
      onClose();
    }
  }, []);

  useOutsideClick(outsideClickHandler, animationState.enter && closeOnAwayClick && onClose !== undefined);

  /* --- Set timer action --- */
  useEffect(() => {
    let timerId: number;

    if (animationState.current === AnimationStates.ENTERED && closeDuration !== undefined && onClose !== undefined) {
      timerId = window.setTimeout(() => {
        onClose();
      }, closeDuration);
    }

    return () => {
      if (animationState.current === AnimationStates.ENTERED && closeDuration !== undefined && onClose !== undefined) {
        clearTimeout(timerId);
      }
    };
  }, [animationState.current, closeDuration]);

  if (unmountOnExit && !open && animationState.current === AnimationStates.EXITED) {
    return <></>;
  }

  /* --- Set props --- */
  const mergedClassName = mergeClasses(
    styles.base,
    styles.variants[variant][theme][color],
    position !== undefined && styles.positions[position],
    animationState.enter && styles.open,
    className
  );

  /* --- Set startDecorator container props --- */
  let startDecoratorContainerNode: ReactNode;

  if (startDecorator !== undefined) {
    startDecoratorContainerNode = <StartDecoratorContainer {...startDecoratorContainerProps}>{startDecorator}</StartDecoratorContainer>;
  }

  /* --- Set button container props --- */
  let endDecoratorContainerNode: ReactNode;

  if (endDecorator !== undefined) {
    endDecoratorContainerNode = (
      <EndDecoratorContainer
        closable={closeButton}
        {...endDecoratorContainerProps}
      >
        {endDecorator}
      </EndDecoratorContainer>
    );
  }

  return (
    <div
      onTransitionEnd={transitionEndHandler}
      onAnimationEnd={animationEndHandler}
      role="alert"
      className={mergedClassName}
      ref={alertRef}
      {...restProps}
    >
      {startDecoratorContainerNode}
      <BodyContainer {...bodyContainerProps}>{children}</BodyContainer>
      {endDecoratorContainerNode}
    </div>
  );
});

Alert.displayName = 'Alert';

export default Alert;

/* ON_CLOSE() IS NOT IN DEPENDENCY LIST !!! */
