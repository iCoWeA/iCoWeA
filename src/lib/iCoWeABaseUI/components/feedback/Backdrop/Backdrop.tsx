import React, { forwardRef, useMemo } from 'react';

import { mergeClasses } from '../../../../iCoWeAUI/utils/utils';
import useConfig from '../../../hooks/useConfig';
import Overlay, { type OverlayProps } from '../Overlay/Overlay';
import backdropConfig from './backdropConfig';

export type BackdropDefaultProps = {
  invisible?: boolean;
};

export type BackdropProps = OverlayProps &
BackdropDefaultProps & {
  onClose?: (() => void) | ((state: boolean) => void);
  open?: boolean;
  portalTarget?: Element | null;
};

const Backdrop = forwardRef<HTMLDivElement, BackdropProps>((props, ref) => {
  const { defaultClassName, className, ...restProps } = useConfig(
    'backdrop',
    backdropConfig.defaultProps,
    props
  );

  /* --- Set classes --- */
  const mergedClassName = useMemo(() => {
    const styles = backdropConfig.styles;

    return mergeClasses(styles.base, defaultClassName, className);
  }, [defaultClassName, className]);

  return (
    <Overlay
      className={mergedClassName}
      ref={ref}
      {...restProps}
    />
  );
});

Backdrop.displayName = 'Backdrop';

export default Backdrop;
