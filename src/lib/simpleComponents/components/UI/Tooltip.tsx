import React, {
  type BaseHTMLAttributes,
  forwardRef,
  useContext,
  type ReactNode,
  useEffect,
  type RefObject,
  type MutableRefObject,
  type CSSProperties,
  useRef,
  type TransitionEvent
} from 'react';
import { createPortal } from 'react-dom';
import {
  type TooltipPositions,
  type TooltipColors
} from '../../configs/tooltipConfig';
import usePrevious from '../../hooks/usePrevious';
import themeContext from '../../contexts/theme';
import useMount from '../../hooks/useMount';
import { twMerge } from 'tailwind-merge';
import { mergeClasses, mergeStyles } from '../../utils/styleHelper';

export interface TooltipDefaultProps {
  position?: TooltipPositions;
  color?: TooltipColors;
  spacing?: number;
  arrow?: boolean;
  transitionDuration?: number;
  showDelay?: number;
  hideDelay?: number;
  componentsProps?: {
    arrow?: BaseHTMLAttributes<HTMLDivElement>;
  };
}

export interface TooltipProps
  extends BaseHTMLAttributes<HTMLDivElement>,
  TooltipDefaultProps {
  open?: boolean;
  anchorElem?: RefObject<Element> | MutableRefObject<Element>;
  onOpen?: () => void;
  onClose?: () => void;
}

const Tooltip = forwardRef<HTMLDivElement, TooltipProps>(
  (
    {
      open,
      anchorElem,
      onOpen,
      onClose,
      position,
      color,
      spacing,
      arrow,
      transitionDuration,
      showDelay,
      hideDelay,
      componentsProps,
      onTransitionEnd: onRootTransitionEnd,
      style: rootStyle,
      className: rootClassName,
      children: rootChildren,
      ...restRootProps
    },
    rootRef
  ) => {
    const prevOpen = usePrevious(open);
    const isHovered = useRef(open ?? false);
    const { theme, config } = useContext(themeContext);
    const { defaultProps } = config.tooltip;

    transitionDuration = transitionDuration ?? defaultProps.transitionDuration;
    showDelay = showDelay ?? defaultProps.showDelay;
    hideDelay = hideDelay ?? defaultProps.hideDelay;

    const { isMounted, isOpen, show, hide, unmount } = useMount({
      open: open ?? false,
      hideDuration: transitionDuration,
      showDelay,
      hideDelay,
      onOpen,
      onClose
    });

    if ((!isMounted || !isOpen) && open === true) {
      show();
    }

    if ((isMounted || isOpen) && open === false) {
      hide();
    }

    if (prevOpen !== undefined && open === undefined) {
      if (!isHovered.current) {
        hide();
      }
    }

    useEffect(() => {
      if (anchorElem?.current !== undefined) {
        const showHandler: () => void = () => {
          isHovered.current = true;

          if (open === undefined) {
            show();
          }
        };

        const hideHandler: () => void = () => {
          isHovered.current = false;

          if (open === undefined) {
            hide();
          }
        };

        anchorElem.current?.addEventListener('mouseenter', showHandler);
        anchorElem.current?.addEventListener('mouseleave', hideHandler);

        return () => {
          anchorElem.current?.removeEventListener('mouseenter', showHandler);
          anchorElem.current?.removeEventListener('mouseleave', hideHandler);
        };
      }
    }, [open, show, hide]);

    if (anchorElem === undefined || !isMounted) {
      return <></>;
    }

    const { styles } = config.tooltip;
    const rootStyles = styles.root;
    let arrowNode: ReactNode;
    let mergedRootStyle: CSSProperties = {};

    position = position ?? defaultProps.position;
    color = color ?? defaultProps.color;
    spacing = spacing ?? defaultProps.spacing;
    arrow = arrow ?? defaultProps.arrow;
    componentsProps = componentsProps ?? defaultProps.componentsProps;

    /* Set arrow props */
    if (arrow) {
      const arrowStyles = styles.arrow;
      const { className: arrowClassName, ...restArrowProps } =
        componentsProps.arrow ?? {};

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
      if (!isOpen) {
        unmount();
      }

      if (onRootTransitionEnd !== undefined) {
        onRootTransitionEnd(event);
      }
    };

    const anchorElemOrigin = anchorElem.current?.getBoundingClientRect();

    if (anchorElemOrigin !== undefined) {
      let top: string = '';
      let left: string = '';

      if (position.startsWith('top') || position.startsWith('bottom')) {
        const horizontal = position.startsWith('top') ? 'top' : 'bottom';

        top = `calc(${anchorElemOrigin[horizontal]}px ${
          horizontal === 'top' ? '-' : '+'
        } ${spacing}rem)`;

        if (position.endsWith('start')) {
          left = `${anchorElemOrigin.left}px`;
        } else if (position.endsWith('end')) {
          left = `${anchorElemOrigin.right}px`;
        } else {
          left = `${anchorElemOrigin.left + anchorElemOrigin.width / 2}px`;
        }
      } else if (position.startsWith('left') || position.startsWith('right')) {
        const vertical = position.startsWith('left') ? 'left' : 'right';

        left = `calc(${anchorElemOrigin[vertical]}px ${
          vertical === 'left' ? '-' : '+'
        } ${spacing}rem)`;

        if (position.endsWith('start')) {
          top = `${anchorElemOrigin.top}px`;
        } else if (position.endsWith('end')) {
          top = `${anchorElemOrigin.bottom}px`;
        } else {
          top = `${anchorElemOrigin.top + anchorElemOrigin.height / 2}px`;
        }
      }

      mergedRootStyle = mergeStyles(
        {
          top,
          left
        },
        { transitionDuration: `${transitionDuration}ms` },
        rootStyle
      );
    }

    const mergedRootClassName = twMerge(
      mergeClasses(
        rootStyles.base,
        rootStyles.positions[position],
        rootStyles.colors[theme][color],
        isOpen && rootStyles.show,
        rootClassName
      )
    );

    let rootNode = (
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

    const tooltipNode = document.getElementById('tooltip');

    rootNode =
      tooltipNode === null ? rootNode : createPortal(rootNode, tooltipNode);

    return rootNode;
  }
);

Tooltip.displayName = 'Tooltip';

export default Tooltip;
