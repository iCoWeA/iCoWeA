/* import React, {
  type BaseHTMLAttributes,
  forwardRef,
  useContext,
  type CSSProperties,
  type TransitionEvent,
  useImperativeHandle,
  type RefObject,
  useRef,
  type AnimationEvent
} from 'react';
import { createPortal } from 'react-dom';
import themeContext from '../../contexts/theme';
import useTransition, {
  States,
  type Config as TransitionConfig
} from '../../hooks/useTransition';
import { twMerge } from 'tailwind-merge';
import { mergeClasses, mergeStyles } from '../../utils/propsHelper';
import {
  calculateBottomPosition,
  calculateTopPosition,
  isUnderViewport,
  isAboveViewport,
  isOnLeftOfViewport,
  calculateRightPosition,
  calculateLeftPosition,
  isOnRightOfViewport
} from '../../utils/positiontHelper';

export interface PopoverTransitionProps extends TransitionConfig {
  unmountOnExit?: boolean;
}

export interface PopoverProps extends BaseHTMLAttributes<HTMLDivElement> {
  open?: boolean;
  anchorRef?: Element | null;
  anchorOrigin: {
    horizontal: 'top' | 'center' | 'bottom';
    vertical: 'left' | 'center' | 'right';
  };
  transformOrigin: {
    horizontal: 'left' | 'center' | 'right';
    vertical: 'top' | 'center' | 'bottom';
  };
  overlayRef?: Element | null;
  transitionProps?: PopoverTransitionProps;
}

const Popover = forwardRef<RefObject<HTMLDivElement>, PopoverProps>(
  (
    {
      open,
      anchorRef,
      anchorOrigin,
      transformOrigin,
      overlayRef,
      transitionProps,
      onTransitionEnd,
      onAnimationEnd,
      style,
      className,
      children,
      ...restProps
    },
    ref
  ) => {
    const imperativeRef = useRef<HTMLDivElement>(null);

    useImperativeHandle(ref, () => imperativeRef, []);
    const { config } = useContext(themeContext);
    const { defaultProps, styles } = config.popover;
    const {
      unmountOnExit = defaultProps.transitionProps.unmountOnExit,
      enterDuration = defaultProps.transitionProps.enterDuration,
      exitDuration = defaultProps.transitionProps.exitDuration
    } = transitionProps ?? {};

    open = open ?? defaultProps.open;

    const {
      state,
      className: transitionClassName,
      enterState,
      exitState,
      enter,
      exit
    } = useTransition({
      ...defaultProps.transitionProps,
      ...transitionProps
    });

    if (exitState && open) {
      enter();
    }

    if (enterState && !open) {
      exit();
    }

    if (anchorRef === null || (unmountOnExit && state === States.EXITED)) {
      return <></>;
    }

    let mergedStyle: CSSProperties = {};

    const transitionEndHandler = (
      event: TransitionEvent<HTMLDivElement>
    ): void => {
      if (enterState) {
        enter(true);
      } else {
        exit(true);
      }

      if (onTransitionEnd !== undefined) {
        onTransitionEnd(event);
      }
    };

    const animationEndHandler = (
      event: AnimationEvent<HTMLDivElement>
    ): void => {
      if (enterState) {
        enter(true);
      } else {
        exit(true);
      }

      if (onAnimationEnd !== undefined) {
        onAnimationEnd(event);
      }
    };

    if (anchorRef !== undefined) {
      let top: string = '';
      let bottom: string = '';
      let left: string = '';
      let right: string = '';

      const startPosition = position.split('-')[0];

      if (startPosition === 'top') {
        if (isAboveViewport(imperativeRef.current)) {
          top = `calc(${calculateBottomPosition(anchorRef)}px + ${spacing}rem)`;
        } else {
          bottom = `calc(${calculateTopPosition(anchorRef)}px + ${spacing}rem)`;
        }
      }

      if (startPosition === 'bottom') {
        if (isUnderViewport(imperativeRef.current)) {
          bottom = `calc(${calculateTopPosition(anchorRef)}px + ${spacing}rem)`;
        } else {
          top = `calc(${calculateBottomPosition(anchorRef)}px + ${spacing}rem)`;
        }
      }

      if (startPosition === 'left') {
        if (isOnLeftOfViewport(imperativeRef.current)) {
          left = `calc(${calculateRightPosition(anchorRef)}px + ${spacing}rem)`;
        } else {
          right = `calc(${calculateLeftPosition(anchorRef)}px + ${spacing}rem)`;
        }
      }

      if (startPosition === 'right') {
        if (isOnRightOfViewport(imperativeRef.current)) {
          right = `calc(${calculateLeftPosition(anchorRef)}px + ${spacing}rem)`;
        } else {
          left = `calc(${calculateRightPosition(anchorRef)}px + ${spacing}rem)`;
        }
      }

      console.log(imperativeRef.current?.getBoundingClientRect());

      mergedStyle = mergeStyles(
        {
          top,
          bottom,
          left,
          right
        },
        {
          transitionDuration: `${enterState ? enterDuration : exitDuration}ms`
        },
        style
      );
    }

    const mergedClassName = twMerge(
      mergeClasses(
        styles.base,
        (state === States.ENTERING || state === States.ENTERED) && styles.open,
        className,
        transitionClassName
      )
    );

    let node = (
      <>
        <div
          onTransitionEnd={transitionEndHandler}
          onAnimationEnd={animationEndHandler}
          style={mergedStyle}
          className={mergedClassName}
          ref={imperativeRef}
          {...restProps}
        >
          {children}
        </div>
      </>
    );

    node =
      overlayRef === undefined || overlayRef === null
        ? node
        : createPortal(node, overlayRef);

    return <>{node}</>;
  }
);

Popover.displayName = 'Popover';

export default Popover; */
