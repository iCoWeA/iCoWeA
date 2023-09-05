import React, { type BaseHTMLAttributes, forwardRef } from 'react';
import textAreaConfig from '../../../configs/textAreaConfig';
import { mergeClasses } from '../../../utils/propsHelper';

interface TextAreaLegendProps extends BaseHTMLAttributes<HTMLLegendElement> {}

const TextAreaLegend = forwardRef<HTMLLegendElement, TextAreaLegendProps>(({ className, ...restProps }, ref) => {
  /* --- Set default props --- */
  const styles = textAreaConfig.styles.legend;

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

TextAreaLegend.displayName = 'TextAreaLegend';

export default TextAreaLegend;
