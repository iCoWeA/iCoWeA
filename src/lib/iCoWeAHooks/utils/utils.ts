export const validate: (input?: HTMLInputElement | HTMLTextAreaElement, pattern?: string) => boolean = (input, pattern) => {
  if (!input) {
    return false;
  }

  if (pattern) {
    return pattern.search(input.value) !== -1;
  }

  if (input instanceof HTMLInputElement && input.pattern && input.pattern !== '') {
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
