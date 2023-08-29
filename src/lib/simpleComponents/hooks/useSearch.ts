import { useCallback, useReducer } from 'react';
import { deepClone } from '../utils/propsHelper';

enum ActionTypes {FILTER, RESET}

interface State {
  data: unknown;
  pattern: string;
}

interface Action {
  type: ActionTypes,
  payload: {
    data: unknown;
    pattern?: string;
  };
}

interface Actions {
  filter: (data: unknown, pattern: string) => Action;
  reset: (data: unknown) => Action;
}

interface Return {
  state: State,
  filter: (data: unknown, pattern: string) => void;
  reset: (data: unknown) => void;
}

const reducer = (prevState: State, { type, payload: { data, pattern = '' } }: Action): State => {
  const state = deepClone(prevState);

  if (type === ActionTypes.FILTER || type === ActionTypes.RESET) {
    state.data = data;
    state.pattern = pattern;
  }

  return state;
};

const actions: Actions = {
  filter: (data, pattern) => ({ type: ActionTypes.FILTER, payload: { data, pattern } }),
  reset: (data) => ({ type: ActionTypes.RESET, payload: { data } })
};

const initialState: State = {
  data: null,
  pattern: ''
};

const useSearch = (): Return => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const filter = useCallback((data: unknown, pattern: string): void => {
    dispatch(actions.filter(data, pattern));
  }, []);

  const reset = useCallback((data: unknown): void => {
    dispatch(actions.reset(data));
  }, []);

  return {
    state,
    filter,
    reset
  };
};

export default useSearch;
