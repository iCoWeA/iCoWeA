import React, {
  type MutableRefObject,
  forwardRef,
  useState,
  useRef,
  useImperativeHandle,
  useEffect
} from 'react';

import useAddEventListener from '../../../hooks/useAddEventListener';
import useConfig from '../../../hooks/useConfig';
import useTheme from '../../../hooks/useTheme';
import useWindowResize from '../../../hooks/useWindowResize';
import useWindowScroll from '../../../hooks/useWindowScroll';
import { setPosition } from '../../../utils/popoverHelper';
import { mergeClasses } from '../../../utils/utils';
import Popper, { type PopperProps } from '../Popper/Popper';
import PopoverArrow, { type PopoverArrowDefaultProps } from './PopoverArrow';
import PopoverDropdown, { type PopoverDropdownDefaultProps } from './PopoverDropdown';
import popoverConfig from './popoverConfig';

export type PopoverDefaultProps = {
  position?: OuterPositions;
  offset?: number | string;
  variant?: DropdownVariants;
  color?: Colors;
  spacing?: Spacing;
  responsive?: boolean;
  arrow?: boolean;
  openOnHover?: boolean;
  lockScroll?: boolean;
  closeOnOutsideClick?: boolean;
  closeOnEscape?: boolean;
  backdrop?: boolean;
  closeOnBackdropClick?: boolean;
};

export type PopoverProps = Omit<PopperProps, 'variant'> &
PopoverDefaultProps & {
  onOpen?: ((state: boolean) => void) | ((state?: boolean) => void);
  onClose?: ((state: boolean) => void) | ((state?: boolean) => void);
  open?: boolean;
  portalTarget?: Element | null;
  anchorRef?: MutableRefObject<HTMLElement | null>;
  dropdownProps?: PopoverDropdownDefaultProps;
  arrowProps?: PopoverArrowDefaultProps;
};

const Popover = forwardRef<HTMLDivElement, PopoverProps>((props, forwardedRef) => {
  const {
    onOpen,
    open,
    position,
    offset,
    variant,
    color,
    spacing,
    responsive,
    arrow,
    openOnHover,
    portalTarget,
    anchorRef,
    dropdownProps,
    arrowProps,
    defaultClassName,
    className,
    children,
    ...restProps
  } = useConfig('popover', popoverConfig.defaultProps, props);
  const theme = useTheme();

  const ref = useRef<HTMLDivElement>(null);

  const [resizedPosition, setResizedPosition] = useState<OuterPositions>(position);

  useImperativeHandle<HTMLDivElement | null, HTMLDivElement | null>(
    forwardedRef,
    () => ref.current,
    []
  );

  /* --- Set event handlers --- */
  const openHandler = onOpen && (() => onOpen(true));

  const resizeHandler = (): void => {
    if (!ref.current || !anchorRef?.current) {
      return;
    }

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
  };

  useEffect(() => {
    resizeHandler();
  }, [open]);

  useAddEventListener(anchorRef, 'mouseenter', openOnHover && !open && openHandler);

  useWindowResize(responsive && open && resizeHandler);

  useWindowScroll(responsive && open && resizeHandler);

  /* --- Set classes --- */
  const styles = popoverConfig.styles.root;

  const mergedClassName = mergeClasses(styles.base, defaultClassName, className);

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
        variant={variant}
        color={color}
        spacing={spacing}
        {...dropdownProps}
      >
        {arrow && (
          <PopoverArrow
            theme={theme}
            position={resizedPosition}
            variant={variant}
            color={color}
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
