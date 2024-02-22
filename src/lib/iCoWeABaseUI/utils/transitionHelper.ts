import { type CSSProperties } from 'react';

export const setTransitionStyle = (variant: Transitions, smooth: boolean, isEntering: boolean, isUnmounted: boolean, height: number = 0): CSSProperties => {
  const style: CSSProperties = {};

  if (isUnmounted) {
    style.visibility = 'hidden';
  } else {
    style.visibility = 'visible';
  }

  if (smooth || variant === 'fade') {
    isEntering ? (style.opacity = '100') : (style.opacity = '0');
  }

  if (variant === 'grow') {
    isEntering
      ? (style.transform = 'scale(100%)')
      : (style.transform = 'scale(0%)');
  } else if (variant === 'grow-y') {
    isEntering
      ? (style.height = `${height}px`)
      : (style.height = '0px');
  } else if (variant === 'grow-x') {
    isEntering
      ? (style.width = '100%')
      : (style.width = '0px');
  } else if (variant === 'slide-top') {
    isEntering
      ? (style.transform = 'translateY(0%)')
      : (style.transform = 'translateY(-100%)');
  } else if (variant === 'slide-bottom') {
    isEntering
      ? (style.transform = 'translateY(0%)')
      : (style.transform = 'translateY(100%)');
  } else if (variant === 'slide-left') {
    isEntering
      ? (style.transform = 'translateX(0%)')
      : (style.transform = 'translateX(-100%)');
  } else if (variant === 'slide-right') {
    isEntering
      ? (style.transform = 'translateX(0%)')
      : (style.transform = 'translateX(100%)');
  }

  return style;
};
