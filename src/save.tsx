/*
export const calculateCords = (anchor?: HTMLElement | null, element?: HTMLElement | null, position?: Position, transformPosition?: Position): Cords => {
  const cords: Cords = { top: 0, left: 0 };

  if (anchor === undefined || anchor === null || element === undefined || element === null) {
    return cords;
  }

  cords.top = anchor.offsetTop;
  cords.left = anchor.offsetLeft;

  if (position?.vertical === 'center') {
    cords.top += anchor.offsetHeight / 2;
  }

  if (position?.vertical === 'bottom') {
    cords.top += anchor.offsetHeight;
  }

  if (position?.horizontal === 'center') {
    cords.left += anchor.offsetWidth / 2;
  }

  if (position?.horizontal === 'right') {
    cords.left += anchor.offsetWidth;
  }

  if (transformPosition?.vertical === 'center') {
    cords.top -= element.offsetHeight / 2;
  }

  if (transformPosition?.vertical === 'bottom') {
    cords.top -= element.offsetHeight;
  }

  if (transformPosition?.horizontal === 'center') {
    cords.left -= element.offsetWidth / 2;
  }

  if (transformPosition?.horizontal === 'right') {
    cords.left -= element.offsetWidth;
  }

  return cords;
}; */

/*
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

export default useDatabase; */

/*
/*
const updateData = async (name: string, email: string, message: string, date: string): Promise<void> => {
  const key = push(child(ref(database), 'messages')).key;

  if (typeof key !== 'string') {
    return;
  }

  await update(ref(database), { [`/messages/${key}`]: { name, email, message, date, isRead: false } });
};

void updateData('Peter1', 'peter1@gmail.com', 'Hello, Peter1', new Date('2023-1-1').toISOString());
void updateData('Peter2', 'peter2@gmail.com', 'Hello, Peter2', new Date('2023-2-1').toISOString());
void updateData('Peter3', 'peter3@gmail.com', 'Hello, Peter3', new Date('2023-3-1').toISOString());
void updateData('Peter4', 'peter4@gmail.com', 'Hello, Peter4', new Date('2023-4-1').toISOString());
void updateData('Peter5', 'peter5@gmail.com', 'Hello, Peter5', new Date('2023-5-1').toISOString());
void updateData('Peter6', 'peter6@gmail.com', 'Hello, Peter6', new Date('2023-6-1').toISOString());
void updateData('Peter7', 'peter7@gmail.com', 'Hello, Peter7', new Date('2023-7-1').toISOString());
void updateData('Peter8', 'peter8@gmail.com', 'Hello, Peter8', new Date('2023-8-1').toISOString());
void updateData('Peter9', 'peter9@gmail.com', 'Hello, Peter9', new Date('2023-9-1').toISOString());
void updateData('Peter10', 'peter10@gmail.com', 'Hello, Peter10', new Date('2023-10-1').toISOString());
void updateData('Peter11', 'peter11@gmail.com', 'Hello, Peter11', new Date('2023-11-1').toISOString());
void updateData('Peter12', 'peter12@gmail.com', 'Hello, Peter12', new Date('2023-12-1').toISOString());
*/
