import { useState, useCallback } from 'react';

export enum AnimationStates {ENTERING, ENTERED, EXITING, EXITED}

export interface AnimationState {
  current: AnimationStates;
  enter: boolean;
  exit: boolean;
}

interface Return {
  state: AnimationState;
  enter: (onEntering?: () => void) => void;
  exit: (onExiting?: () => void) => void;
  endAnimation: (onEnter?: () => void, onExit?: () => void) => void;
}

const useAnimation = <T extends HTMLElement>(element: T | null, isEntered: boolean = false, onEnter?: () => void, onExit?: () => void): Return => {
  const [state, setState] = useState<AnimationStates>(isEntered ? AnimationStates.ENTERED : AnimationStates.EXITED);

  const enter = useCallback((onEntering?: () => void) => {
    if (onEntering !== undefined) {
      onEntering();
    }

    setState(AnimationStates.ENTERING);
  }, []);

  const exit = useCallback((onExiting?: () => void) => {
    if (onExiting !== undefined) {
      onExiting();
    }

    setState(AnimationStates.EXITING);
  }, []);

  const endAnimation = useCallback((onEnter?: () => void, onExit?: () => void) => {
    if (state === AnimationStates.ENTERING) {
      if (onEnter !== undefined) {
        onEnter();
      }

      setState(AnimationStates.ENTERED);
    }

    if (state === AnimationStates.EXITING) {
      if (onExit !== undefined) {
        onExit();
      }

      setState(AnimationStates.EXITED);
    }
  }, []);

  return {
    state: {
      current: state,
      enter: state === AnimationStates.ENTERING || state === AnimationStates.ENTERED,
      exit: state === AnimationStates.EXITING || state === AnimationStates.EXITED
    },
    enter,
    exit,
    endAnimation
  };
};

export default useAnimation;
