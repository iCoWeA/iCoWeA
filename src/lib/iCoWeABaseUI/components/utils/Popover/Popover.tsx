import React, {
  type MutableRefObject,
  forwardRef,
  useRef,
  useState,
  useImperativeHandle,
  useEffect,
  useCallback,
  useMemo
} from 'react';

import useTheme from '../../../../iCoWeAUI/hooks/useTheme';
import { mergeClasses } from '../../../../iCoWeAUI/utils/utils';
import useConfig from '../../../hooks/useConfig';
import useMergeRefs from '../../../hooks/useMergeRefs';
import useWindowResize from '../../../hooks/useWindowResize';
import useWindowScroll from '../../../hooks/useWindowScroll';
import { setPlacement, setArrowPlacement } from '../../../utils/popoverHelper';
import Popper, { type PopperProps } from '../Popper/Popper';
import PopoverArrow, { type PopoverArrowDefaultProps } from './PopoverArrow';
import PopoverDropdown, { type PopoverDropdownDefaultProps } from './PopoverDropdown';
import popoverConfig from './popoverConfig';

export type PopoverDefaultProps = {
  placement?: OuterPlacements;
  offset?: number | string;
  spacing?: Spacings;
  variant?: Variants;
  color?: DefaultColors;
  border?: Borders;
  radius?: Radiuses;
  responsive?: boolean;
  lockScroll?: boolean;
  closeOnOutsideClick?: boolean;
  closeOnEscape?: boolean;
  closeOnBackdropClick?: boolean;
  arrow?: boolean;
  backdrop?: Backdrop;
};

export type PopoverProps = PopperProps &
PopoverDefaultProps & {
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
    placement,
    offset,
    spacing,
    variant,
    color,
    border,
    radius,
    responsive,
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

  const [isRendered, setIsRendered] = useState(false);

  useImperativeHandle<HTMLDivElement | null, HTMLDivElement | null>(
    forwardedRef,
    () => ref.current,
    []
  );

  useEffect(() => setIsRendered(true), []);

  /* --- Set event handlers --- */
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

  useWindowResize(responsive && open && resizeHandler);

  useWindowScroll(responsive && open && resizeHandler);

  /* --- Set classes --- */
  const mergedClassName = useMemo(() => {
    const styles = popoverConfig.styles.root;

    return mergeClasses(styles.base, defaultClassName, className);
  }, [defaultClassName, className]);

  return (
    <Popper
      onEntering={resizeHandler}
      open={isRendered ? open : false}
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
