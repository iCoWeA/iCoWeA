import React, { type BaseHTMLAttributes, forwardRef } from 'react';
import inputConfig from '../../../configs/inputConfig';
import { mergeClasses } from '../../../utils/propsHelper';

interface InputContainerProps extends BaseHTMLAttributes<HTMLDivElement> {
  shifted: boolean;
  focused: boolean;
}

const InputContainer = forwardRef<HTMLDivElement, InputContainerProps>(({ shifted, focused, className, ...restProps }, ref) => {
  /* --- Set default props --- */
  const styles = inputConfig.styles.container;

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

InputContainer.displayName = 'InputContainer';

export default InputContainer;
