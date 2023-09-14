import { type TransitionEventHandler, type AnimationEventHandler, useState, useCallback, type TransitionEvent, type AnimationEvent } from 'react';

export enum AnimationStates {ENTERING, ENTERED, EXITING, EXITED}

export interface AnimationState {
  current: AnimationStates;
  enter: boolean;
  exit: boolean;
}

export interface AnimationConfig {
  onEntering?: () => void;
  onExiting?: () => void;
  onEnter?: () => void;
  onExit?: () => void;
}

interface Return<T> {
  state: AnimationState;
  enter: (onEntering?: () => void) => void;
  exit: (onExiting?: () => void) => void;
  transitionEndHandler: TransitionEventHandler<T>,
  animationEndHandler: AnimationEventHandler<T>
}

const useAnimation = <T extends HTMLElement>(element: T | null, isEntered: boolean = false, onEnter?: () => void, onExit?: () => void): Return<T> => {
  const [state, setState] = useState<AnimationStates>(isEntered ? AnimationStates.ENTERED : AnimationStates.EXITED);

  const enter = useCallback(() => {
    setState(AnimationStates.ENTERING);
  }, []);

  const exit = useCallback((onExiting?: () => void) => {
    setState(AnimationStates.EXITING);
  }, []);

  const transitionEndHandler = (event: TransitionEvent<T>): void => {
    if (state === AnimationStates.ENTERING && event.target === element) {
      if (onEnter !== undefined) {
        onEnter();
      }

      setState(AnimationStates.ENTERED);
    }

    if (state === AnimationStates.EXITING && event.target === element) {
      if (onExit !== undefined) {
        onExit();
      }

      setState(AnimationStates.EXITED);
    }
  };

  const animationEndHandler = (event: AnimationEvent<T>): void => {
    if (state === AnimationStates.ENTERING && event.target === element) {
      if (onEnter !== undefined) {
        onEnter();
      }

      setState(AnimationStates.ENTERED);
    }

    if (state === AnimationStates.EXITING && event.target === element) {
      if (onExit !== undefined) {
        onExit();
      }

      setState(AnimationStates.EXITED);
    }
  };

  return {
    state: {
      current: state,
      enter: state === AnimationStates.ENTERING || state === AnimationStates.ENTERED,
      exit: state === AnimationStates.EXITING || state === AnimationStates.EXITED
    },
    enter,
    exit,
    transitionEndHandler,
    animationEndHandler
  };
};

export default useAnimation;
