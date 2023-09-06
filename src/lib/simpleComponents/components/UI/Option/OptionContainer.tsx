import React, { type LiHTMLAttributes, forwardRef } from 'react';
import listItemButtonConfig from '../../../configs/listItemButtonConfig';
import { mergeClasses } from '../../../utils/propsHelper';

interface OptionContainerProps extends LiHTMLAttributes<HTMLLIElement> {}

const OptionContainer = forwardRef<HTMLLIElement, OptionContainerProps>(({ className, ...restProps }, ref) => {
  /* --- Set default props --- */
  const styles = listItemButtonConfig.styles.container;

  /* --- Set props --- */
  const mergedClassName = mergeClasses(styles.base, className);

  return (
    <li
      className={mergedClassName}
      ref={ref}
      {...restProps}
    />
  );
});

OptionContainer.displayName = 'OptionContainer';

export default OptionContainer;
