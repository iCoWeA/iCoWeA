import React, { forwardRef, useRef, useImperativeHandle, useCallback } from 'react';
import { createPortal } from 'react-dom';
import backdropConfig from '../../configs/backdropConfig';
import useAddEventListener from '../../hooks/useAddEventListener';
import { mergeClasses } from '../../utils/propsHelper';
import Fade, { type FadeProps } from './Fade';

export interface BackdropProps extends FadeProps {
  onClose?: () => void;
  invisible?: boolean;
  overlayRef?: Element | null;
}

const Backdrop = forwardRef<HTMLDivElement, BackdropProps>((props, ref) => {
  /* --- Set default props --- */
  const styles = backdropConfig.styles;
  const { onClose, invisible, overlayRef, className, ...restProps } = { ...backdropConfig.defaultProps, ...props };

  /* --- Set refs --- */
  const backdropRef = useRef<HTMLDivElement>(null);

  /* --- Set imperative ref --- */
  useImperativeHandle<HTMLDivElement | null, HTMLDivElement | null>(ref, () => backdropRef.current, []);

  /* --- Set click event --- */
  const clickHandler = useCallback(() => {
    if (onClose !== undefined) {
      onClose();
    }
  }, []);

  useAddEventListener(backdropRef, 'click', clickHandler);

  /* --- Set props --- */
  const mergedClassName = mergeClasses(styles.base, invisible && styles.invisible, className);

  const node = (
    <Fade
      className={mergedClassName}
      ref={backdropRef}
      {...restProps}
    />
  );

  return overlayRef === null ? node : createPortal(node, overlayRef);
});

Backdrop.displayName = 'Backdrop';

export default Backdrop;
