import { useState, useCallback } from 'react';

export enum TransitionStates {ENTER = 'ENTER', ENTERING = 'ENTERING', EXIT = 'EXIT', EXITING = 'EXITING'}

type UseTransition = {
  state: TransitionStates;
  startTransition: (open?: boolean) => void;
  stopTransition: () => void;
};

const useTransition = (isEntered: boolean = false): UseTransition => {
  const [state, setState] = useState<TransitionStates>(isEntered ? TransitionStates.ENTER : TransitionStates.EXIT);

  const startTransition = useCallback((open: boolean = false) =>
    setState((prevState): TransitionStates => {
      if (open && (prevState === TransitionStates.EXIT || prevState === TransitionStates.EXITING)) {
        return TransitionStates.ENTERING;
      }

      if (!open && (prevState === TransitionStates.ENTER || prevState === TransitionStates.ENTERING)) {
        return TransitionStates.EXITING;
      }

      return prevState;
    }), []);

  const stopTransition = useCallback(() =>
    setState((prevState): TransitionStates => {
      if (prevState === TransitionStates.ENTERING) {
        return TransitionStates.ENTER;
      }

      if (prevState === TransitionStates.EXITING) {
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
