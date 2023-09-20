import React, { forwardRef } from 'react';
import { createPortal } from 'react-dom';
import backdropConfig from '../../configs/backdropConfig';
import { mergeClasses } from '../../utils/propsHelper';
import Fade, { type FadeProps } from './Fade';

export interface BackdropProps extends FadeProps {
  open?: boolean;
  invisible?: boolean;
  keepMounted?: boolean;
  overlayRef?: Element | null;
}

const Backdrop = forwardRef<HTMLDivElement, BackdropProps>((props, ref) => {
  /* --- Set default props --- */
  const styles = backdropConfig.styles;
  const { open, invisible, keepMounted, overlayRef, className, ...restProps } = { ...backdropConfig.defaultProps, ...props };

  /* --- Set props --- */
  const mergedClassName = mergeClasses(styles.base, invisible && styles.invisible, className);

  const node = (
    <Fade
      open={open}
      keepMounted={keepMounted}
      className={mergedClassName}
      ref={ref}
      {...restProps}
    />
  );

  return overlayRef === undefined || overlayRef === null ? node : createPortal(node, overlayRef);
});

Backdrop.displayName = 'Backdrop';

export default Backdrop;
