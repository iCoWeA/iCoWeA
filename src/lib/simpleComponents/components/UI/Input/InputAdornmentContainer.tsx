import React, { forwardRef, type BaseHTMLAttributes } from 'react';
import inputConfig from '../../../configs/inputConfig';
import { mergeClasses } from '../../../utils/propsHelper';

export interface InputAdornmentContainerProps extends BaseHTMLAttributes<HTMLDivElement> {}

const InputAdornmentContainer = forwardRef<HTMLDivElement, InputAdornmentContainerProps>(({ className, ...restProps }, ref) => {
  /* --- Set default props --- */
  const styles = inputConfig.styles.adornment;

  /* --- Set props --- */
  const mergedClassName = mergeClasses(styles.base, className);

  return (
    <div
      className={mergedClassName}
      ref={ref}
      {...restProps}
    />
  );
});

InputAdornmentContainer.displayName = 'InputAdornmentContainer';

export default InputAdornmentContainer;
