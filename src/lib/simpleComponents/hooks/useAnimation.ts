import { useState, useCallback } from 'react';

export enum AnimationStates {ENTERING = 'ENTERING', ENTERED = 'ENTERED', EXITING = 'EXITING', EXITED = 'EXITED'}

export interface AnimationState {
  current: AnimationStates;
  enter: boolean;
  exit: boolean;
}

interface Return {
  state: AnimationState;
  startAnimation: (open?: boolean, onEntering?: () => void, onExiting?: () => void) => void;
  stopAnimation: (onEnter?: () => void, onExit?: () => void) => void;
}

const useAnimation = (isEntered: boolean = false): Return => {
  const [state, setState] = useState<AnimationStates>(isEntered ? AnimationStates.ENTERED : AnimationStates.EXITED);

  const startAnimation = useCallback((open: boolean = false) => {
    setState((prevState): AnimationStates => {
      if (open && (prevState === AnimationStates.EXITED || prevState === AnimationStates.EXITING)) {
        return AnimationStates.ENTERING;
      }

      if (!open && (prevState === AnimationStates.ENTERING || prevState === AnimationStates.ENTERED)) {
        return AnimationStates.EXITING;
      }

      return prevState;
    });
  }, []);

  const stopAnimation = useCallback(() => {
    setState((prevState): AnimationStates => {
      if (prevState === AnimationStates.ENTERING) {
        return AnimationStates.ENTERED;
      }

      if (prevState === AnimationStates.EXITING) {
        return AnimationStates.EXITED;
      }

      return prevState;
    });
  }, []);

  return {
    state: {
      current: state,
      enter: state === AnimationStates.ENTERING || state === AnimationStates.ENTERED,
      exit: state === AnimationStates.EXITING || state === AnimationStates.EXITED
    },
    startAnimation,
    stopAnimation
  };
};

export default useAnimation;
