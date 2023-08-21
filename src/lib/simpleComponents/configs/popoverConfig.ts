import { type TransitionEventHandler, type AnimationEventHandler, type CSSProperties, type ReactNode } from 'react';

export interface PopoverConfig {
  defaultProps: {
    onClose?: () => void;
    open: boolean;
    anchorRef: HTMLElement | null;
    position: Positions;
    gap: number;
    responsive: boolean;
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
    children?: ReactNode;
  };
  styles: {
    base: Record<string, string>;
  }
}

const popoverConfig: PopoverConfig = {
  defaultProps: {
    open: false,
    anchorRef: null,
    position: 'bottom',
    gap: 1,
    responsive: true,
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
      display: 'block',
      transition: 'transition-[opacity]',
      focus: 'focus:outline-0'
    }
  }
};

export default popoverConfig;
