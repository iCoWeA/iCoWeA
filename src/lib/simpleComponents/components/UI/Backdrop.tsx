import React, { forwardRef, useEffect, useImperativeHandle, useRef } from 'react';
import { createPortal } from 'react-dom';
import backdropConfig from '../../configs/backdropConfig';
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
  useEffect(() => {
    const clickHandler = (): void => {
      if (onClose !== undefined) {
        onClose();
      }
    };

    backdropRef.current?.addEventListener('click', clickHandler);

    return () => {
      backdropRef.current?.removeEventListener('click', clickHandler);
    };
  }, [onClose]);

  /* --- Set props --- */
  const mergedClassName = mergeClasses(styles.base, invisible && styles.invisible, className);

  const node = (
    <Fade
      className={mergedClassName}
      ref={backdropRef}
      {...restProps}
    />
  );

  return overlayRef === undefined || overlayRef === null ? node : createPortal(node, overlayRef);
});

Backdrop.displayName = 'Backdrop';

export default Backdrop;
