import React, {
  forwardRef,
  useContext,
  type BaseHTMLAttributes,
  type TransitionEvent
} from 'react';
import themeContext from '../../contexts/theme';
import useMount, {
  States,
  type Config as TransitionConfig
} from '../../hooks/useTransition';
import { twMerge } from 'tailwind-merge';
import { mergeClasses, mergeStyles } from '../../utils/styleHelper';

export interface CollapseTransitionProps extends TransitionConfig {
  unmountOnExit?: boolean;
  enterTransition?: string;
}

export interface CollapseProps extends BaseHTMLAttributes<HTMLDivElement> {
  open?: boolean;
  transitionProps?: CollapseTransitionProps;
  componentsProps?: {
    container?: BaseHTMLAttributes<HTMLDivElement>;
  };
}

const Collapse = forwardRef<HTMLDivElement, CollapseProps>(
  (
    {
      open,
      transitionProps,
      componentsProps,
      onTransitionEnd: onRootTransitionEnd,
      style: rootStyle,
      className: rootClassName,
      children: rootChildren,
      ...restRootProps
    },
    rootRef
  ) => {
    const { config } = useContext(themeContext);
    const {
      defaultProps,
      styles: { root: rootStyles, container: containerStyles }
    } = config.collapse;
    const {
      unmountOnExit = defaultProps.transitionProps.unmountOnExit,
      enterTransition = defaultProps.transitionProps.enterTransition,
      enterDuration = defaultProps.transitionProps.enterDuration,
      exitDuration = defaultProps.transitionProps.exitDuration
    } = transitionProps ?? {};

    open = open ?? defaultProps.open;

    const { state, enterState, exitState, enter, exit } = useMount({
      ...defaultProps.transitionProps,
      ...transitionProps
    });

    if (exitState && open) {
      enter();
    }

    if (enterState && !open) {
      exit();
    }

    if (unmountOnExit && state === States.EXITED) {
      return <></>;
    }

    /* Set root props */
    const transitionEndRootHandler = (
      event: TransitionEvent<HTMLDivElement>
    ): void => {
      if (enterState) {
        enter(true);
      } else {
        exit(true);
      }

      if (onRootTransitionEnd !== undefined) {
        onRootTransitionEnd(event);
      }
    };

    const mergedRootStyle = mergeStyles(
      { transitionDuration: `${enterState ? enterDuration : exitDuration}ms` },
      rootStyle
    );

    const mergedRootClassName = twMerge(
      mergeClasses(
        rootStyles.base,
        (state === States.ENTERING || state === States.ENTERED) &&
          rootStyles.open,
        (state === States.ENTERING || state === States.ENTERED) &&
          enterTransition,
        rootClassName
      )
    );

    /* Set container props */
    const { className: containerClassName, ...restContainerProps } =
      componentsProps?.container ?? defaultProps.componentsProps.container;

    const mergedContainerClassName = twMerge(
      mergeClasses(containerStyles.base, containerClassName)
    );

    return (
      <div
        onTransitionEnd={transitionEndRootHandler}
        style={mergedRootStyle}
        className={mergedRootClassName}
        ref={rootRef}
        {...restRootProps}
      >
        <div
          className={mergedContainerClassName}
          {...restContainerProps}
        >
          {rootChildren}
        </div>
      </div>
    );
  }
);

Collapse.displayName = 'Collapse';

export default Collapse;
