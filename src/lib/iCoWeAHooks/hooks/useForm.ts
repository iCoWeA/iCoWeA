import { type FocusEventHandler, useRef, useReducer, useEffect, useCallback, type ChangeEvent, type FocusEvent } from 'react';

import { deepClone } from '../utils/utils';

enum ActionTypes {CHANGE, DEBOUNCED_CHANGE, BLUR, REVALID, RESET, RESET_FORM}

interface InputState {
  value: string;
  valid: boolean;
  error: boolean;
  timerId: number;
}

interface State {
  inputs: Record<string, InputState>;
  isFormValid: boolean;
}

interface Action {
  type: ActionTypes,
  payload: { input?: HTMLInputElement | HTMLTextAreaElement, name?: string; timerId?: number, defaultValue?: string; config?: Obj };
}

interface Actions {
  change: (input: HTMLInputElement | HTMLTextAreaElement) => Action;
  debouncedChange: (input: HTMLInputElement | HTMLTextAreaElement, timerId: number) => Action;
  revalid: (input: HTMLInputElement | HTMLTextAreaElement) => Action;
  blur: (input: HTMLInputElement | HTMLTextAreaElement) => Action;
  reset: (name: string, defaultValue: string) => Action;
  resetForm: (config: Obj) => Action;
}

interface Return {
  state: State;
  change: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, delay?: number) => void;
  blur: FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  reset: (name: string) => void;
  resetForm: () => void;
}

const initialTimerId = -1;

const validate = (input?: HTMLInputElement | HTMLTextAreaElement): boolean => {
  if (!input) {
    return false;
  }

  if (input instanceof HTMLInputElement && input.pattern && input.pattern !== '') {
    return input.value.search(input.pattern) !== -1;
  }

  if (input.required) {
    return input.checkValidity();
  }

  return true;
};

const initialize = (defaultValue: string = ''): InputState => ({
  value: defaultValue,
  valid: false,
  error: false,
  timerId: initialTimerId
});

const reducer = (prevState: State, { type, payload: { input, name = input?.name ?? '', timerId = initialTimerId, defaultValue = '', config } }: Action): State => {
  const state = deepClone(prevState);

  if (type === ActionTypes.CHANGE) {
    clearTimeout(state.inputs[name].timerId);
    state.inputs[name].value = input?.value ?? '';
    state.inputs[name].valid = validate(input);
    state.inputs[name].error = !state.inputs[name].valid;
    state.inputs[name].timerId = initialTimerId;
  }

  if (type === ActionTypes.DEBOUNCED_CHANGE) {
    clearTimeout(state.inputs[name].timerId);
    state.inputs[name].value = input?.value ?? '';
    state.inputs[name].valid = validate(input);
    state.inputs[name].error = state.inputs[name].valid
      ? false
      : state.inputs[name].error;
    state.inputs[name].timerId = timerId;

    if (state.inputs[name].valid) {
      clearTimeout(timerId);
      state.inputs[name].timerId = initialTimerId;
    }
  }

  if (type === ActionTypes.REVALID) {
    clearTimeout(state.inputs[name].timerId);
    state.inputs[name].error = !state.inputs[name].valid;
    state.inputs[name].timerId = timerId;
  }

  if (type === ActionTypes.BLUR) {
    clearTimeout(state.inputs[name].timerId);
    state.inputs[name].valid = validate(input);
    state.inputs[name].error = !state.inputs[name].valid;
    state.inputs[name].timerId = timerId;
  }

  if (type === ActionTypes.RESET) {
    clearTimeout(state.inputs[name].timerId);
    state.inputs[name] = initialize(defaultValue);
  }

  if (type === ActionTypes.RESET_FORM) {
    Object.keys(state.inputs).forEach((name) => {
      clearTimeout(state.inputs[name].timerId);
      state.inputs[name] = initialize(config?.[name]);
    });
  }

  state.isFormValid = Object.keys(state.inputs).every((name) => state.inputs[name].valid);

  return state;
};

const initializer = (config: Obj): State => {
  const state: State = { isFormValid: false, inputs: {} };

  Object.keys(config).forEach((name) => {
    state.inputs[name] = initialize(config?.[name]);
  });

  return state;
};

const actions: Actions = {
  change: (input) => ({
    type: ActionTypes.CHANGE,
    payload: { input }
  }),
  debouncedChange: (input, timerId) => ({
    type: ActionTypes.DEBOUNCED_CHANGE,
    payload: { input, timerId }
  }),
  revalid: (input) => ({
    type: ActionTypes.REVALID,
    payload: { input }
  }),
  blur: (input) => ({
    type: ActionTypes.BLUR,
    payload: { input }
  }),
  reset: (name, defaultValue) => ({
    type: ActionTypes.RESET,
    payload: { name, defaultValue }
  }),
  resetForm: (config) => ({ type: ActionTypes.RESET_FORM, payload: { config } })
};

const useForm = (config: Obj): Return => {
  const savedConfig = useRef(config);

  const [state, dispatch] = useReducer(
    reducer,
    config,
    initializer
  );

  useEffect(() => { savedConfig.current = config; }, [config]);

  const change = useCallback(({ target }: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, delay?: number) => {
    if (!delay) {
      dispatch(actions.change(target));
    } else {
      const timerId = window.setTimeout(() => {
        dispatch(actions.revalid(target));
      }, delay);

      dispatch(actions.debouncedChange(target, timerId));
    }
  }, []);

  const blur = useCallback(({ target }: FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    dispatch(actions.blur(target));
  }, []);

  const reset = useCallback((name: string): void => {
    dispatch(actions.reset(name, savedConfig.current[name]));
  }, []);

  const resetForm = useCallback((): void => {
    dispatch(actions.resetForm(savedConfig.current));
  }, []);

  return {
    state,
    change,
    blur,
    reset,
    resetForm
  };
};

export default useForm;
