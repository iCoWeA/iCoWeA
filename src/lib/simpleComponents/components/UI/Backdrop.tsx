import React, { type BaseHTMLAttributes, forwardRef, useContext } from 'react';
import backdropConfig from '../../configs/backdropConfig';
import themeContext from '../../contexts/theme';
import { mergeClasses } from '../../utils/propsHelper';

export interface BackdropProps extends BaseHTMLAttributes<HTMLDivElement> {
  onClose?: () => void;
  open?: boolean;
  invisible?: boolean;
}

const Backdrop = forwardRef<HTMLDivElement, BackdropProps>((props, ref) => {
  /* --- Set context props --- */
  const theme = useContext(themeContext).theme;

  /* --- Set default props --- */
  const styles = backdropConfig.styles;
  const { onClose, open, invisible, className, ...restProps } = { ...backdropConfig.defaultProps, ...props };

  /* --- Set props --- */
  const mergedClassName = mergeClasses(styles.base, styles.colors[theme], invisible && styles.invisible, className);

  return (
    <div
      onClick={onClose}
      className={mergedClassName}
      ref={ref}
      {...restProps}
    />
  );
});

Backdrop.displayName = 'Backdrop';

export default Backdrop;
