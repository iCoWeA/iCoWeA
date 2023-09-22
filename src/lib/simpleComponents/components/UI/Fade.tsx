import React, { forwardRef, useRef, useImperativeHandle } from 'react';
import fadeConfig from '../../configs/fadeConfig';
import { mergeClasses } from '../../utils/propsHelper';
import Transition, { type TransitionProps } from './Transition';

export interface FadeProps extends TransitionProps {}

const Fade = forwardRef<HTMLDivElement, FadeProps>((props, ref) => {
  /* --- Set default props --- */
  const styles = fadeConfig.styles;
  const { onEntering, onExiting, className, ...restProps } = {
    ...fadeConfig.defaultProps,
    ...props
  };

  /* --- Set refs --- */
  const fadeRef = useRef<HTMLDivElement>(null);

  /* --- Set imperative handle --- */
  useImperativeHandle<HTMLDivElement | null, HTMLDivElement | null>(ref, () => fadeRef.current, []);

  /* --- Set props --- */
  const enteringHandler = (): void => {
    if (fadeRef.current !== null) {
      fadeRef.current.classList.add(mergeClasses(styles.open));
    }

    if (onEntering !== undefined) {
      onEntering();
    }
  };

  const exitingHandler = (): void => {
    if (fadeRef.current !== null) {
      fadeRef.current.classList.remove(mergeClasses(styles.open));
    }

    if (onExiting !== undefined) {
      onExiting();
    }
  };

  const mergedClassName = mergeClasses(styles.base, className);

  return (
    <Transition
      onEntering={enteringHandler}
      onExiting={exitingHandler}
      className={mergedClassName}
      ref={fadeRef}
      {...restProps}
    />
  );
});

Fade.displayName = 'Fade';

export default Fade;
