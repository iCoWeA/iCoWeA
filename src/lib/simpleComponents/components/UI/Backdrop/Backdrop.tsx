import React, { forwardRef, useContext, type BaseHTMLAttributes } from 'react';
import themeContext from '../../../contexts/theme';
import backdropConfig from '../../../configs/backdropConfig';
import { mergeClasses } from '../../../utils/propsHelper';
import { createPortal } from 'react-dom';

export interface BackdropProps extends BaseHTMLAttributes<HTMLDivElement> {
  onClose?: () => void;
  open?: boolean;
  invisible?: boolean;
  overlayRef?: Element | null;
}

const Backdrop = forwardRef<HTMLDivElement, BackdropProps>((props, ref) => {
  /* --- Set context props --- */
  const theme = useContext(themeContext).theme;

  /* --- Set default props --- */
  const styles = backdropConfig.styles;
  const { onClose, open, invisible, overlayRef, onClick, className, ...restProps } = { ...backdropConfig.defaultProps, ...props };

  /* --- Set props --- */
  let clickHandler = onClick;

  clickHandler = (event) => {
    if (onClose !== undefined) {
      onClose();
    }

    if (onClick !== undefined) {
      onClick(event);
    }
  };

  const mergedClassName = mergeClasses(styles.base, styles.color[theme], open && styles.open, invisible && styles.invisible, className);

  const node = (
    <div
      onClick={clickHandler}
      className={mergedClassName}
      ref={ref}
      {...restProps}
    />
  );

  return overlayRef === null ? node : createPortal(node, overlayRef);
});

Backdrop.displayName = 'Backdrop';

export default Backdrop;
