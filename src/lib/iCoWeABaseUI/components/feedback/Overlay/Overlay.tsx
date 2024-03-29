import React, {
  type MouseEvent,
  forwardRef,
  useCallback,
  useImperativeHandle,
  useMemo,
  useRef
} from 'react';
import { createPortal } from 'react-dom';

import { mergeClasses } from '../../../../iCoWeAUI/utils/utils';
import useConfig from '../../../hooks/useConfig';
import Transition, { type TransitionProps } from '../../utils/Transition/Transition';
import overlayConfig from './overlayConfig';

export type OverlayDefaultProps = {
  invisible?: boolean;
};

export type OverlayProps = TransitionProps &
OverlayDefaultProps & {
  onClose?: (() => void) | ((state: boolean) => void);
  open?: boolean;
  portalTarget?: Element | null;
};

const Overlay = forwardRef<HTMLDivElement, OverlayProps>((props, forwardedRef) => {
  const {
    onClose,
    onClick,
    invisible,
    open,
    portalTarget,
    defaultClassName,
    className,
    ...restProps
  } = useConfig('overlay', overlayConfig.defaultProps, props);

  const ref = useRef<HTMLDivElement>(null);

  useImperativeHandle<HTMLDivElement | null, HTMLDivElement | null>(
    forwardedRef,
    () => ref.current,
    []
  );

  /* --- Set event handlers --- */
  const clickHandler = useCallback(
    (event: MouseEvent<HTMLDivElement>) => {
      if (onClose && event.target === ref.current) {
        onClose(false);
      }

      if (onClick) {
        onClick(event);
      }
    },
    [onClose, onClick]
  );

  /* --- Set classes --- */
  const mergedClassName = useMemo(() => {
    const styles = overlayConfig.styles;

    return mergeClasses(styles.base, !invisible && styles.background, defaultClassName, className);
  }, [invisible, defaultClassName, className]);

  /* --- Set portal --- */
  const node = (
    <Transition
      onClick={clickHandler}
      transition="fade"
      smooth={false}
      unmountOnExit={false}
      enter={open}
      aria-hidden
      className={mergedClassName}
      ref={ref}
      {...restProps}
    />
  );

  return portalTarget ? createPortal(node, portalTarget) : node;
});

Overlay.displayName = 'Overlay';

export default Overlay;
