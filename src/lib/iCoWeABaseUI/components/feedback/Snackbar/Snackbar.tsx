import React, { type MutableRefObject, forwardRef } from 'react';

import { mergeClasses } from '../../../../iCoWeAUI/utils/utils';
import useConfig from '../../../hooks/useConfig';
import Popper, { type PopperProps } from '../../utils/Popper/Popper';
import snackbarConfig from './snackbarConfig';

export type SnackbarDefaultProps = {
  position?: InnerPositions;
  closeOnEscape?: boolean;
  closeDuration?: number;
};

export type SnackbarProps = PopperProps &
SnackbarDefaultProps & {
  onClose?: ((state: boolean) => void) | ((state?: boolean) => void);
  open?: boolean;
  portalTarget?: Element | null;
  anchorRef?: MutableRefObject<HTMLElement | null>;
};

const Snackbar = forwardRef<HTMLDivElement, SnackbarProps>((props, ref) => {
  const { position, defaultClassName, className, ...restProps } = useConfig(
    'snackbar',
    snackbarConfig.defaultProps,
    props
  );

  /* --- Set classes --- */
  const styles = snackbarConfig.styles;

  const mergedClassName = mergeClasses(
    styles.base,
    styles.positions[position],
    defaultClassName,
    className
  );

  return (
    <Popper
      lockScroll={false}
      closeOnOutsideClick
      focusTrap={false}
      backdrop={false}
      closeOnBackdropClick
      className={mergedClassName}
      ref={ref}
      {...restProps}
    />
  );
});

Snackbar.displayName = 'Snackbar';

export default Snackbar;
