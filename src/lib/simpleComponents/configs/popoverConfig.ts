import { type TransitionEventHandler, type AnimationEventHandler, type CSSProperties, type ReactNode, type ReactElement } from 'react';

export type PopoverPositions = Positions;

export interface PopoverConfig {
  defaultProps: {
    open?: boolean;
    position: PopoverPositions;
    gap: number;
    responsive: boolean;
    overlayRef: Element | null;
    disableScrolling: boolean;
    unmountOnExit: boolean;
    transitionConfig: {
      enterDuration: number,
      exitDuration: number
    };
    handler?: ReactElement;
    backdrop: boolean;
    backdropProps: {
      invisible: boolean;
    }
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
    position: 'bottom',
    gap: 1,
    responsive: true,
    overlayRef: null,
    disableScrolling: false,
    unmountOnExit: true,
    transitionConfig: {
      enterDuration: 500,
      exitDuration: 500
    },
    backdrop: false,
    backdropProps: {
      invisible: true
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
