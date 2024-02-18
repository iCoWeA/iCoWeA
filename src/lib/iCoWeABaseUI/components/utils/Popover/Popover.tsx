import React, {
  type MutableRefObject,
  forwardRef,
  useRef,
  useImperativeHandle,
  useCallback,
  useEffect,
  useMemo
} from 'react';

import useTheme from '../../../../iCoWeAUI/hooks/useTheme';
import { mergeClasses } from '../../../../iCoWeAUI/utils/utils';
import useAddEventListener from '../../../hooks/useAddEventListener';
import useConfig from '../../../hooks/useConfig';
import useWindowResize from '../../../hooks/useWindowResize';
import useWindowScroll from '../../../hooks/useWindowScroll';
import { setArrowPlacement, setPlacement } from '../../../utils/popoverHelper';
import Popper, { type PopperProps } from '../Popper/Popper';
import PopoverArrow, { type PopoverArrowDefaultProps } from './PopoverArrow';
import PopoverDropdown, { type PopoverDropdownDefaultProps } from './PopoverDropdown';
import popoverConfig from './popoverConfig';
import useMergeRefs from '../../../hooks/useMergeRefs';

export type PopoverDefaultProps = {
  placement?: OuterPlacements;
  offset?: number | string;
  spacing?: Spacings;
  variant?: Variants;
  color?: DefaultColors;
  border?: Borders;
  radius?: Radiuses;
  responsive?: boolean;
  openOnHover?: boolean;
  lockScroll?: boolean;
  closeOnOutsideClick?: boolean;
  closeOnEscape?: boolean;
  closeOnBackdropClick?: boolean;
  arrow?: boolean;
  backdrop?: Backdrop;
};

export type PopoverProps = PopperProps &
PopoverDefaultProps & {
  onOpen?: ((state: boolean) => void) | ((state?: boolean) => void);
  onClose?: ((state: boolean) => void) | ((state?: boolean) => void);
  open?: boolean;
  portalTarget?: Element | null;
  dropdownProps?: PopoverDropdownDefaultProps;
  arrowProps?: PopoverArrowDefaultProps;
  anchorRef?: MutableRefObject<HTMLElement | null>;
  arrowRef?: MutableRefObject<HTMLDivElement | null>;
};

const Popover = forwardRef<HTMLDivElement, PopoverProps>((props, forwardedRef) => {
  const {
    onOpen,
    placement,
    offset,
    spacing,
    variant,
    color,
    border,
    radius,
    responsive,
    openOnHover,
    arrow,
    open,
    portalTarget,
    dropdownProps,
    arrowProps,
    anchorRef,
    arrowRef,
    defaultClassName,
    className,
    children,
    ...restProps
  } = useConfig('popover', popoverConfig.defaultProps, props);

  const theme = useTheme();

  const ref = useRef<HTMLDivElement>(null);
  const arrRef = useRef<HTMLDivElement>(null);

  useImperativeHandle<HTMLDivElement | null, HTMLDivElement | null>(
    forwardedRef,
    () => ref.current,
    []
  );

  /* --- Set event handlers --- */
  const openHandler = useCallback(() => (onOpen ? onOpen(true) : undefined), [onOpen]);

  const resizeHandler = useCallback((): void => {
    if (!ref.current || !anchorRef?.current) {
      return;
    }

    const newPlacement = setPlacement(
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

    if (arrow && arrRef.current) {
      setArrowPlacement(arrRef.current, newPlacement);
    }
  }, [placement, !!portalTarget, offset, responsive, arrow]);

  useEffect(() => {
    resizeHandler();
  }, [open]);

  useAddEventListener(anchorRef, 'mouseenter', openOnHover && !open && openHandler);

  useWindowResize(responsive && open && resizeHandler);

  useWindowScroll(responsive && open && resizeHandler);

  /* --- Set classes --- */
  const mergedClassName = useMemo(() => {
    const styles = popoverConfig.styles.root;

    return mergeClasses(styles.base, defaultClassName, className);
  }, [defaultClassName, className]);

  return (
    <Popper
      open={open}
      closeDuration={-1}
      focusTrap={false}
      anchorRef={anchorRef}
      portalTarget={portalTarget}
      className={mergedClassName}
      ref={ref}
      {...restProps}
    >
      <PopoverDropdown
        size={spacing}
        variant={variant}
        color={color}
        border={border}
        radius={radius}
        {...dropdownProps}
      >
        {arrow && (
          <PopoverArrow
            theme={theme}
            variant={variant}
            color={color}
            ref={useMergeRefs<HTMLDivElement>(arrRef, arrowRef)}
            {...arrowProps}
          />
        )}
        {children}
      </PopoverDropdown>
    </Popper>
  );
});

Popover.displayName = 'Popover';

export default Popover;
