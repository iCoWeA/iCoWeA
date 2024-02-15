import React, { type MutableRefObject, forwardRef, useMemo } from 'react';

import { mergeClasses } from '../../../../iCoWeAUI/utils/utils';
import useConfig from '../../../hooks/useConfig';
import Popper, { type PopperProps } from '../../utils/Popper/Popper';
import snackbarConfig from './snackbarConfig';

export type SnackbarDefaultProps = {
  placement?: InnerPlacements;
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
  const { placement, defaultClassName, className, ...restProps } = useConfig(
    'snackbar',
    snackbarConfig.defaultProps,
    props
  );

  /* --- Set classes --- */
  const mergedClassName = useMemo(() => {
    const styles = snackbarConfig.styles;

    return mergeClasses(styles.base, styles.placements[placement], defaultClassName, className);
  }, [placement, defaultClassName, className]);

  return (
    <Popper
      lockScroll={false}
      closeOnOutsideClick={false}
      focusTrap={false}
      closeOnBackdropClick
      backdrop="none"
      className={mergedClassName}
      ref={ref}
      {...restProps}
    />
  );
});

Snackbar.displayName = 'Snackbar';

export default Snackbar;
