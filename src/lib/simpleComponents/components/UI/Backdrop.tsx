import React, { forwardRef, useContext, type BaseHTMLAttributes, type MouseEvent, type MouseEventHandler } from 'react';
import themeContext from '../../contexts/theme';
import { mergeClasses, mergeProps } from '../../utils/propsHelper';

export interface BackdropProps extends BaseHTMLAttributes<HTMLDivElement> {
  onClose?: () => void;
  open?: boolean;
  invisible?: boolean;
  onClick?: MouseEventHandler;
  className?: string;
}

const Backdrop = forwardRef<HTMLDivElement, BackdropProps>((props, ref) => {
  const { theme, config } = useContext(themeContext);
  const { defaultProps, styles } = config.backdrop;
  const { onClose, open, invisible, onClick, className, ...restProps } = mergeProps(defaultProps, props);

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

  return (
    <div
      onClick={clickHandler}
      className={mergedClassName}
      ref={ref}
      {...restProps}
    />
  );
});

Backdrop.displayName = 'Backdrop';

export default Backdrop;
