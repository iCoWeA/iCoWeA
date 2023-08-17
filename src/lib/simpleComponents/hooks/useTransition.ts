import { useRef, useState, useCallback } from 'react';

export enum TransitionStates {
  ENTER,
  ENTERING,
  ENTERED,
  EXIT,
  EXITING,
  EXITED
}

export interface TransitionConfig {
  enterDelay?: number;
  exitDelay?: number;
  enterDuration?: number
  exitDuration?: number;
  enterClassName?: string;
  enteringClassName?: string;
  enteredClassName?: string;
  exitClassName?: string;
  exitingClassName?: string;
  exitedClassName?: string;
  onEnter?: () => void;
  onEntering?: () => void;
  onEntered?: () => void;
  onExit?: () => void;
  onExiting?: () => void;
  onExited?: () => void;
}

interface Return {
  state: TransitionStates;
  className: string;
  enterState: boolean;
  exitState: boolean;
  enter: (instant?: boolean) => void;
  exit: (instant?: boolean) => void;
}

const initialTimerId = -1;

const useTransition = ({ enterDelay = 0, exitDelay = 0, enterDuration = 0, exitDuration = 0, enterClassName = '', enteringClassName = '', enteredClassName = '', exitClassName = '', exitingClassName = '', exitedClassName = '', onEnter, onEntering, onEntered, onExit, onExiting, onExited }: TransitionConfig = {}): Return => {
  const timerId = useRef(initialTimerId);
  const [state, setState] = useState(TransitionStates.EXITED);
  const classNames = {
    [TransitionStates.ENTER]: enterClassName,
    [TransitionStates.ENTERING]: enteringClassName,
    [TransitionStates.ENTERED]: enteredClassName,
    [TransitionStates.EXIT]: exitClassName,
    [TransitionStates.EXITING]: exitingClassName,
    [TransitionStates.EXITED]: exitedClassName
  };

  const enter = useCallback((instant: boolean = false) => {
    clearTimeout(timerId.current);

    if (instant) {
      setState(TransitionStates.ENTERED);

      if (onEntered !== undefined) {
        onEntered();
      }

      return;
    }

    setState(TransitionStates.ENTER);

    if (onEnter !== undefined) {
      onEnter();
    }

    timerId.current = window.setTimeout(() => {
      timerId.current = window.setTimeout(() => {
        setState(TransitionStates.ENTERED);

        if (onEntered !== undefined) {
          onEntered();
        }
      }, enterDuration);

      setState(TransitionStates.ENTERING);

      if (onEntering !== undefined) {
        onEntering();
      }
    }, enterDelay);
  }, [enterDuration, enterDelay]);

  const exit = useCallback((instant: boolean = false): void => {
    clearTimeout(timerId.current);

    if (instant) {
      setState(TransitionStates.EXITED);

      if (onExited !== undefined) {
        onExited();
      }

      return;
    }

    setState(TransitionStates.EXIT);

    if (onExit !== undefined) {
      onExit();
    }

    timerId.current = window.setTimeout(() => {
      timerId.current = window.setTimeout(() => {
        setState(TransitionStates.EXITED);

        if (onExited !== undefined) {
          onExited();
        }
      }, exitDuration);

      setState(TransitionStates.EXITING);

      if (onExiting !== undefined) {
        onExiting();
      }
    }, exitDelay);
  }, [exitDuration, exitDelay]);

  return {
    state,
    className: classNames[state],
    enterState: (state === TransitionStates.ENTER || state === TransitionStates.ENTERING || state === TransitionStates.ENTERED),
    exitState: (state === TransitionStates.EXIT || state === TransitionStates.EXITING || state === TransitionStates.EXITED),
    enter,
    exit
  };
};

export default useTransition;
