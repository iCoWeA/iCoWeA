import { useCallback, useReducer, type FocusEventHandler, type ChangeEventHandler, type ChangeEvent, type FocusEvent } from 'react';
import { validate } from '../utils/validationHelper';

enum ActionTypes {CHANGE, DEBOUNCED_CHANGE, BLUR, REVALID, RESET, RESET_FORM}

interface InputState {
  value: string;
  isValid: boolean;
  showError: boolean;
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
  deboundeDelay?: number;
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
  showError: false,
  errorMessage: '',
  timerId: initialTimerId
});

const reducer = (state: State, { type, payload }: Action): State => {
  const inputs: Record<string, InputState> = JSON.parse(JSON.stringify(state.inputs));

  if (type === ActionTypes.CHANGE) {
    clearTimeout(inputs[payload.inputName].timerId);
    inputs[payload.inputName].value = payload?.input?.value ?? '';
    inputs[payload.inputName].isValid = validate(payload.input, payload.pattern);
    inputs[payload.inputName].showError = !inputs[payload.inputName].isValid;
    inputs[payload.inputName].errorMessage = inputs[payload.inputName].showError ? payload.errorMessage ?? '' : '';
    inputs[payload.inputName].timerId = initialTimerId;
  }

  if (type === ActionTypes.DEBOUNCED_CHANGE) {
    clearTimeout(inputs[payload.inputName].timerId);
    inputs[payload.inputName].value = payload?.input?.value ?? '';
    inputs[payload.inputName].isValid = validate(payload.input, payload.pattern);
    inputs[payload.inputName].showError = inputs[payload.inputName].isValid
      ? false
      : inputs[payload.inputName].showError;
    inputs[payload.inputName].errorMessage = inputs[payload.inputName].showError ? payload.errorMessage ?? '' : '';
    inputs[payload.inputName].timerId = payload.timerId ?? initialTimerId;
  }

  if (type === ActionTypes.REVALID) {
    clearTimeout(inputs[payload.inputName].timerId);
    inputs[payload.inputName].isValid = validate(payload.input, payload.pattern);
    inputs[payload.inputName].showError = !inputs[payload.inputName].isValid;
    inputs[payload.inputName].errorMessage = inputs[payload.inputName].showError ? payload.errorMessage ?? '' : '';
    inputs[payload.inputName].timerId = initialTimerId;
  }

  if (type === ActionTypes.BLUR) {
    clearTimeout(inputs[payload.inputName].timerId);
    inputs[payload.inputName].isValid = validate(payload.input, payload.pattern);
    inputs[payload.inputName].showError = !inputs[payload.inputName].isValid;
    inputs[payload.inputName].errorMessage = inputs[payload.inputName].showError ? payload.errorMessage ?? '' : '';
    inputs[payload.inputName].timerId = initialTimerId;
  }

  if (type === ActionTypes.RESET) {
    clearTimeout(inputs[payload.inputName].timerId);
    inputs[payload.inputName] = initializeInput(payload.defaultValue);
  }

  if (type === ActionTypes.RESET_FORM) {
    Object.keys(inputs).forEach((inputName) => {
      clearTimeout(inputs[inputName].timerId);
      inputs[inputName] = initializeInput(payload?.config !== undefined ? payload.config[payload.inputName].defaultValue : '');
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
  const [state, dispatch] = useReducer(
    reducer,
    config,
    initializer
  );

  const change = useCallback(({ currentTarget }: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    dispatch(actions.change(currentTarget, config.inputs[currentTarget.name].pattern, config.inputs[currentTarget.name].errorMessage));
  }, []);

  const debouncedChange = useCallback(({ currentTarget }: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const timerId = window.setTimeout(() => {
      dispatch(actions.revalid(currentTarget, config.inputs[currentTarget.name].pattern, config.inputs[currentTarget.name].errorMessage));
    }, config.inputs[currentTarget.name].debounceDelay ?? config.deboundeDelay ?? initalDebounceDelay);

    dispatch(actions.debouncedChange(currentTarget, timerId, config.inputs[currentTarget.name].pattern, config.inputs[currentTarget.name].errorMessage));
  }, []);

  const blur = useCallback(({ currentTarget }: FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    dispatch(actions.blur(currentTarget, config.inputs[currentTarget.name].pattern, config.inputs[currentTarget.name].errorMessage));
  }, []);

  const reset = useCallback((inputName: string): void => {
    dispatch(actions.reset(inputName, config.inputs[inputName].defaultValue));
  }, []);

  const resetForm = useCallback((): void => {
    dispatch(actions.resetForm(config.inputs));
  }, []);

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
