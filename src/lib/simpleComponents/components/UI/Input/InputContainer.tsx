import React, { type BaseHTMLAttributes, forwardRef } from 'react';
import inputConfig from '../../../configs/inputConfig';
import { mergeClasses } from '../../../utils/propsHelper';

interface InputContainerProps extends BaseHTMLAttributes<HTMLDivElement> {
  open: boolean;
  value: string | number | readonly string[];
}

const InputContainer = forwardRef<HTMLDivElement, InputContainerProps>(({ open, value, className, ...restProps }, ref) => {
  /* --- Set default props --- */
  const styles = inputConfig.styles.container;

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

InputContainer.displayName = 'InputContainer';

export default InputContainer;
