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
  stopEntering: (onEnter?: () => void) => void;
  stopExiting: (onExit?: () => void) => void;
}

const useAnimation = (): Return => {
  const [state, setState] = useState<AnimationStates>(AnimationStates.EXITED);

  const enter = useCallback((onEntering?: () => void) => {
    if (onEntering !== undefined) {
      onEntering();
    }

    setState(AnimationStates.ENTERING);
  }, []);

  const stopEntering = useCallback((onExiting?: () => void) => {
    if (onExiting !== undefined) {
      onExiting();
    }

    setState(AnimationStates.ENTERED);
  }, []);

  const exit = useCallback((onEnter?: () => void) => {
    if (onEnter !== undefined) {
      onEnter();
    }

    setState(AnimationStates.EXITING);
  }, []);

  const stopExiting = useCallback((onExit?: () => void) => {
    if (onExit !== undefined) {
      onExit();
    }

    setState(AnimationStates.EXITED);
  }, []);

  return {
    state: {
      current: state,
      enter: state === AnimationStates.ENTERING || state === AnimationStates.ENTERED,
      exit: state === AnimationStates.EXITING || state === AnimationStates.EXITED
    },
    enter,
    stopEntering,
    exit,
    stopExiting
  };
};

export default useAnimation;
