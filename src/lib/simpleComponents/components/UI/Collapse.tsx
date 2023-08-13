import React, {
  forwardRef,
  useContext,
  type BaseHTMLAttributes,
  type TransitionEvent
} from 'react';
import themeContext from '../../contexts/theme';
import useMount from '../../hooks/useMount';
import { twMerge } from 'tailwind-merge';
import { mergeClasses, mergeStyles } from '../../utils/styleHelper';

export interface CollapseDefaultProps {
  open?: boolean;
  openTransition?: string;
  transitionDuration?: number;
  showDelay?: number;
  hideDelay?: number;
  unmountOnExit?: boolean;
  componentsProps?: {
    container?: BaseHTMLAttributes<HTMLDivElement>;
  };
}

export interface CollapseProps
  extends CollapseDefaultProps,
  BaseHTMLAttributes<HTMLDivElement> {
  onOpen?: () => void;
  onClose?: () => void;
}

const Collapse = forwardRef<HTMLDivElement, CollapseProps>(
  (
    {
      onOpen,
      onClose,
      open,
      openTransition,
      transitionDuration,
      showDelay,
      hideDelay,
      unmountOnExit,
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
    const { defaultProps, styles } = config.collapse;

    open = open ?? defaultProps.open;
    transitionDuration = transitionDuration ?? defaultProps.transitionDuration;
    showDelay = showDelay ?? defaultProps.showDelay;
    hideDelay = hideDelay ?? defaultProps.hideDelay;
    unmountOnExit = unmountOnExit ?? defaultProps.unmountOnExit;

    const { isMounted, isOpen, show, hide, unmount } = useMount({
      open,
      hideDuration: transitionDuration,
      showDelay,
      hideDelay,
      onOpen,
      onClose
    });

    if ((!isMounted || !isOpen) && open) {
      show();
    }

    if ((isMounted || isOpen) && !open) {
      hide();
    }

    if (unmountOnExit && !isMounted) {
      return <></>;
    }

    const rootStyles = styles.root;
    const containerStyles = styles.container;

    openTransition = openTransition ?? defaultProps.openTransition;
    componentsProps = componentsProps ?? defaultProps.componentsProps;

    /* Set root props */
    const transitionEndRootHandler = (
      event: TransitionEvent<HTMLDivElement>
    ): void => {
      if (unmountOnExit === true && !isOpen) {
        unmount();
      }

      if (onRootTransitionEnd !== undefined) {
        onRootTransitionEnd(event);
      }
    };

    const mergedRootStyle = mergeStyles(
      { transitionDuration: `${transitionDuration}ms` },
      rootStyle
    );

    const mergedRootClassName = twMerge(
      mergeClasses(
        rootStyles.base,
        isOpen && rootStyles.open,
        isOpen && openTransition,
        rootClassName
      )
    );

    /* Set container props */
    const { className: containerClassName, ...restContainerProps } =
      componentsProps.container ?? {};

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
