import React, { forwardRef, useRef, useImperativeHandle, useCallback, useMemo } from 'react';
import { createPortal } from 'react-dom';

import useTheme from '../../../../iCoWeAUI/hooks/useTheme';
import { mergeClasses } from '../../../../iCoWeAUI/utils/utils';
import useAddEventListener from '../../../hooks/useAddEventListener';
import useConfig from '../../../hooks/useConfig';
import Transition, { type TransitionProps } from '../../utils/Transition/Transition';
import backdropConfig from './backdropConfig';

export type BackdropDefaultProps = {
  invisible?: boolean;
};

export type BackdropProps = TransitionProps &
BackdropDefaultProps & {
  onClose?: (() => void) | ((state: boolean) => void);
  open?: boolean;
  portalTarget?: Element | null;
};

const Backdrop = forwardRef<HTMLDivElement, BackdropProps>((props, forwardedRef) => {
  const { onClose, invisible, open, portalTarget, defaultClassName, className, ...restProps } =
    useConfig('backdrop', backdropConfig.defaultProps, props);

  const theme = useTheme();

  const ref = useRef<HTMLDivElement>(null);

  useImperativeHandle<HTMLDivElement | null, HTMLDivElement | null>(
    forwardedRef,
    () => ref.current,
    []
  );

  /* --- Set event handlers --- */
  const clickHandler = useCallback(() => (onClose ? onClose(false) : undefined), [onClose]);

  useAddEventListener(ref, 'click', clickHandler);

  /* --- Set classes --- */
  const mergedClassName = useMemo(() => {
    const styles = backdropConfig.styles;

    return mergeClasses(
      styles.base,
      !invisible && styles.background[theme],
      defaultClassName,
      className
    );
  }, [invisible, theme, defaultClassName, className]);

  /* --- Set portal --- */
  const node = (
    <Transition
      transition="fade"
      smooth={false}
      unmountOnExit={false}
      enter={open}
      aria-hidden={true}
      className={mergedClassName}
      ref={ref}
      {...restProps}
    />
  );

  return portalTarget ? createPortal(node, portalTarget) : node;
});

Backdrop.displayName = 'Backdrop';

export default Backdrop;
