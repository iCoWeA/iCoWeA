import React, { forwardRef, useContext } from 'react';
import { createPortal } from 'react-dom';
import backdropConfig from '../../configs/backdropConfig';
import themeContext from '../../contexts/theme';
import { mergeClasses } from '../../utils/propsHelper';
import Fade, { type FadeProps } from './Fade';

export interface BackdropProps extends FadeProps {
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
  const { onClose, open, invisible, overlayRef, className, ...restProps } = { ...backdropConfig.defaultProps, ...props };

  /* --- Set props --- */
  const mergedClassName = mergeClasses(styles.base, styles.colors[theme], invisible && styles.invisible, className);

  const node = (
    <Fade
      onClick={onClose}
      open={open}
      keepMounted={false}
      className={mergedClassName}
      ref={ref}
      {...restProps}
    />
  );

  return overlayRef === null ? node : createPortal(node, overlayRef);
});

Backdrop.displayName = 'Backdrop';

export default Backdrop;
