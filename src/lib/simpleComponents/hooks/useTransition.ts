import { useRef, useState, useCallback } from 'react';

export enum States {
  ENTER,
  ENTERING,
  ENTERED,
  EXIT,
  EXITING,
  EXITED
}

export interface Config {
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
  state: States;
  className: string;
  enterState: boolean;
  exitState: boolean;
  enter: (instant?: boolean) => void;
  exit: (instant?: boolean) => void;
}

const initialTimerId = -1;

const useTransition = ({ enterDelay = 0, exitDelay = 0, enterDuration = 0, exitDuration = 0, enterClassName = '', enteringClassName = '', enteredClassName = '', exitClassName = '', exitingClassName = '', exitedClassName = '', onEnter, onEntering, onEntered, onExit, onExiting, onExited }: Config = {}): Return => {
  const timerId = useRef(initialTimerId);
  const [state, setState] = useState(States.EXITED);
  const classNames = {
    [States.ENTER]: enterClassName,
    [States.ENTERING]: enteringClassName,
    [States.ENTERED]: enteredClassName,
    [States.EXIT]: exitClassName,
    [States.EXITING]: exitingClassName,
    [States.EXITED]: exitedClassName
  };

  const enter = useCallback((instant: boolean = false) => {
    if (instant) {
      clearTimeout(timerId.current);
      setState(States.ENTERED);

      if (onEntered !== undefined) {
        onEntered();
      }

      return;
    }

    clearTimeout(timerId.current);
    setState(States.ENTER);

    if (onEnter !== undefined) {
      onEnter();
    }

    timerId.current = window.setTimeout(() => {
      timerId.current = window.setTimeout(() => {
        setState(States.ENTERED);

        if (onEntered !== undefined) {
          onEntered();
        }
      }, enterDuration);

      setState(States.ENTERING);

      if (onEntering !== undefined) {
        onEntering();
      }
    }, enterDelay);
  }, [enterDuration, enterDelay]);

  const exit = useCallback((instant: boolean = false): void => {
    if (instant) {
      clearTimeout(timerId.current);
      setState(States.EXITED);

      if (onExited !== undefined) {
        onExited();
      }

      return;
    }

    clearTimeout(timerId.current);
    setState(States.EXIT);

    if (onExit !== undefined) {
      onExit();
    }

    timerId.current = window.setTimeout(() => {
      timerId.current = window.setTimeout(() => {
        setState(States.EXITED);

        if (onExited !== undefined) {
          onExited();
        }
      }, exitDuration);

      setState(States.EXITING);

      if (onExiting !== undefined) {
        onExiting();
      }
    }, exitDelay);
  }, [exitDuration, exitDelay]);

  return {
    state,
    className: classNames[state],
    enterState: (state === States.ENTER || state === States.ENTERING || state === States.ENTERED),
    exitState: (state === States.EXIT || state === States.EXITING || state === States.EXITED),
    enter,
    exit
  };
};

export default useTransition;
