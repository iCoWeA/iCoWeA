import React, { type BaseHTMLAttributes, forwardRef } from 'react';
import textareaConfig from '../../../configs/textareaConfig';
import { mergeClasses } from '../../../utils/propsHelper';

interface TextareaContainerProps extends BaseHTMLAttributes<HTMLDivElement> {
  shifted: boolean;
  focused: boolean;
}

const TextareaContainer = forwardRef<HTMLDivElement, TextareaContainerProps>(({ shifted, focused, className, ...restProps }, ref) => {
  /* --- Set default props --- */
  const styles = textareaConfig.styles.container;

  /* --- Set props --- */
  const mergedClassName = mergeClasses(styles.base, shifted && styles.shifted, focused && styles.focused, className);

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
