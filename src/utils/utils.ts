import { type InputState } from '../lib/iCoWeAHooks/hooks/useForm';
import { type Projects } from '../store/slices/projects';

export const isNameUsed = (name: string, projects: Projects): boolean => Object.keys(projects).some((key) => projects[key].name.toLowerCase() === name.toLowerCase());

export const isFormChanged = (defaultValue: Obj, values: Record<string, InputState>): boolean =>
  Object.keys(defaultValue).some((key) => defaultValue[key] !== values[key].value);

export const modifyNumber = (phone: string): string => {
  let newPhone = phone.substring(0, 4) + ' ';

  for (let i = 4; i <= phone.length; i = i + 3) {
    newPhone = newPhone + phone.substring(i, i + 3) + ' ';
  }

  return newPhone;
};
