import React, { type MouseEventHandler, type ReactElement, forwardRef, cloneElement, type BaseHTMLAttributes, useContext, useRef, useState, useImperativeHandle, useEffect, useCallback, type ReactNode, type MouseEvent } from 'react';
import tooltipConfig from '../../configs/tooltipConfig';
import themeContext from '../../contexts/theme';
import usePrevious from '../../hooks/usePrevious';
import { setElementPosition } from '../../utils/positiontHelper';
import { mergeClasses } from '../../utils/propsHelper';
import Popper, { type PopperProps } from './Popper';

const setArrowPosition = (element: HTMLElement | null, position: OuterPositions): void => {
  if (element === null) {
    return;
  }

  const splitedPosition = position.split('-')[0];

  if (splitedPosition === 'top') {
    element.style.bottom = '0';
    element.style.left = '50%';
    element.style.transform = 'translate(-50%, 100%) rotate(180deg)';
  }

  if (splitedPosition === 'bottom') {
    element.style.top = '0';
    element.style.left = '50%';
    element.style.transform = 'translate(-50%, -100%)';
  }

  if (splitedPosition === 'left') {
    element.style.top = '50%';
    element.style.right = '0';
    element.style.transform = 'translate(100%, -50%) rotate(90deg)';
  }

  if (splitedPosition === 'right') {
    element.style.top = '50%';
    element.style.left = '0';
    element.style.transform = 'translate(-100%, -50%) rotate(-90deg)';
  }
};

/********************************************************************************
 *
 *   Handler
 *
 */
interface HandlerProps {
  onMouseEnter: MouseEventHandler<HTMLElement>;
  onMouseLeave: MouseEventHandler<HTMLElement>;
  onMouseMove: MouseEventHandler<HTMLElement>;
  children: ReactElement;
}

const Handler = forwardRef<HTMLElement, HandlerProps>(({ onMouseEnter, onMouseLeave, onMouseMove, children }, ref) =>
  cloneElement(children, { onMouseEnter, onMouseLeave, onMouseMove, ref })
);

Handler.displayName = 'Handler';

/********************************************************************************
 *
 *   Arrow
 *
 */
interface ArrowProps extends BaseHTMLAttributes<HTMLDivElement> {
  variant: TooltipVariants;
}

const Arrow = forwardRef<HTMLDivElement, ArrowProps>(({ variant, className, ...restProps }, ref) => {
  /* --- Set context props --- */
  const theme = useContext(themeContext).theme;

  /* --- Set default props --- */
  const styles = tooltipConfig.styles.arrow;

  /* --- Set props --- */
  const mergedClassName = mergeClasses(styles.base, styles.variants[variant][theme], className);

  return (
    <div
      className={mergedClassName}
      ref={ref}
      {...restProps}
    />
  );
});

Arrow.displayName = 'Arrow';

/********************************************************************************
 *
 *   Tooltip
 *
 */
export type TooltipVariants = 'plain' | 'filled' | 'outlined';

export interface TooltipProps extends PopperProps {
  variant?: TooltipVariants;
  rich?: boolean;
  keepOnHover?: boolean;
  open?: boolean;
  position?: OuterPositions;
  responsive?: boolean;
  offset?: number;
  followCursor?: boolean;
  keepMounted?: boolean;
  arrow?: boolean;
  handler?: ReactElement;
  arrowProps?: BaseHTMLAttributes<HTMLDivElement>;
  overlayRef?: Element | null;
}

