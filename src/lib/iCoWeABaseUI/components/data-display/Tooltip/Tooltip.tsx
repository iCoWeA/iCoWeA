import React, {
  type ReactNode,
  type ReactElement,
  forwardRef,
  useRef,
  useState,
  useImperativeHandle,
  useCallback,
  useEffect,
  useMemo
} from 'react';

import { mergeClasses } from '../../../../iCoWeAUI/utils/utils';
import useAddEventListener from '../../../hooks/useAddEventListener';
import useConfig from '../../../hooks/useConfig';
import usePrevious from '../../../hooks/usePrevious';
import useWindowResize from '../../../hooks/useWindowResize';
import useWindowScroll from '../../../hooks/useWindowScroll';
import { setPlacement, setArrowPlacement } from '../../../utils/popoverHelper';
import Popover, { type PopoverProps } from '../../utils/Popover/Popover';
import TooltipAnchor from './TooltipAnchor';
import tooltipConfig from './tooltipConfig';

export type TooltipDefaultProps = {
  placement?: OuterPlacements;
  offset?: number | string;
  spacing?: Spacings;
  variant?: Variants;
  color?: DefaultColors;
  border?: Borders;
  keepOnHover?: boolean;
  followCursor?: boolean;
  responsive?: boolean;
  closeOnEscape?: boolean;
  arrow?: boolean;
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
    placement,
    offset,
    responsive,
    keepOnHover,
    followCursor,
    arrow,
    open,
    portalTarget,
    defaultClassName,
    className,
    content,
    children,
    ...restProps
  } = useConfig('tooltip', tooltipConfig.defaultProps, props);

  const ref = useRef<HTMLDivElement>(null);
  const anchorRef = useRef<HTMLElement>(null);
  const arrowRef = useRef<HTMLDivElement>(null);
  const cursor = useRef<CursorPosition>({ x: 0, y: 0 });
  const prevOpen = usePrevious(open);

  const [isOpen, setIsOpen] = useState(false);

  useImperativeHandle<HTMLDivElement | null, HTMLDivElement | null>(
    forwardedRef,
    () => ref.current,
    []
  );

  /* --- Set event handlers --- */
  const isControlled = open !== undefined;

  const resizeHandler = useCallback((): void => {
    if (!ref.current || !anchorRef?.current) {
      return;
    }

    let newPlacement: OuterPlacements;

    if (followCursor) {
      newPlacement = setPlacement(
        ref.current,
        placement,
        cursor.current.x,
        cursor.current.y,
        cursor.current.y,
        cursor.current.x,
        0,
        0,
        +offset,
        responsive
      );
    } else {
      newPlacement = setPlacement(
        ref.current,
        placement,
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
      );
    }

    if (arrow && arrowRef.current) {
      setArrowPlacement(arrowRef.current, newPlacement);
    }
  }, [followCursor, placement, offset, responsive, !!portalTarget, arrow]);

  const leaveHandler = useCallback(
    (event: MouseEvent): void => {
      if (!(anchorRef.current?.contains(event.relatedTarget as Node) ?? false)) {
        if (isControlled && onClose !== undefined) {
          onClose(false);
        }

        if (!isControlled) {
          setIsOpen(false);
        }
      }
    },
    [isControlled, onClose]
  );

  useEffect(() => {
    if (prevOpen !== undefined && open === undefined) {
      setIsOpen(prevOpen);
    }
  }, [open]);

  useEffect(() => {
    resizeHandler();
  }, [open ?? isOpen]);

  useWindowResize(responsive && (open ?? isOpen) && resizeHandler);

  useWindowScroll(responsive && (open ?? isOpen) && resizeHandler);

  useAddEventListener(ref, 'mouseenter', keepOnHover && (open ?? isOpen) && leaveHandler);

  useAddEventListener(ref, 'mouseleave', keepOnHover && (open ?? isOpen) && leaveHandler);

  /* --- Set classes --- */
  const mergedClassName = useMemo(() => {
    const styles = tooltipConfig.styles;

    return mergeClasses(
      styles.base,
      followCursor && styles.followCursor,
      defaultClassName,
      className
    );
  }, [followCursor, defaultClassName, className]);

  return (
    <>
      {children && (
        <TooltipAnchor
          setState={isControlled ? onClose : setIsOpen}
          resizeHandler={resizeHandler}
          keepOnHover={keepOnHover}
          followCursor={followCursor}
          open={open}
          isOpen={isOpen}
          cursor={cursor}
          rootRef={ref}
          ref={anchorRef}
        >
          {children}
        </TooltipAnchor>
      )}
      <Popover
        onClose={isControlled ? onClose : setIsOpen}
        responsive={false}
        openOnHover={false}
        lockScroll={false}
        closeOnOutsideClick={false}
        closeOnBackdropClick
        arrow={arrow}
        backdrop="none"
        open={open ?? isOpen}
        portalTarget={portalTarget}
        arrowRef={arrowRef}
        className={mergedClassName}
        role="tooltip"
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
