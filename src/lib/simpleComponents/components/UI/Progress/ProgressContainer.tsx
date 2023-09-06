import React, { type BaseHTMLAttributes, forwardRef, useContext } from 'react';
import progressConfig from '../../../configs/progressConfig';
import themeContext from '../../../contexts/theme';
import { mergeClasses } from '../../../utils/propsHelper';

interface ProgressContainerProps extends BaseHTMLAttributes<HTMLDivElement> {
  label: boolean;
  size: Sizes;
}

const ProgressContainer = forwardRef<HTMLDivElement, ProgressContainerProps>(({ label, size, className, ...restProps }, ref) => {
  /* --- Set context props --- */
  const theme = useContext(themeContext).theme;

  /* --- Set default props --- */
  const styles = progressConfig.styles.container;

  /* --- Set props --- */
  const mergedClassName = mergeClasses(styles.base, !label && styles.sizes.default[size], label && styles.sizes.label[size], styles.color[theme], className);

  return (
    <div
      className={mergedClassName}
      ref={ref}
      {...restProps}
    />
  );
});

ProgressContainer.displayName = 'ProgressContainer';

export default ProgressContainer;
