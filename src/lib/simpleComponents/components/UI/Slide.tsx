import React, { forwardRef, useRef, useImperativeHandle } from 'react';
import slideConfig from '../../configs/slideConfig';
import { mergeClasses } from '../../utils/propsHelper';
import Transition, { type TransitionProps } from './Transition';

export interface SlideProps extends TransitionProps {
  direction?: Directions;
}

const Slide = forwardRef<HTMLDivElement, SlideProps>((props, ref) => {
  /* --- Set default props --- */
  const styles = slideConfig.styles;
  const { onEntering, onExiting, direction, className, ...restProps } = {
    ...slideConfig.defaultProps,
    ...props
  };

  /* --- Set refs --- */
  const slideRef = useRef<HTMLDivElement>(null);

  /* --- Set imperative anchorElement --- */
  useImperativeHandle<HTMLDivElement | null, HTMLDivElement | null>(ref, () => slideRef.current, []);

  /* --- Set props --- */
  const enteringHandler = (): void => {
    if (slideRef.current !== null) {
      slideRef.current.classList.add(mergeClasses(styles.open[direction]));
    }

    if (onEntering !== undefined) {
      onEntering();
    }
  };

  const exitingHandler = (): void => {
    if (slideRef.current !== null) {
      slideRef.current.classList.remove(mergeClasses(styles.open[direction]));
    }

    if (onExiting !== undefined) {
      onExiting();
    }
  };

  const mergedClassName = mergeClasses(styles.base, styles.directions[direction], className);

  return (
    <Transition
      onEntering={enteringHandler}
      onExiting={exitingHandler}
      className={mergedClassName}
      ref={slideRef}
      {...restProps}
    />
  );
});

Slide.displayName = 'Slide';

export default Slide;
