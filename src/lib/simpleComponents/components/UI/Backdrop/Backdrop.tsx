import React, { type BaseHTMLAttributes, forwardRef } from 'react';
import { createPortal } from 'react-dom';
import backdropConfig from '../../../configs/backdropConfig';
import { mergeClasses } from '../../../utils/propsHelper';

export interface BackdropProps extends BaseHTMLAttributes<HTMLDivElement> {
  onClose?: () => void;
  open?: boolean;
  invisible?: boolean;
  overlayRef?: Element | null;
}

const Backdrop = forwardRef<HTMLDivElement, BackdropProps>((props, ref) => {
  /* --- Set default props --- */
  const styles = backdropConfig.styles;
  const { onClose, open, invisible, overlayRef, className, ...restProps } = { ...backdropConfig.defaultProps, ...props };

  /* --- Set props --- */
  const mergedClassName = mergeClasses(styles.base, invisible && styles.invisible, open && styles.open, className);

  const node = (
    <div
      onClick={onClose}
      className={mergedClassName}
      ref={ref}
      {...restProps}
    />
  );

  return overlayRef === null ? node : createPortal(node, overlayRef);
});

Backdrop.displayName = 'Backdrop';

export default Backdrop;
