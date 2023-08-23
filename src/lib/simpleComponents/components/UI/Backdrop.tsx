import React, { forwardRef, useContext, type BaseHTMLAttributes, type MouseEvent, type MouseEventHandler } from 'react';
import themeContext from '../../contexts/theme';
import { mergeClasses, mergeProps } from '../../utils/propsHelper';
import { createPortal } from 'react-dom';

export interface BackdropProps extends BaseHTMLAttributes<HTMLDivElement> {
  onClose?: () => void;
  open?: boolean;
  invisible?: boolean;
  overlayRef?: Element | null;
  onClick?: MouseEventHandler;
  className?: string;
}

const Backdrop = forwardRef<HTMLDivElement, BackdropProps>((props, ref) => {
  const { theme, config } = useContext(themeContext);
  const { defaultProps, styles } = config.backdrop;
  const { onClose, open, invisible, overlayRef, onClick, className, ...restProps } = mergeProps(defaultProps, props);

  /* Set props */
  const clickHandler = (event: MouseEvent<HTMLDivElement>): void => {
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
