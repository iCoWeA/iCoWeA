import React, { forwardRef, useContext, useRef, useImperativeHandle, useCallback } from 'react';
import popoverConfig from '../../configs/popoverConfig';
import themeContext from '../../contexts/theme';
import { setElementPosition } from '../../utils/positiontHelper';
import { mergeClasses } from '../../utils/propsHelper';
import Popper, { type PopperProps } from './Popper';

export type PopoverVariants = 'plain' | 'filled' | 'outlined';

export interface PopoverProps extends PopperProps {
  onClose?: () => void;
  open?: boolean;
  variant?: PopoverVariants;
  position?: OuterPositions;
  responsive?: boolean;
  offset?: number;
  lockScroll?: boolean;
  closeOnAwayClick?: boolean;
  keepMounted?: boolean;
  backdrop?: boolean;
  anchorElement?: HTMLElement | null;
  overlayRef?: Element | null;
}

const Popover = forwardRef<HTMLDivElement, PopoverProps>((props, ref) => {
  /* --- Set context props --- */
  const theme = useContext(themeContext).theme;

  /* --- Set default props --- */
  const styles = popoverConfig.styles;
  const {
    onClose,
    open,
    variant,
    position,
    responsive,
    offset,
    lockScroll,
    closeOnAwayClick,
    keepMounted,
    backdrop,
    anchorElement,
    overlayRef,
    className,
    ...restProps
  } = {
    ...popoverConfig.defaultProps,
    ...props
  };

  /* --- Set refs --- */
  const popperRef = useRef<HTMLDivElement | null>(null);

  /* --- Set imperative anchorElement --- */
  useImperativeHandle<HTMLDivElement | null, HTMLDivElement | null>(ref, () => popperRef.current, []);

  /* --- Set position action --- */
  const resizeHandler = useCallback(() => {
    setElementPosition(
      popperRef.current,
      position,
      anchorElement?.offsetTop,
      anchorElement?.offsetLeft,
      anchorElement?.offsetHeight,
      anchorElement?.offsetWidth,
      offset,
      responsive
    );
  }, [position, anchorElement, offset, responsive]);

  /* --- Set props --- */
  const mergedClassName = mergeClasses(styles.base, styles.variants[variant][theme], className);

  return (
    <Popper
      onClose={onClose}
      onResize={resizeHandler}
      open={open}
      lockScroll={lockScroll}
      closeOnAwayClick={closeOnAwayClick}
      keepMounted={keepMounted}
      overlayRef={overlayRef}
      className={mergedClassName}
      ref={popperRef}
      {...restProps}
    />
  );
});

Popover.displayName = 'Popover';

export default Popover;
