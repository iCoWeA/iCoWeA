import React, { forwardRef } from 'react';

import useConfig from '../../../hooks/useConfig';
import { mergeClasses } from '../../../utils/utils';
import Popper, { type PopperProps } from '../../utils/Popper/Popper';
import snackbarConfig from './snackbarConfig';

export type SnackbarDefaultProps = {
  position?: InnerPositions;
};

export type SnackbarProps = PopperProps & SnackbarDefaultProps;

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
      open={false}
      lockScroll={false}
      closeOnOutsideClick
      closeOnEscape
      closeDuration={-1}
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
