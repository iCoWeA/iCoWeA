import React, { type BaseHTMLAttributes, forwardRef } from 'react';
import selectConfig from '../../../configs/selectConfig';
import { mergeClasses } from '../../../utils/propsHelper';

interface SelectContainerProps extends BaseHTMLAttributes<HTMLDivElement> {
  shifted: boolean;
  focused: boolean;
}

const SelectContainer = forwardRef<HTMLDivElement, SelectContainerProps>(({ shifted, focused, className, ...restProps }, ref) => {
  /* --- Set default props --- */
  const styles = selectConfig.styles.container;

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

SelectContainer.displayName = 'SelectContainer';

export default SelectContainer;
