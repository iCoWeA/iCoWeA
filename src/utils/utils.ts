import { type InputState } from '../lib/iCoWeAHooks/hooks/useForm';

export const isFormChanged = (defaultValue: Obj, values: Record<string, InputState>): boolean =>
  Object.keys(values).some((key) => defaultValue[key] !== values[key].value);
