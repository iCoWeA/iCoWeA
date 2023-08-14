import { useRef, useState, useCallback } from 'react';

export enum States {
  ENTER = 'ENTER',
  ENTERING = 'ENTERING',
  ENTERED = 'ENTERED',
  EXIT = 'EXIT',
  EXITING = 'EXITING',
  EXITED = 'EXITED'
}

export interface Config {
  enterDelay?: number;
  exitDelay?: number;
  enterDuration?: number
  exitDuration?: number;
  onEnter?: () => void;
  onEntering?: () => void;
  onEntered?: () => void;
  onExit?: () => void;
  onExiting?: () => void;
  onExited?: () => void;
}

interface Return {
  state: States;
  enterState: boolean;
  exitState: boolean;
  enter: (instant?: boolean) => void;
  exit: (instant?: boolean) => void;
}

const initialTimerId = -1;

const useTransition = ({ enterDelay, exitDelay, enterDuration, exitDuration, onEnter, onEntering, onEntered, onExit, onExiting, onExited }: Config = {}): Return => {
  const timerId = useRef(initialTimerId);
  const [state, setState] = useState(States.EXITED);

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
      }, enterDuration ?? 0);

      setState(States.ENTERING);

      if (onEntering !== undefined) {
        onEntering();
      }
    }, enterDelay ?? 0);
  }, []);

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
      }, exitDuration ?? 0);

      setState(States.EXITING);

      if (onExiting !== undefined) {
        onExiting();
      }
    }, exitDelay ?? 0);
  }, []);

  return {
    state,
    enterState: (state === States.ENTER || state === States.ENTERING || state === States.ENTERED),
    exitState: (state === States.EXIT || state === States.EXITING || state === States.EXITED),
    enter,
    exit
  };
};

export default useTransition;
