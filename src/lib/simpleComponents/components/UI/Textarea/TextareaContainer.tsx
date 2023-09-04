import React, { type BaseHTMLAttributes, forwardRef } from 'react';
import textareaConfig from '../../../configs/textareaConfig';
import { mergeClasses } from '../../../utils/propsHelper';

interface TextareaContainerProps extends BaseHTMLAttributes<HTMLDivElement> {
  open: boolean;
  value: string | number | readonly string[];
}

const TextareaContainer = forwardRef<HTMLDivElement, TextareaContainerProps>(({ open, value, className, ...restProps }, ref) => {
  /* --- Set default props --- */
  const styles = textareaConfig.styles.container;

  /* --- Set props --- */
  const mergedClassName = mergeClasses(styles.base, value !== '' && styles.shifted, open && styles.focused, className);

  return (
    <div
      className={mergedClassName}
      ref={ref}
      {...restProps}
    />
  );
});

TextareaContainer.displayName = 'TextareaContainer';

export default TextareaContainer;
