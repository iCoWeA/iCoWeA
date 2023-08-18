import { type TransitionEventHandler, type AnimationEventHandler, type CSSProperties } from 'react';

export interface CollapseConfig {
  defaultProps: {
    open: boolean;
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
  }
}

const collapseConfig: CollapseConfig = {
  defaultProps: {
    open: false,
    unmountOnExit: false,
    transitionConfig: {
      enterDuration: 500,
      exitDuration: 500
    },
    style: {},
    className: ''
  },
  styles: {
    base: {
      display: 'block',
      overflow: 'overflow-hidden',
      transition: 'transition-[height]',
      focus: 'focus:outline-0'
    }
  }
};

export default collapseConfig;
