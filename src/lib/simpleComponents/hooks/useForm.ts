import { useCallback, useReducer, type FocusEventHandler, type ChangeEventHandler, type ChangeEvent } from 'react';
import { validate } from '../utils/validationHelper';

enum ActionTypes {CHANGE, DEBOUNCED_CHANGE, BLUR, REVALID, RESET, RESET_FORM}

interface InputState {
  value: string;
  showError: boolean;
  isValid: boolean;
  timerId: number;
  config: {
    defaultValue: string;
    errorMessage: string;
    debounceDelay: number;
  }
}

interface State {
  inputs: Record<string, InputState>;
  isFormValid: boolean;
}

interface Action {
  type: ActionTypes,
  payload: { inputName: string; input?: HTMLInputElement | HTMLTextAreaElement, timerId?: number };
}

interface InputInitialConfig {
  defaultValue?: string;
  errorMessage?: string;
  debounceDelay?: number;
}

const initializeInput = ({ defaultValue = '', errorMessage = '', debounceDelay = 1000 }: InputInitialConfig): InputState => ({
  value: defaultValue,
  showError: false,
  isValid: false,
  timerId: -1,
  config: {
    defaultValue,
    errorMessage,
    debounceDelay
  }
});

const reducer = (state: State, { type, payload }: Action): State => {
  const inputs: Record<string, InputState> = JSON.parse(JSON.stringify(state.inputs));

  if (type === ActionTypes.CHANGE && payload.input != null) {
    clearTimeout(inputs[payload.inputName].timerId);
    inputs[payload.inputName].timerId = -1;
    inputs[payload.inputName].value = payload.input.value;
    inputs[payload.inputName].isValid = validate(payload.input);
    inputs[payload.inputName].showError = !inputs[payload.inputName].isValid;
  }

  if (type === ActionTypes.DEBOUNCED_CHANGE && payload.input != null) {
    clearTimeout(inputs[payload.inputName].timerId);
    inputs[payload.inputName].timerId = payload.timerId ?? -1;
    inputs[payload.inputName].value = payload.input.value;
    inputs[payload.inputName].isValid = validate(payload.input);
    inputs[payload.inputName].showError = inputs[payload.inputName].isValid
      ? false
      : inputs[payload.inputName].showError;
  }

  if (type === ActionTypes.REVALID && payload.input != null) {
    clearTimeout(inputs[payload.inputName].timerId);
    inputs[payload.inputName].timerId = -1;
    inputs[payload.inputName].isValid = validate(payload.input);
    inputs[payload.inputName].showError = !inputs[payload.inputName].isValid;
  }

  if (type === ActionTypes.BLUR && payload.input != null) {
    clearTimeout(inputs[payload.inputName].timerId);
    inputs[payload.inputName].timerId = -1;
    inputs[payload.inputName].isValid = validate(payload.input);
    inputs[payload.inputName].showError = !inputs[payload.inputName].isValid;
  }

  if (type === ActionTypes.RESET) {
    clearTimeout(inputs[payload.inputName].timerId);
    inputs[payload.inputName] = initializeInput(inputs[payload.inputName].config);
  }

  if (type === ActionTypes.RESET_FORM) {
    Object.keys(inputs).forEach((inputName) => {
      clearTimeout(inputs[inputName].timerId);
      inputs[inputName] = initializeInput(inputs[inputName].config);
    });
  }

  return {
    isFormValid: Object.keys(inputs).every((inputName) => inputs[inputName].isValid),
    inputs
  };
};

interface Config {
  inputs: InputConfig[];
  deboundeDelay?: number;
}

interface InputConfig {
  name: string;
  defaultValue?: string;
  errorMessage?: string;
  debounceDelay?: number;
}

const initializer = (config: Config): State => {
  const state: State = { isFormValid: false, inputs: {} };

  config.inputs.forEach((input) => {
    input.debounceDelay = input.debounceDelay ?? config.deboundeDelay;
    state.inputs[input.name] = initializeInput(input);
  });

  return state;
};

interface Actions {
  change: (input: HTMLInputElement | HTMLTextAreaElement) => Action;
  debouncedChange: (input: HTMLInputElement | HTMLTextAreaElement, timerId: number) => Action;
  blur: (input: HTMLInputElement | HTMLTextAreaElement) => Action;
  reset: (inputName: string) => Action;
  revalid: (input: HTMLInputElement | HTMLTextAreaElement) => Action;
  resetForm: () => Action;
}

const actions: Actions = {
  change: (input) => ({
    type: ActionTypes.CHANGE,
    payload: { inputName: input.name, input }
  }),
  debouncedChange: (input, timerId) => ({
    type: ActionTypes.DEBOUNCED_CHANGE,
    payload: { inputName: input.name, input, timerId }
  }),
  blur: (input) => ({
    type: ActionTypes.BLUR,
    payload: { inputName: input.name, input }
  }),
  reset: (inputName) => ({
    type: ActionTypes.RESET,
    payload: { inputName }
  }),
  revalid: (input) => ({
    type: ActionTypes.REVALID,
    payload: { inputName: input.name, input }
  }),
  resetForm: () => ({ type: ActionTypes.RESET_FORM, payload: { inputName: '' } })
};

interface Return {
  state: State;
  change: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  debouncedChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  blur: FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  reset: (inputName: string) => void;
  resetForm: () => void;
}

const useForm = (config: Config): Return => {
  const [state, dispatch] = useReducer(
    reducer,
    config,
    initializer
  );

  const change = useCallback(({ currentTarget }: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    dispatch(actions.change(currentTarget));
  }, []);

  const debouncedChange = useCallback(({ currentTarget }: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const timerId = window.setTimeout(() => {
      dispatch(actions.revalid(currentTarget));
    }, state.inputs[currentTarget.name].config.debounceDelay);

    dispatch(actions.debouncedChange(currentTarget, timerId));
  }, []);

  const blur: FocusEventHandler<HTMLInputElement | HTMLTextAreaElement> = ({ currentTarget }) => {
    dispatch(actions.blur(currentTarget));
  };

  const reset = useCallback((inputName: string): void => {
    dispatch(actions.reset(inputName));
  }, []);

  const resetForm = useCallback((): void => {
    dispatch(actions.resetForm());
  }, []);

  return {
    state,
    change,
    debouncedChange,
    blur: useCallback(blur, []),
    reset,
    resetForm
  };
};

export default useForm;
