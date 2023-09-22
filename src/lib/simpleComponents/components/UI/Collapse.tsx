import React, { forwardRef, useRef, useImperativeHandle, useEffect } from 'react';
import collapseConfig from '../../configs/collapseConfig';
import { mergeClasses } from '../../utils/propsHelper';
import Transition, { type TransitionProps } from './Transition';

/* ARIA
 *
 * Set aria-controls to handler
 * Set aria-expanded to handler
 *
 */

export type CollapseDirections = 'horizontal' | 'horizontal-full' | 'vertical' | 'vertical-full';

export interface CollapseProps extends TransitionProps {
  onClose?: () => void;
  direction?: CollapseDirections;
  closeOnAwayClick?: boolean;
  closeDuration?: number;
}

const Collapse = forwardRef<HTMLDivElement, CollapseProps>((props, ref) => {
  /* --- Set default props --- */
  const styles = collapseConfig.styles;
  const { onClose, onEntering, onExiting, direction, closeOnAwayClick, closeDuration, open, className, ...restProps } = {
    ...collapseConfig.defaultProps,
    ...props
  };

  /* --- Set refs --- */
  const collapseRef = useRef<HTMLDivElement>(null);

  /* --- Set imperative handler --- */
  useImperativeHandle<HTMLDivElement | null, HTMLDivElement | null>(ref, () => collapseRef.current, []);

  /* --- Set outside click action --- */
  useEffect(() => {
    const outsideClickHandler = (event: MouseEvent): void => {
      const isSnackbarClicked = collapseRef.current?.contains(event.target as Node) ?? false;

      if (!isSnackbarClicked && onClose !== undefined) {
        onClose();
      }
    };

    if (closeOnAwayClick && open && onClose !== undefined) {
      document.addEventListener('click', outsideClickHandler);
    }

    return () => {
      if (closeOnAwayClick && open && onClose !== undefined) {
        document.removeEventListener('click', outsideClickHandler);
      }
    };
  }, [onClose, closeOnAwayClick, open]);

  /* --- Set timer action --- */
  useEffect(() => {
    let timerId: number;

    if (open && closeDuration !== undefined && onClose !== undefined) {
      timerId = window.setTimeout(() => {
        onClose();
      }, closeDuration);
    }

    return () => {
      if (open && closeDuration !== undefined && onClose !== undefined) {
        clearTimeout(timerId);
      }
    };
  }, [open, closeDuration, onClose]);

  /* --- Set default style --- */
  const enteringHandler = (): void => {
    if (open && direction === 'vertical' && collapseRef.current !== null) {
      collapseRef.current.style.height = `${collapseRef.current.scrollHeight}px`;
    }

    if (open && direction === 'horizontal' && collapseRef.current !== null) {
      collapseRef.current.style.width = `${collapseRef.current.scrollWidth}px`;
    }

    if (open && direction === 'vertical-full' && collapseRef.current !== null) {
      collapseRef.current.style.height = '100%';
    }

    if (open && direction === 'horizontal-full' && collapseRef.current !== null) {
      collapseRef.current.style.width = '100%';
    }

    if (onEntering !== undefined) {
      onEntering();
    }
  };

  const exitingHandler = (): void => {
    if (!open && (direction === 'vertical' || direction === 'vertical-full') && collapseRef.current !== null) {
      collapseRef.current.style.height = '0px';
    }

    if (!open && (direction === 'horizontal' || direction === 'horizontal-full') && collapseRef.current !== null) {
      collapseRef.current.style.width = '0px';
    }

    if (onExiting !== undefined) {
      onExiting();
    }
  };

  /* --- Set props --- */
  const mergedClassName = mergeClasses(styles.base, styles.directions[direction], className);

  return (
    <Transition
      onEntering={enteringHandler}
      onExiting={exitingHandler}
      open={open}
      className={mergedClassName}
      ref={collapseRef}
      {...restProps}
    />
  );
});

Collapse.displayName = 'Collapse';

export default Collapse;
