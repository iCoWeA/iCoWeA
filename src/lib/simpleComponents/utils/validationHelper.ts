export const validate: (input?: HTMLInputElement | HTMLTextAreaElement, pattern?: string) => boolean = (input, pattern) => {
  if (input === undefined) {
    return false;
  }

  if (pattern !== undefined) {
    return pattern.search(input.value) !== -1;
  }

  if (input instanceof HTMLInputElement && input.pattern !== undefined && input.pattern !== '') {
    return input.value.search(input.pattern) !== -1;
  }

  if (input.required) {
    return input.checkValidity();
  }

  return true;
};
