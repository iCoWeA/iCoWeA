import { useReducer, useCallback } from 'react';

import { deepClone } from '../utils/utils';

enum ActionTypes {LOADING, SUCCESS, FAILED}

interface State<T> {
  isLoading: boolean;
  data?: T;
  error: unknown;
}

interface Action<T> {
  type: ActionTypes;
  payload?: {
    data?: T;
    error?: unknown;
  };
}

interface Actions {
  loading: <T>() => Action<T>;
  success: <T>(data: T) => Action<T>;
  failed: <T>(error: unknown) => Action<T>;
}

interface Return<T> {
  state: State<T>,
  send: (url: string, request?: RequestInit) => Promise<void>;
}

const reducer = <T>(prevState: State<T>, { type, payload }: Action<T>): State<T> => {
  const state = deepClone(prevState);

  if (type === ActionTypes.LOADING) {
    state.isLoading = true;
    state.data = payload?.data;
    state.error = payload?.error;
  }

  if (type === ActionTypes.FAILED) {
    state.isLoading = false;
    state.data = payload?.data;
    state.error = payload?.error;
  }

  if (type === ActionTypes.SUCCESS) {
    state.isLoading = false;
    state.data = payload?.data;
    state.error = payload?.error;
  }

  return state;
};

const actions: Actions = {
  loading: () => ({ type: ActionTypes.LOADING }),
  success: (data) => ({ type: ActionTypes.SUCCESS, payload: { data } }),
  failed: (error) => ({ type: ActionTypes.FAILED, payload: { error } })
};

const useRequest = <T>(data?: T, isLoading: boolean = false, error: unknown = null): Return<T> => {
  const [state, dispatch] = useReducer(reducer<T>, { data, isLoading, error });

  const send = useCallback(async (url: string, request?: RequestInit): Promise<void> => {
    dispatch(actions.loading());

    try {
      const response = await fetch(url, request);

      if (response.status < 200 || response.status > 299) {
        throw new Error('response Error');
      }

      dispatch(actions.success(await response.json()));
    } catch (error) {
      dispatch(actions.failed(error));
    }
  }, []);

  return {
    state,
    send
  };
};

export default useRequest;
