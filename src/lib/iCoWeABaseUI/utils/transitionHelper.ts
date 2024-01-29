import { type MutableRefObject } from 'react';

export const setTransitionStyle = (elementRef: MutableRefObject<HTMLElement | null>, variant: Transitions, smooth: boolean, isEntering: boolean, isUnmounted: boolean): void => {
  if (!elementRef.current) {
    return;
  }

  if (isUnmounted) {
    elementRef.current.style.visibility = 'hidden';
  } else {
    elementRef.current.style.visibility = 'visible';
  }

  if (smooth || variant === 'fade') {
    isEntering ? (elementRef.current.style.opacity = '100') : (elementRef.current.style.opacity = '0');
  }

  if (variant === 'grow') {
    isEntering
      ? (elementRef.current.style.transform = 'scale(100%)')
      : (elementRef.current.style.transform = 'scale(0%)');
  } else if (variant === 'grow-y') {
    isEntering
      ? (elementRef.current.style.height = `${elementRef.current.scrollHeight}px`)
      : (elementRef.current.style.height = '0px');
  } else if (variant === 'grow-x') {
    isEntering
      ? (elementRef.current.style.width = '100%')
      : (elementRef.current.style.width = '0px');
  } else if (variant === 'slide-top') {
    isEntering
      ? (elementRef.current.style.transform = 'translateY(0%)')
      : (elementRef.current.style.transform = 'translateY(-100%)');
  } else if (variant === 'slide-bottom') {
    isEntering
      ? (elementRef.current.style.transform = 'translateY(0%)')
      : (elementRef.current.style.transform = 'translateY(100%)');
  } else if (variant === 'slide-left') {
    isEntering
      ? (elementRef.current.style.transform = 'translateX(0%)')
      : (elementRef.current.style.transform = 'translateX(-100%)');
  } else if (variant === 'slide-right') {
    isEntering
      ? (elementRef.current.style.transform = 'translateX(0%)')
      : (elementRef.current.style.transform = 'translateX(100%)');
  }
};
