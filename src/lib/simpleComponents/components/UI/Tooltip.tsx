import React, {
  type BaseHTMLAttributes,
  forwardRef,
  useContext,
  type ReactNode,
  useEffect,
  type CSSProperties,
  useRef,
  type TransitionEvent
} from 'react';
import { createPortal } from 'react-dom';
import {
  type TooltipPositions,
  type TooltipColors
} from '../../configs/tooltipConfig';
import themeContext from '../../contexts/theme';
import usePrevious from '../../hooks/usePrevious';
import useMount, {
  States,
  type Config as TransitionConfig
} from '../../hooks/useMount';
import { twMerge } from 'tailwind-merge';
import { mergeClasses, mergeStyles } from '../../utils/styleHelper';

export interface TooltipTransitionProps extends TransitionConfig {
  unmountOnExit?: boolean;
}

export interface TooltipProps extends BaseHTMLAttributes<HTMLDivElement> {
  open?: boolean;
  anchorRef?: Element | null;
  overlayRef?: Element | null;
  position?: TooltipPositions;
  color?: TooltipColors;
  spacing?: number;
  arrow?: boolean;
  transitionProps?: TooltipTransitionProps;
  componentsProps?: {
    arrow?: BaseHTMLAttributes<HTMLDivElement>;
  };
}

const Tooltip = forwardRef<HTMLDivElement, TooltipProps>(
  (
    {
      open,
      anchorRef,
      overlayRef,
      position,
      color,
      spacing,
      arrow,
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
    const prevState = usePrevious(open);
    const isHovered = useRef(open ?? false);
    const { theme, config } = useContext(themeContext);
    const {
      defaultProps,
      styles: { root: rootStyles, arrow: arrowStyles }
    } = config.tooltip;
    const {
      enterDuration = defaultProps.transitionProps.enterDuration,
      exitDuration = defaultProps.transitionProps.exitDuration,
      unmountOnExit = defaultProps.transitionProps.unmountOnExit
    } = transitionProps ?? {};

    const { state, enterState, exitState, enter, exit } = useMount({
      ...defaultProps.transitionProps,
      ...transitionProps
    });

    if (exitState && open === true) {
      enter();
    }

    if (enterState && open === false) {
      exit();
    }

    if (prevState !== undefined && open === undefined) {
      if (!isHovered.current) {
        exit();
      }
    }

    useEffect(() => {
      if (anchorRef !== null) {
        const showHandler: () => void = () => {
          isHovered.current = true;

          if (open === undefined) {
            enter();
          }
        };

        const hideHandler: () => void = () => {
          isHovered.current = false;

          if (open === undefined) {
            exit();
          }
        };

        anchorRef?.addEventListener('mouseenter', showHandler);
        anchorRef?.addEventListener('mouseleave', hideHandler);

        return () => {
          anchorRef?.removeEventListener('mouseenter', showHandler);
          anchorRef?.removeEventListener('mouseleave', hideHandler);
        };
      }
    }, [anchorRef, isHovered, open, enter, exit]);

    if (anchorRef === null || (unmountOnExit && state === States.EXITED)) {
      return <></>;
    }

    let arrowNode: ReactNode;
    let mergedRootStyle: CSSProperties = {};

    overlayRef = overlayRef ?? defaultProps.overlayRef;
    position = position ?? defaultProps.position;
    color = color ?? defaultProps.color;
    spacing = spacing ?? defaultProps.spacing;
    arrow = arrow ?? defaultProps.arrow;

    /* Set arrow props */
    if (arrow) {
      const { className: arrowClassName, ...restArrowProps } =
        componentsProps?.arrow ?? defaultProps.componentsProps.arrow;

      const mergedArrowClassName = twMerge(
        mergeClasses(
          arrowStyles.base,
          arrowStyles.positions[position.split('-')[0]],
          arrowStyles.colors[theme][color],
          arrowClassName
        )
      );

      arrowNode = (
        <div
          className={mergedArrowClassName}
          {...restArrowProps}
        ></div>
      );
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

    const anchorRefOrigin = anchorRef?.getBoundingClientRect();

    if (anchorRefOrigin !== undefined) {
      let top: string = '';
      let left: string = '';

      if (position.startsWith('top') || position.startsWith('bottom')) {
        const horizontal = position.startsWith('top') ? 'top' : 'bottom';

        top = `calc(${anchorRefOrigin[horizontal]}px ${
          horizontal === 'top' ? '-' : '+'
        } ${spacing}rem)`;

        if (position.endsWith('start')) {
          left = `${anchorRefOrigin.left}px`;
        } else if (position.endsWith('end')) {
          left = `${anchorRefOrigin.right}px`;
        } else {
          left = `${anchorRefOrigin.left + anchorRefOrigin.width / 2}px`;
        }
      } else if (position.startsWith('left') || position.startsWith('right')) {
        const vertical = position.startsWith('left') ? 'left' : 'right';

        left = `calc(${anchorRefOrigin[vertical]}px ${
          vertical === 'left' ? '-' : '+'
        } ${spacing}rem)`;

        if (position.endsWith('start')) {
          top = `${anchorRefOrigin.top}px`;
        } else if (position.endsWith('end')) {
          top = `${anchorRefOrigin.bottom}px`;
        } else {
          top = `${anchorRefOrigin.top + anchorRefOrigin.height / 2}px`;
        }
      }

      mergedRootStyle = mergeStyles(
        {
          top,
          left
        },
        {
          transitionDuration: `${enterState ? enterDuration : exitDuration}ms`
        },
        rootStyle
      );
    }

    const mergedRootClassName = twMerge(
      mergeClasses(
        rootStyles.base,
        rootStyles.positions[position],
        rootStyles.colors[theme][color],
        (state === States.ENTERING || state === States.ENTERED) &&
          rootStyles.show,
        rootClassName
      )
    );

    const rootNode = (
      <div
        onTransitionEnd={transitionEndRootHandler}
        style={mergedRootStyle}
        className={mergedRootClassName}
        ref={rootRef}
        {...restRootProps}
      >
        {arrowNode}
        {rootChildren}
      </div>
    );

    return overlayRef === null ? rootNode : createPortal(rootNode, overlayRef);
  }
);

Tooltip.displayName = 'Tooltip';

export default Tooltip;
