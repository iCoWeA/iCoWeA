import { type TransitionEventHandler, type AnimationEventHandler, type CSSProperties } from 'react';
import { type PositionProps } from '../utils/positiontHelper';

export interface PopoverConfig {
  defaultProps: {
    open: boolean;
    anchorRef: HTMLElement | null;
    position: PositionProps;
    transformPosition: PositionProps;
    overlayRef: HTMLElement | null;
    unmountOnExit: boolean;
    transitionConfig: {
      enterDuration: number,
      exitDuration: number
    };
    onTransitionEnd?: TransitionEventHandler;
    onAnimationEnd?: AnimationEventHandler;
    style: CSSProperties;
    className: string;
  };
  styles: {
    base: Record<string, string>;
    open: Record<string, string>;
  }
}

const popoverConfig: PopoverConfig = {
  defaultProps: {
    open: false,
    anchorRef: null,
    position: { horizontal: 'left', vertical: 'bottom' },
    transformPosition: { horizontal: 'left', vertical: 'top' },
    overlayRef: null,
    unmountOnExit: true,
    transitionConfig: {
      enterDuration: 500,
      exitDuration: 500
    },
    style: {},
    className: ''
  },
  styles: {
    base: {
      position: 'absolute',
      display: 'flex',
      opacity: 'opacity-0',
      transition: 'transition-[opacity]',
      focus: 'focus:outline-0'
    },
    open: {
      opacity: 'opacity-100'
    }
  }
};

export default popoverConfig;
