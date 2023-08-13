import { useCallback, useReducer } from 'react';

export enum ActionTypes {
  START,
  END,
  RESET
}

interface State {
  state: ActionTypes;
  className: string;
  timerId: number;
}

interface Action {
  type: ActionTypes;
  payload: { timerId?: number, className?: string };
}

interface Config {
  state?: ActionTypes;
  startClassName?: string;
  endClassName?: string;
}

interface Actions {
  start: (timerId: number, className?: string) => Action;
  end: (className?: string) => Action;
  reset: (className?: string) => Action;
}

interface Return {
  state: ActionTypes;
  className: string;
  play: (duration: number, dispatchStart?: () => void, dispatchEnd?: () => void) => void;
  reset: () => void;
}

const reducer = ({ state, className, timerId }: State, { type, payload }: Action): State => {
  if (type === ActionTypes.START || type === ActionTypes.RESET) {
    clearTimeout(timerId);
    state = ActionTypes.START;
    className = payload.className ?? '';
    timerId = payload.timerId ?? -1;
  }

  if (type === ActionTypes.END) {
    clearTimeout(timerId);
    state = ActionTypes.END;
    className = payload.className ?? '';
    timerId = payload.timerId ?? -1;
  }

  return { state, className, timerId };
};

const initializer = ({ state = ActionTypes.START, startClassName = '', endClassName = '' }: Config): State => ({
  state,
  className: state === ActionTypes.START ? startClassName : endClassName,
  timerId: -1
});

const actions: Actions = {
  start: (timerId, className) => ({ type: ActionTypes.START, payload: { timerId, className } }),
  end: (className) => ({ type: ActionTypes.END, payload: { className } }),
  reset: (className) => ({ type: ActionTypes.RESET, payload: { className } })
};

const useAnimation = (config: Config = {}): Return => {
  const [{
    state,
    className
  }, dispatch] = useReducer(reducer, config, initializer);
  const { startClassName, endClassName } = config;

  const play = useCallback((duration: number, dispatchStart?: () => void, dispatchEnd?: () => void): void => {
    const timerId = window.setTimeout(() => {
      dispatch(actions.end(endClassName));

      if (dispatchEnd !== undefined) {
        dispatchEnd();
      }
    }, duration);

    dispatch(actions.start(timerId, startClassName));

    if (dispatchStart !== undefined) {
      dispatchStart();
    }
  }, []);

  const reset = useCallback((): void => {
    dispatch(actions.reset(startClassName));
  }, []);

  return {
    state,
    className,
    play,
    reset
  };
};

export default useAnimation;
