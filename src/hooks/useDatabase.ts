import { useCallback, useReducer } from 'react';
import { type DataSnapshot } from 'firebase/database';

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
  resolve: (promise: Promise<DataSnapshot>) => Promise<void>;
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

const useDatabase = (): Return => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const resolve = useCallback(async (promise: Promise<DataSnapshot>): Promise<void> => {
    dispatch(actions.loading());

    try {
      const resolvedRequest = await promise;

      if (resolvedRequest.exists()) {
        dispatch(actions.success(resolvedRequest.val()));
      } else {
        dispatch(actions.success([]));
      }
    } catch (error) {
      dispatch(actions.failed(error));
    }
  }, []);

  return {
    state,
    resolve
  };
};

export default useDatabase;
