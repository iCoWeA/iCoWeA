import React, { forwardRef, useRef, useImperativeHandle } from 'react';
import { createPortal } from 'react-dom';

import useAddEventListener from '../../../hooks/useAddEventListener';
import useConfig from '../../../hooks/useConfig';
import useTheme from '../../../hooks/useTheme';
import { mergeClasses } from '../../../utils/utils';
import Transition, { type TransitionProps } from '../../utils/Transition/Transition';
import backdropConfig from './backdropConfig';

export type BackdropDefaultProps = {
  invisible?: boolean;
};

export type BackdropProps = TransitionProps &
BackdropDefaultProps & {
  onClose?: (() => void) | ((state: boolean) => void);
  portalTarget?: Element | null;
  open?: boolean;
};

const Backdrop = forwardRef<HTMLDivElement, BackdropProps>((props, forwardedRef) => {
  const { onClose, open, invisible, portalTarget, defaultClassName, className, ...restProps } =
    useConfig('backdrop', backdropConfig.defaultProps, props);
  const theme = useTheme();

  const ref = useRef<HTMLDivElement>(null);

  useImperativeHandle<HTMLDivElement | null, HTMLDivElement | null>(
    forwardedRef,
    () => ref.current,
    []
  );

  const clickHandler = onClose && (() => onClose(false));

  useAddEventListener(ref, 'click', clickHandler);

  /* --- Set classes --- */
  const styles = backdropConfig.styles;

  const mergedClassName = mergeClasses(
    styles.base,
    !invisible && styles.background[theme],
    defaultClassName,
    className
  );

  /* --- Set portal --- */
  const node = (
    <Transition
      enter={open}
      variant="fade"
      unmountOnExit={false}
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
