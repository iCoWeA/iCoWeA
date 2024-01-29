import React, {
  type ReactNode,
  type ReactElement,
  forwardRef,
  useRef,
  useState,
  useImperativeHandle,
  useEffect
} from 'react';

import { mergeClasses } from '../../../../iCoWeAUI/utils/utils';
import useAddEventListener from '../../../hooks/useAddEventListener';
import useConfig from '../../../hooks/useConfig';
import usePrevious from '../../../hooks/usePrevious';
import useWindowResize from '../../../hooks/useWindowResize';
import useWindowScroll from '../../../hooks/useWindowScroll';
import { setPosition } from '../../../utils/popoverHelper';
import Popover, { type PopoverProps } from '../../utils/Popover/Popover';
import TooltipAnchor from './TooltipAnchor';
import tooltipConfig from './tooltipConfig';

export type CursorPosition = {
  x: number;
  y: number;
};

export type TooltipDefaultProps = {
  position?: OuterPositions;
  offset?: number | string;
  variant?: Variants;
  color?: Colors;
  spacing?: Spacing;
  responsive?: boolean;
  arrow?: boolean;
  keepOnHover?: boolean;
  followCursor?: boolean;
  closeOnEscape?: boolean;
};

export type TooltipProps = Omit<PopoverProps, 'content'> &
TooltipDefaultProps & {
  onClose?: ((state: boolean) => void) | ((state?: boolean) => void);
  open?: boolean;
  portalTarget?: Element | null;
  content?: ReactNode;
  children?: ReactElement;
};

const Tooltip = forwardRef<HTMLDivElement, TooltipProps>((props, forwardedRef) => {
  const {
    onClose,
    open,
    position,
    offset,
    responsive,
    keepOnHover,
    followCursor,
    portalTarget,
    defaultClassName,
    className,
    content,
    children,
    ...restProps
  } = useConfig('tooltip', tooltipConfig.defaultProps, props);

  const ref = useRef<HTMLDivElement>(null);
  const anchorRef = useRef<HTMLElement>(null);
  const cursor = useRef<CursorPosition>({ x: 0, y: 0 });
  const prevOpen = usePrevious(open);

  const [isOpen, setIsOpen] = useState(false);
  const [resizedPosition, setResizedPosition] = useState<OuterPositions>(position);

  useImperativeHandle<HTMLDivElement | null, HTMLDivElement | null>(
    forwardedRef,
    () => ref.current,
    []
  );

  /* --- Set event handlers --- */
  const isControlled = open !== undefined;

  const resizeHandler = (): void => {
    if (!ref.current || !anchorRef?.current) {
      return;
    }

    if (followCursor) {
      setResizedPosition(
        setPosition(
          ref.current,
          position,
          cursor.current.x,
          cursor.current.y,
          cursor.current.y,
          cursor.current.x,
          0,
          0,
          +offset,
          responsive
        )
      );
    } else {
      setResizedPosition(
        setPosition(
          ref.current,
          position,
          anchorRef.current.getBoundingClientRect().x,
          anchorRef.current.getBoundingClientRect().y,
          portalTarget
            ? anchorRef.current.getBoundingClientRect().y + document.documentElement.scrollTop
            : anchorRef.current.offsetTop,
          portalTarget
            ? anchorRef.current.getBoundingClientRect().x + document.documentElement.scrollLeft
            : anchorRef.current.offsetLeft,
          anchorRef.current.offsetHeight,
          anchorRef.current.offsetWidth,
          +offset,
          responsive
        )
      );
    }
  };

  const enterHandler = (event: MouseEvent): void => {
    if (!(anchorRef.current?.contains(event.relatedTarget as Node) ?? false)) {
      if (isControlled && onClose !== undefined) {
        onClose(false);
      }

      if (!isControlled) {
        setIsOpen(false);
      }
    }
  };

  const leaveHandler = (event: MouseEvent): void => {
    if (!(anchorRef.current?.contains(event.relatedTarget as Node) ?? false)) {
      if (isControlled && onClose !== undefined) {
        onClose(false);
      }

      if (!isControlled) {
        setIsOpen(false);
      }
    }
  };

  useEffect(() => {
    if (prevOpen !== undefined && open === undefined) {
      setIsOpen(prevOpen);
    }
  }, [open]);

  useEffect(() => {
    resizeHandler();
  }, [open ?? isOpen]);

  useWindowResize(responsive && (open ?? isOpen) && resizeHandler);

  useWindowScroll(responsive && open && resizeHandler);

  useAddEventListener(ref, 'mouseenter', keepOnHover && (open ?? isOpen) && enterHandler);

  useAddEventListener(ref, 'mouseleave', keepOnHover && (open ?? isOpen) && leaveHandler);

  /* --- Set classes --- */
  const styles = tooltipConfig.styles;

  const mergedClassName = mergeClasses(
    styles.base,
    followCursor && styles.followCursor,
    defaultClassName,
    className
  );

  return (
    <>
      {children && (
        <TooltipAnchor
          setState={isControlled ? onClose : setIsOpen}
          resizeHandler={resizeHandler}
          open={open}
          isOpen={isOpen}
          keepOnHover={keepOnHover}
          followCursor={followCursor}
          rootRef={ref}
          cursor={cursor}
          ref={anchorRef}
        >
          {children}
        </TooltipAnchor>
      )}
      <Popover
        onClose={isControlled ? onClose : setIsOpen}
        open={open ?? isOpen}
        position={resizedPosition}
        offset="0"
        responsive={false}
        openOnHover={false}
        lockScroll={false}
        closeOnOutsideClick={false}
        backdrop={false}
        closeOnBackdropClick={false}
        portalTarget={portalTarget}
        role="tooltip"
        className={mergedClassName}
        ref={ref}
        {...restProps}
      >
        {content}
      </Popover>
    </>
  );
});

Tooltip.displayName = 'Tooltip';

export default Tooltip;
