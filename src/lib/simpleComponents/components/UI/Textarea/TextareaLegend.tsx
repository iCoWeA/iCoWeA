import React, { type BaseHTMLAttributes, forwardRef } from 'react';
import textareaConfig from '../../../configs/textareaConfig';
import { mergeClasses } from '../../../utils/propsHelper';

interface TextareaLegendProps extends BaseHTMLAttributes<HTMLLegendElement> {}

const TextareaLegend = forwardRef<HTMLLegendElement, TextareaLegendProps>(({ className, ...restProps }, ref) => {
  /* --- Set default props --- */
  const styles = textareaConfig.styles.legend;

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

TextareaLegend.displayName = 'TextareaLegend';

export default TextareaLegend;