const Tooltip = forwardRef<HTMLDivElement, TooltipProps>((props, ref) => {
  /* --- Set context props --- */
  const theme = useContext(themeContext).theme;

  /* --- Set default props --- */
  const styles = tooltipConfig.styles.container;
  const {
    onMouseLeave,
    variant,
    rich,
    keepOnHover,
    open,
    position,
    responsive,
    offset,
    followCursor,
    keepMounted,
    arrow,
    handler,
    arrowProps,
    overlayRef,
    className,
    children,
    ...restProps
  } = {
    ...tooltipConfig.defaultProps,
    ...props
  };
  const isControlled = open !== undefined;

  /* --- Set refs --- */
  const tooltipRef = useRef<HTMLDivElement>(null);
  const handlerRef = useRef<HTMLElement | null>(null);
  const arrowRef = useRef<HTMLDivElement>(null);

  /* --- Set states --- */
  const [cursorY, setCursorY] = useState(-1);
  const [cursorX, setCursorX] = useState(-1);
  const [isOpen, setIsOpen] = useState(false);

  /* --- Set imperative anchorElement --- */
  useImperativeHandle<HTMLDivElement | null, HTMLDivElement | null>(ref, () => tooltipRef.current, []);

  /* --- Set previous values  --- */
  const prevOpen = usePrevious(open);

  useEffect(() => {
    if (prevOpen !== undefined && open === undefined) {
      setIsOpen(prevOpen);
    }
  }, [open]);

  /* --- Set key down action --- */
  useEffect(() => {
    const keyDownHandler = (event: KeyboardEvent): void => {
      if (event.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };

    if (!isControlled) {
      document.addEventListener('keydown', keyDownHandler);
    }

    return () => {
      if (!isControlled) {
        document.removeEventListener('keydown', keyDownHandler);
      }
    };
  }, [isOpen, isControlled]);

  /* --- Set position action --- */
  const resizeHandler = useCallback(() => {
    let newPosition = position;

    if (followCursor) {
      newPosition = setElementPosition(
        tooltipRef.current,
        position,
        cursorY + document.documentElement.scrollTop,
        cursorX + document.documentElement.scrollLeft,
        0,
        0,
        offset,
        responsive
      );
    }

    if (!followCursor) {
      newPosition = setElementPosition(
        tooltipRef.current,
        position,
        handlerRef.current?.offsetTop,
        handlerRef.current?.offsetLeft,
        handlerRef.current?.offsetHeight,
        handlerRef.current?.offsetWidth,
        offset,
        responsive
      );
    }

    if (arrow) {
      setArrowPosition(arrowRef.current, newPosition);
    }
  }, [followCursor, position, cursorY, cursorX, offset, responsive, arrow]);

  /* --- Set handler props --- */
  let handlerNode: ReactNode;

  if (handler !== undefined) {
    const setHandlerRef = (element: HTMLElement): void => {
      const ref = (handler as any).ref;

      if (ref === undefined || ref === null) {
        handlerRef.current = element;
      } else if (typeof ref === 'function') {
        handlerRef.current = element;
        ref(element);
      } else {
        handlerRef.current = element;
        ref.current = element;
      }
    };

    const mouseEnterHandler = (event: MouseEvent<HTMLElement>): void => {
      if (followCursor) {
        setCursorY(event.clientY);
        setCursorX(event.clientX);
      }

      if (!isControlled) {
        setIsOpen(true);
      }

      if (handler.props.onMouseEnter !== undefined) {
        handler.props.onMouseEnter(event);
      }
    };

    const mouseLeaveHandler = (event: MouseEvent<HTMLElement>): void => {
      if (!isControlled) {
        if (!keepOnHover || (keepOnHover && !(tooltipRef.current?.contains(event.relatedTarget as Node) ?? false))) {
          setIsOpen(false);
        }
      }

      if (handler.props.onMouseLeave !== undefined) {
        handler.props.onMouseLeave(event);
      }
    };

    const mouseMoveHandler = (event: MouseEvent<HTMLElement>): void => {
      if (followCursor) {
        setCursorY(event.clientY);
        setCursorX(event.clientX);
      }

      if (handler.props.onMouseMove !== undefined) {
        handler.props.onMouseMove(event);
      }
    };

    handlerNode = (
      <Handler
        onMouseEnter={mouseEnterHandler}
        onMouseLeave={mouseLeaveHandler}
        onMouseMove={mouseMoveHandler}
        ref={setHandlerRef}
      >
        {handler}
      </Handler>
    );
  }

  /* --- Set arrow props --- */
  let arrowNode: ReactNode;

  if (arrow) {
    arrowNode = (
      <Arrow
        variant={variant}
        {...arrowProps}
        ref={arrowRef}
      />
    );
  }

  /* --- Set props --- */
  let mouseLeaveHandler = onMouseLeave;

  if (keepOnHover && !isControlled) {
    mouseLeaveHandler = (event) => {
      if (!(handlerRef.current?.contains(event.relatedTarget as Node) ?? false)) {
        setIsOpen(false);
      }

      if (onMouseLeave !== undefined) {
        onMouseLeave(event);
      }
    };
  }

  const mergedClassName = mergeClasses(styles.base, styles.variants[variant][theme], !rich && styles.empty, className);

  return (
    <>
      {handlerNode}
      <Popper
        role="tooltip"
        onMouseLeave={mouseLeaveHandler}
        onResize={resizeHandler}
        open={open ?? isOpen}
        keepMounted={keepMounted}
        anchorElement={handlerRef.current}
        overlayRef={overlayRef}
        className={mergedClassName}
        ref={tooltipRef}
        {...restProps}
      >
        {arrowNode}
        {children}
      </Popper>
    </>
  );
});

Tooltip.displayName = 'Tooltip';

export default Tooltip;
