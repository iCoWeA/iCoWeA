import React, { type BaseHTMLAttributes, forwardRef } from 'react';
import selectConfig from '../../../configs/selectConfig';
import { mergeClasses } from '../../../utils/propsHelper';

interface SelectLegendProps extends BaseHTMLAttributes<HTMLLegendElement> {}

const SelectLegend = forwardRef<HTMLLegendElement, SelectLegendProps>(({ className, ...restProps }, ref) => {
  /* --- Set default props --- */
  const styles = selectConfig.styles.legend;

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

SelectLegend.displayName = 'SelectLegend';

export default SelectLegend;
