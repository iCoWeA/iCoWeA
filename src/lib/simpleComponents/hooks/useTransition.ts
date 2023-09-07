import { type TransitionEventHandler, type AnimationEventHandler, useState, useCallback, type TransitionEvent, type AnimationEvent } from 'react';

export enum TransitionStates {ENTERING, ENTERED, EXITING, EXITED}

export interface TransitionState {
  current: TransitionStates;
  enter: boolean;
  exit: boolean;
}

export interface TransitionConfig {
  onEntering?: () => void;
  onExiting?: () => void;
  onEnter?: () => void;
  onExit?: () => void;
}

interface Return<T> {
  state: TransitionState;
  enter: (onEntering?: () => void) => void;
  exit: (onExiting?: () => void) => void;
  transitionEndHandler: TransitionEventHandler<T>,
  animationEndHandler: AnimationEventHandler<T>
}

const useTransition = <T extends HTMLElement>(element: T | null, isEntered: boolean = false, onEnter?: () => void, onExit?: () => void): Return<T> => {
  const [state, setState] = useState<TransitionStates>(isEntered ? TransitionStates.ENTERED : TransitionStates.EXITED);

  const enter = useCallback((onEntering?: () => void) => {
    if (onEntering !== undefined) {
      onEntering();
    }

    setState(TransitionStates.ENTERING);
  }, []);

  const exit = useCallback((onExiting?: () => void) => {
    if (onExiting !== undefined) {
      onExiting();
    }

    setState(TransitionStates.EXITING);
  }, []);

  const transitionEndHandler = (event: TransitionEvent<T>): void => {
    if (state === TransitionStates.ENTERING && event.target === element) {
      if (onEnter !== undefined) {
        onEnter();
      }

      setState(TransitionStates.ENTERED);
    }

    if (state === TransitionStates.EXITING && event.target === element) {
      if (onExit !== undefined) {
        onExit();
      }

      setState(TransitionStates.EXITED);
    }
  };

  const animationEndHandler = (event: AnimationEvent<T>): void => {
    if (state === TransitionStates.ENTERING && event.target === element) {
      if (onEnter !== undefined) {
        onEnter();
      }

      setState(TransitionStates.ENTERED);
    }

    if (state === TransitionStates.EXITING && event.target === element) {
      if (onExit !== undefined) {
        onExit();
      }

      setState(TransitionStates.EXITED);
    }
  };

  return {
    state: {
      current: state,
      enter: state === TransitionStates.ENTERING || state === TransitionStates.ENTERED,
      exit: state === TransitionStates.EXITING || state === TransitionStates.EXITED
    },
    enter,
    exit,
    transitionEndHandler,
    animationEndHandler
  };
};

export default useTransition;
