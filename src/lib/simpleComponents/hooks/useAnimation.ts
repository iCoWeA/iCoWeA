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
  endAnimation: (onEnter?: () => void, onExit?: () => void) => void;
}

const useAnimation = (isEntered: boolean = false): Return => {
  const [state, setState] = useState<AnimationStates>(isEntered ? AnimationStates.ENTERED : AnimationStates.EXITED);

  const startAnimation = useCallback((open: boolean = false, onEntering?: () => void, onExiting?: () => void) => {
    setState((prevState): AnimationStates => {
      if (open && (prevState === AnimationStates.EXITED || prevState === AnimationStates.EXITING)) {
        if (onEntering !== undefined) {
          onEntering();
        }

        return AnimationStates.ENTERING;
      }

      if (!open && (prevState === AnimationStates.ENTERING || prevState === AnimationStates.ENTERED)) {
        if (onExiting !== undefined) {
          onExiting();
        }

        return AnimationStates.EXITING;
      }

      return prevState;
    });
  }, []);

  const endAnimation = useCallback((onEnter?: () => void, onExit?: () => void) => {
    setState((prevState): AnimationStates => {
      if (prevState === AnimationStates.ENTERING) {
        if (onEnter !== undefined) {
          onEnter();
        }

        return AnimationStates.ENTERED;
      }

      if (prevState === AnimationStates.EXITING) {
        if (onExit !== undefined) {
          onExit();
        }

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
    endAnimation
  };
};

export default useAnimation;
