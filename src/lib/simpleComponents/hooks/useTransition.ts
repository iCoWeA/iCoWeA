import { useCallback, useReducer } from 'react';

enum ActionTypes {
  START,
  STARTING,
  END,
  ENDING,
}

interface State {
  state: ActionTypes;
  startClassName: string;
  startingClassName: string;
  endClassName: string;
  endingClassName: string;
  timerId: number;
  config: {
    startClassName: string;
    startingClassName: string;
    endClassName: string;
    endingClassName: string;
  }
}

interface Action {
  type: ActionTypes;
  payload: { timerId: number }
}

interface Actions {
  start: () => Action;
  starting: (timerId: number) => Action;
  end: () => Action;
  ending: (timerId: number) => Action;
}

interface TransitionConfig {
  state?: ActionTypes;
  startClassName?: string;
  startingClassName?: string;
  endClassName?: string;
  endingClassName?: string;
}

interface Transition {
  state: {
    state: ActionTypes,
    startClassName: string;
    startingClassName: string;
    endClassName: string;
    endingClassName: string;
  };
  play: (duration: number, dispatchStarting: () => void, dispatchEnd: () => void) => void;
  start: (duration: number, dispatchStarting: () => void, dispatchEnd: () => void) => void;
  end: (duration: number, dispatchEnding: () => void, dispatchStart: () => void) => void;
}

const actions: Actions = {
  start: () => ({ type: ActionTypes.START, payload: { timerId: -1 } }),
  starting: (timerId) => ({ type: ActionTypes.STARTING, payload: { timerId } }),
  end: () => ({ type: ActionTypes.END, payload: { timerId: -1 } }),
  ending: (timerId) => ({ type: ActionTypes.ENDING, payload: { timerId } })
};

const reducer: (state: State, action: Action) => State = (
  { state, startClassName, startingClassName, endClassName, endingClassName, timerId, config },
  { type, payload }
) => {
  if (type === ActionTypes.START) {
    clearTimeout(payload.timerId);
    timerId = payload.timerId;
    state = ActionTypes.START;
    startClassName = config.startClassName;
    startingClassName = '';
    endClassName = '';
    endingClassName = '';
  }

  if (type === ActionTypes.STARTING) {
    state = ActionTypes.STARTING;
    startClassName = '';
    startingClassName = config.startingClassName; ;
    endClassName = '';
    endingClassName = '';
    if (timerId === -1) {
      timerId = payload.timerId;
    } else {
      clearTimeout(payload.timerId);
    }
  }

  if (type === ActionTypes.END) {
    clearTimeout(payload.timerId);
    timerId = payload.timerId;
    state = ActionTypes.END;
    startClassName = '';
    startingClassName = '';
    endClassName = config.endClassName;
    endingClassName = '';
  }

  if (type === ActionTypes.ENDING) {
    state = ActionTypes.ENDING;
    startClassName = '';
    startingClassName = '';
    endClassName = '';
    endingClassName = config.endingClassName;
    if (timerId === -1) {
      timerId = payload.timerId;
    } else {
      clearTimeout(payload.timerId);
    }
  }

  return {
    state, startClassName, startingClassName, endClassName, endingClassName, timerId, config
  };
};

const initializer: (transitionConfig: TransitionConfig) => State = ({ state = ActionTypes.START, startClassName = '', startingClassName = '', endClassName = '', endingClassName = '' }) => ({
  state,
  startClassName,
  startingClassName: '',
  endClassName: '',
  endingClassName: '',
  timerId: -1,
  config: {
    startClassName,
    startingClassName,
    endClassName,
    endingClassName
  }
});

const useTransition: (transitionConfig?: TransitionConfig) => Transition = (transitionConfig = {}) => {
  const [{
    state,
    startClassName,
    startingClassName,
    endClassName,
    endingClassName
  }, dispatch] = useReducer(reducer, transitionConfig, initializer);

  const start: (durarion: number, dispatchStarting: () => void, dispatchEnd: () => void) => void = (duration = 0, dispatchStarting, dispatchEnd) => {
    const timerId = window.setTimeout(() => {
      dispatch(actions.end());
      dispatchEnd();
    }, duration);

    dispatch(actions.starting(timerId));
    dispatchStarting();
  };

  const end: (durarion: number, dispatchEnding: () => void, dispatchStart: () => void) => void = (duration = 0, dispatchEnding, dispatchStart) => {
    const timerId = window.setTimeout(() => {
      dispatch(actions.start());
      dispatchStart();
    }, duration);

    dispatch(actions.ending(timerId));
    dispatchEnding();
  };

  return {
    state: {
      state,
      startClassName,
      startingClassName,
      endClassName,
      endingClassName
    },
    start: useCallback(start, []),
    end: useCallback(end, []),
    play: useCallback(start, [])
  };
};

export default useTransition;
