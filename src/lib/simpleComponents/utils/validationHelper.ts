export const validate: (input: HTMLInputElement | HTMLTextAreaElement, pattern?: RegExp) => boolean = (input, pattern) => {
  if (pattern != null) {
    return pattern.test(input.value);
  }

  if (input instanceof HTMLInputElement && input.pattern.trim() !== '') {
    return input.value.search(input.pattern) !== -1;
  }

  if (input.required) {
    return input.checkValidity() && input.value.trim() !== '';
  }

  return true;
};
