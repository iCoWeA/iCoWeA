import React, { type BaseHTMLAttributes, forwardRef } from 'react';
import inputConfig from '../../../configs/inputConfig';
import { mergeClasses } from '../../../utils/propsHelper';

interface InputLegendProps extends BaseHTMLAttributes<HTMLLegendElement> {}

const InputLegend = forwardRef<HTMLLegendElement, InputLegendProps>(({ className, ...restProps }, ref) => {
  /* --- Set default props --- */
  const styles = inputConfig.styles.legend;

  /* --- Set props --- */
  const mergedClassName = mergeClasses(styles.base, className);

  return (
    <legend
      className={mergedClassName}
      ref={ref}
      {...restProps}
    />
  );
});

InputLegend.displayName = 'InputLegend';

export default InputLegend;
