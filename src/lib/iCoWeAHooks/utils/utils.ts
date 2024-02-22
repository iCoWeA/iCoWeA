export const validate = (input?: HTMLInputElement | HTMLTextAreaElement | null): boolean => {
  if (!input) {
    return false;
  }

  if (input instanceof HTMLInputElement && input.pattern) {
    return input.value.search(input.pattern) !== -1;
  }

  if (input.required) {
    return input.checkValidity();
  }

  return true;
};

export const deepClone = <T>(object: T): T => {
  const newObject: Record<string, any> = {};

  for (const key in object) {
    newObject[key] = object[key] === 'object' ? deepClone(object[key]) : object[key];
  }

  return newObject as T;
};
