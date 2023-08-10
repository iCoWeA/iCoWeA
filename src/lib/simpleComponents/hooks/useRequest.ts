import { useCallback, useReducer } from 'react';

enum ActionTypes {LOADING, SUCCESS, FAILED}

interface State {
  data: unknown;
  error: unknown;
  isLoading?: boolean;
}

interface Action {
  type: ActionTypes,
  payload: unknown;
}

interface Actions {
  loading: () => Action;
  success: (payload: unknown) => Action;
  failed: (payload: unknown) => Action;
}

interface Request {
  state: State,
  send: (url: string, request?: RequestInit) => Promise<void>;
}

const actions: Actions = {
  loading: () => ({ type: ActionTypes.LOADING, payload: null }),
  success: (payload) => ({ type: ActionTypes.SUCCESS, payload }),
  failed: (payload) => ({ type: ActionTypes.FAILED, payload })
};

const reducer: (state: State, action: Action) => State = ({ data, error, isLoading }, { type, payload }) => {
  if (type === ActionTypes.LOADING) {
    isLoading = true;
    data = null;
    error = null;
  }

  if (type === ActionTypes.FAILED) {
    isLoading = false;
    data = null;
    error = payload;
  }

  if (type === ActionTypes.SUCCESS) {
    isLoading = false;
    data = payload;
    error = null;
  }

  return {
    data,
    isLoading,
    error
  };
};

const initialState: State = {
  isLoading: true,
  error: null,
  data: null
};

const useRequest: () => Request = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const send: (url: string, requestInit?: RequestInit) => Promise<void> = async (url, request) => {
    dispatch(actions.loading());

    try {
      const response = await fetch(url, request);

      if (response.status < 200 || response.status > 299) {
        dispatch(actions.failed(new Error('response Error')));
      }

      dispatch(actions.success(await response.json()));
    } catch (error) {
      dispatch(actions.failed(error));
    }
  };

  return {
    state,
    send: useCallback(send, [])
  };
};

export default useRequest;
