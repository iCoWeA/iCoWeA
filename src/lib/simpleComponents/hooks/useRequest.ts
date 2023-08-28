import { useCallback, useReducer } from 'react';

enum ActionTypes {LOADING, SUCCESS, FAILED}

interface State {
  isLoading: boolean;
  data: unknown;
  error: unknown;
}

interface Action {
  type: ActionTypes,
  payload?: unknown;
}

interface Actions {
  loading: () => Action;
  success: (data: unknown) => Action;
  failed: (error: unknown) => Action;
}

interface Return {
  state: State,
  send: (url: string, request?: RequestInit) => Promise<void>;
}

const reducer = ({ isLoading, data, error }: State, { type, payload }: Action): State => {
  if (type === ActionTypes.LOADING) {
    isLoading = true;
  }

  if (type === ActionTypes.FAILED) {
    isLoading = false;
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

const actions: Actions = {
  loading: () => ({ type: ActionTypes.LOADING }),
  success: (data) => ({ type: ActionTypes.SUCCESS, payload: data }),
  failed: (error) => ({ type: ActionTypes.FAILED, payload: error })
};

const initialState: State = {
  isLoading: true,
  error: null,
  data: null
};

const useRequest = (): Return => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const send = useCallback(async (url: string, request?: RequestInit): Promise<void> => {
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
  }, []);

  return {
    state,
    send
  };
};

export default useRequest;
