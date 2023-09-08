import React, { type BaseHTMLAttributes, forwardRef } from 'react';
import badgeConfig from '../../../configs/badgeConfig';
import { mergeClasses } from '../../../utils/propsHelper';

interface BadgeContainerProps extends BaseHTMLAttributes<HTMLDivElement> {}

const BadgeContainer = forwardRef<HTMLDivElement, BadgeContainerProps>(({ className, ...restProps }, ref) => {
  /* --- Set default props --- */
  const styles = badgeConfig.styles.container;

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

BadgeContainer.displayName = 'BadgeContainer';

export default BadgeContainer;
