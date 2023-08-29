import { useCallback, useReducer } from 'react';
import { deepClone } from '../utils/propsHelper';

enum ActionTypes {FILTER, RESET}

interface State<T> {
  data: T;
  pattern: string;
}

interface Action<T> {
  type: ActionTypes,
  payload: {
    data: T;
    pattern?: string;
  };
}

interface Actions {
  set: <T>(data: T, pattern: string) => Action<T>;
  reset: <T>(data: T) => Action<T>;
}

interface Return<T> {
  state: State<T>,
  set: (data: T, pattern: string) => void;
  reset: (data: T) => void;
}

const createReducer = <T>() => (prevState: State<T>, { type, payload: { data, pattern = '' } }: Action<T>): State<T> => {
  const state = deepClone(prevState);

  if (type === ActionTypes.FILTER) {
    state.data = data;
    state.pattern = pattern;
  }

  if (type === ActionTypes.RESET) {
    state.data = data;
    state.pattern = pattern;
  }

  return state;
};

const actions: Actions = {
  set: (data, pattern) => ({ type: ActionTypes.FILTER, payload: { data, pattern } }),
  reset: (data) => ({ type: ActionTypes.RESET, payload: { data } })
};

const useSearch = <T>(data: T, pattern: string = ''): Return<T> => {
  const reducer = createReducer<T>();
  const initialState = { data, pattern };
  const [state, dispatch] = useReducer(reducer, initialState);

  const set = useCallback((data: T, pattern: string): void => {
    dispatch(actions.set(data, pattern));
  }, []);

  const reset = useCallback((data: T): void => {
    dispatch(actions.reset(data));
  }, []);

  return {
    state,
    set,
    reset
  };
};

export default useSearch;
