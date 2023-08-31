import React, { type BaseHTMLAttributes, forwardRef } from 'react';
import cardHeaderConfig from '../../../configs/cardHeaderConfig';
import { mergeClasses } from '../../../utils/propsHelper';

export interface CardHeaderProps extends BaseHTMLAttributes<HTMLDivElement> {
  columns?: boolean;
  fullwidht?: boolean;
}

const CardHeader = forwardRef<HTMLDivElement, CardHeaderProps>((props, ref) => {
  /* --- Set default props --- */
  const { defaultProps, styles } = cardHeaderConfig;
  const { columns, fullwidht, className, ...restProps } = { ...defaultProps, ...props };

  /* --- Set props --- */
  const mergedClassName = mergeClasses(styles.base, columns && styles.columns, fullwidht && styles.fullwidth, className);

  return (
    <div
      className={mergedClassName}
      ref={ref}
      {...restProps}
    />
  );
});

CardHeader.displayName = 'CardHeader';

export default CardHeader;
