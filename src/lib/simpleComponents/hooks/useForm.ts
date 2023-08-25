import { useCallback, useReducer, type FocusEventHandler, type ChangeEventHandler, type ChangeEvent, type FocusEvent } from 'react';
import { deepClone } from '../utils/propsHelper';
import { validate } from '../utils/validationHelper';

enum ActionTypes {CHANGE, DEBOUNCED_CHANGE, BLUR, REVALID, RESET, RESET_FORM}

interface InputState {
  value: string;
  isValid: boolean;
  error: boolean;
  errorMessage: string;
  timerId: number;
}

interface State {
  inputs: Record<string, InputState>;
  isFormValid: boolean;
}

interface InputConfig {
  defaultValue?: string;
  errorMessage?: string;
  debounceDelay?: number;
  pattern?: string;
}

interface Action {
  type: ActionTypes,
  payload: { inputName: string; input?: HTMLInputElement | HTMLTextAreaElement, timerId?: number, defaultValue?: string, pattern?: string, errorMessage?: string; config?: Record<string, InputConfig> };
}

interface Config {
  inputs: Record<string, InputConfig>
  debounceDelay?: number;
}

interface Actions {
  change: (input: HTMLInputElement | HTMLTextAreaElement, pattern?: string, errorMessage?: string) => Action;
  debouncedChange: (input: HTMLInputElement | HTMLTextAreaElement, timerId: number, pattern?: string, errorMessage?: string) => Action;
  revalid: (input: HTMLInputElement | HTMLTextAreaElement, pattern?: string, errorMessage?: string) => Action;
  blur: (input: HTMLInputElement | HTMLTextAreaElement, pattern?: string, errorMessage?: string) => Action;
  reset: (inputName: string, defaultValue?: string) => Action;
  resetForm: (config: Record<string, InputConfig>) => Action;
}

interface Return {
  state: State;
  change: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  debouncedChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  blur: FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  reset: (inputName: string) => void;
  resetForm: () => void;
}

const initialTimerId = -1;

const initializeInput = (defaultValue: string = ''): InputState => ({
  value: defaultValue,
  isValid: false,
  error: false,
  errorMessage: '',
  timerId: initialTimerId
});

const reducer = (state: State, { type, payload: { inputName, input, defaultValue, pattern, timerId = initialTimerId, errorMessage = '', config = {} } }: Action): State => {
  const inputs: Record<string, InputState> = deepClone(state.inputs);

  if (type === ActionTypes.CHANGE) {
    clearTimeout(inputs[inputName].timerId);
    inputs[inputName].value = input?.value ?? '';
    inputs[inputName].isValid = validate(input, pattern);
    inputs[inputName].error = !inputs[inputName].isValid;
    inputs[inputName].errorMessage = inputs[inputName].error ? errorMessage : '';
    inputs[inputName].timerId = initialTimerId;
  }

  if (type === ActionTypes.DEBOUNCED_CHANGE) {
    clearTimeout(inputs[inputName].timerId);
    inputs[inputName].value = input?.value ?? '';
    inputs[inputName].isValid = validate(input, pattern);
    inputs[inputName].error = inputs[inputName].isValid
      ? false
      : inputs[inputName].error;
    inputs[inputName].errorMessage = inputs[inputName].error ? errorMessage : '';
    inputs[inputName].timerId = timerId;
  }

  if (type === ActionTypes.REVALID) {
    clearTimeout(inputs[inputName].timerId);
    inputs[inputName].isValid = validate(input, pattern);
    inputs[inputName].error = !inputs[inputName].isValid;
    inputs[inputName].errorMessage = inputs[inputName].error ? errorMessage : '';
    inputs[inputName].timerId = initialTimerId;
  }

  if (type === ActionTypes.BLUR) {
    clearTimeout(inputs[inputName].timerId);
    inputs[inputName].isValid = validate(input, pattern);
    inputs[inputName].error = !inputs[inputName].isValid;
    inputs[inputName].errorMessage = inputs[inputName].error ? errorMessage : '';
    inputs[inputName].timerId = initialTimerId;
  }

  if (type === ActionTypes.RESET) {
    clearTimeout(inputs[inputName].timerId);
    inputs[inputName] = initializeInput(defaultValue);
  }

  if (type === ActionTypes.RESET_FORM) {
    Object.keys(inputs).forEach((inputName) => {
      clearTimeout(inputs[inputName].timerId);
      inputs[inputName] = initializeInput(config[inputName]?.defaultValue ?? '');
    });
  }

  return {
    isFormValid: Object.keys(inputs).every((inputName) => inputs[inputName].isValid),
    inputs
  };
};

const initializer = (config: Config): State => {
  const state: State = { isFormValid: false, inputs: {} };

  Object.keys(config.inputs).forEach((inputName) => {
    state.inputs[inputName] = initializeInput(config.inputs[inputName].defaultValue);
  });

  return state;
};

const actions: Actions = {
  change: (input, pattern, errorMessage) => ({
    type: ActionTypes.CHANGE,
    payload: { inputName: input.name, input, pattern, errorMessage }
  }),
  debouncedChange: (input, timerId, pattern, errorMessage) => ({
    type: ActionTypes.DEBOUNCED_CHANGE,
    payload: { inputName: input.name, input, timerId, pattern, errorMessage }
  }),
  revalid: (input, pattern, errorMessage) => ({
    type: ActionTypes.REVALID,
    payload: { inputName: input.name, input, pattern, errorMessage }
  }),
  blur: (input, pattern, errorMessage) => ({
    type: ActionTypes.BLUR,
    payload: { inputName: input.name, input, pattern, errorMessage }
  }),
  reset: (inputName, defaultValue) => ({
    type: ActionTypes.RESET,
    payload: { inputName, defaultValue }
  }),
  resetForm: () => ({ type: ActionTypes.RESET_FORM, payload: { inputName: '' } })
};

const initalDebounceDelay = 1000;

const useForm = (config: Config): Return => {
  const { inputs, debounceDelay } = config;
  const [state, dispatch] = useReducer(
    reducer,
    config,
    initializer
  );

  const change = useCallback(({ currentTarget }: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    dispatch(actions.change(currentTarget, inputs[currentTarget.name].pattern, inputs[currentTarget.name].errorMessage));
  }, [inputs]);

  const debouncedChange = useCallback(({ currentTarget }: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const timerId = window.setTimeout(() => {
      dispatch(actions.revalid(currentTarget, inputs[currentTarget.name].pattern, inputs[currentTarget.name].errorMessage));
    }, inputs[currentTarget.name].debounceDelay ?? debounceDelay ?? initalDebounceDelay);

    dispatch(actions.debouncedChange(currentTarget, timerId, inputs[currentTarget.name].pattern, inputs[currentTarget.name].errorMessage));
  }, [inputs, debounceDelay]);

  const blur = useCallback(({ currentTarget }: FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    dispatch(actions.blur(currentTarget, inputs[currentTarget.name].pattern, inputs[currentTarget.name].errorMessage));
  }, [inputs]);

  const reset = useCallback((inputName: string): void => {
    dispatch(actions.reset(inputName, inputs[inputName].defaultValue));
  }, [inputs]);

  const resetForm = useCallback((): void => {
    dispatch(actions.resetForm(inputs));
  }, [inputs]);

  return {
    state,
    change,
    debouncedChange,
    blur,
    reset,
    resetForm
  };
};

export default useForm;
