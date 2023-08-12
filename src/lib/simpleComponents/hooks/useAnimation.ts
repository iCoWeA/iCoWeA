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
  config: {
    startClassName: string;
    endClassName: string;
  }
}

interface Action {
  type: ActionTypes;
  payload: { timerId: number }
}

const reducer = ({ state, className, timerId, config }: State, { type, payload }: Action): State => {
  if (type === ActionTypes.START || type === ActionTypes.RESET) {
    clearTimeout(timerId);
    timerId = payload.timerId;
    state = ActionTypes.START;
    className = config.startClassName;
  }

  if (type === ActionTypes.END) {
    clearTimeout(payload.timerId);
    timerId = payload.timerId;
    state = ActionTypes.END;
    className = config.endClassName;
  }

  return {
    state, className, timerId, config
  };
};

interface Config {
  state?: ActionTypes;
  startClassName?: string;
  endClassName?: string;
}

const initializer = ({ state = ActionTypes.START, startClassName = '', endClassName = '' }: Config): State => ({
  state,
  className: state === ActionTypes.START ? startClassName : endClassName,
  timerId: -1,
  config: {
    startClassName,
    endClassName
  }
});

interface Return {
  state: ActionTypes;
  className: string;
  play: (duration: number, dispatchStart?: () => void, dispatchEnd?: () => void) => void;
  reset: () => void;
}

const useAnimation = (transitionConfig: Config = {}): Return => {
  const [{
    state,
    className
  }, dispatch] = useReducer(reducer, transitionConfig, initializer);

  const play = useCallback((duration: number, dispatchStart?: () => void, dispatchEnd?: () => void): void => {
    const timerId = window.setTimeout(() => {
      dispatch(actions.end());

      if (dispatchEnd !== undefined) {
        dispatchEnd();
      }
    }, duration);

    dispatch(actions.start(timerId));

    if (dispatchStart !== undefined) {
      dispatchStart();
    }
  }, []);

  const reset = useCallback((): void => {
    dispatch(actions.reset());
  }, []);

  return {
    state,
    className,
    play,
    reset
  };
};

interface Actions {
  start: (timerId: number) => Action;
  end: () => Action;
  reset: () => Action;
}

const actions: Actions = {
  start: (timerId) => ({ type: ActionTypes.START, payload: { timerId } }),
  end: () => ({ type: ActionTypes.END, payload: { timerId: -1 } }),
  reset: () => ({ type: ActionTypes.RESET, payload: { timerId: -1 } })
};

export default useAnimation;
