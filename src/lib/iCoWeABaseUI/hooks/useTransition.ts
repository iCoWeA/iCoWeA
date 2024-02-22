import { useState, useCallback } from 'react';

export enum TransitionStates {ENTER = 'ENTER', ENTERING = 'ENTERING', EXIT = 'EXIT', EXITING = 'EXITING'}

type UseTransition = {
  state: TransitionStates;
  startTransition: (open?: boolean, onEntering?: VoidFunction, onExiting?: VoidFunction) => void;
  stopTransition: (onEnter?: VoidFunction, onExit?: VoidFunction) => void;
};

const useTransition = (isEntered: boolean = false): UseTransition => {
  const [state, setState] = useState<TransitionStates>(isEntered ? TransitionStates.ENTER : TransitionStates.EXIT);

  const startTransition = useCallback((open: boolean = false, onEntering?: VoidFunction, onExiting?: VoidFunction) =>
    setState((prevState): TransitionStates => {
      if (open && (prevState === TransitionStates.EXIT || prevState === TransitionStates.EXITING)) {
        if (onEntering) {
          onEntering();
        }

        return TransitionStates.ENTERING;
      }

      if (!open && (prevState === TransitionStates.ENTER || prevState === TransitionStates.ENTERING)) {
        if (onExiting) {
          onExiting();
        }

        return TransitionStates.EXITING;
      }

      return prevState;
    }), []);

  const stopTransition = useCallback((onEnter?: VoidFunction, onExit?: VoidFunction) =>
    setState((prevState): TransitionStates => {
      if (prevState === TransitionStates.ENTERING) {
        if (onEnter) {
          onEnter();
        }

        return TransitionStates.ENTER;
      }

      if (prevState === TransitionStates.EXITING) {
        if (onExit) {
          onExit();
        }

        return TransitionStates.EXIT;
      }

      return prevState;
    }), []);

  return {
    state,
    startTransition,
    stopTransition
  };
};

export default useTransition;
