import React, { type BaseHTMLAttributes, forwardRef } from 'react';
import cardFooterConfig from '../../../configs/cardFooterConfig';
import { mergeClasses } from '../../../utils/propsHelper';

export interface CardFooterProps extends BaseHTMLAttributes<HTMLDivElement> {
  columns?: boolean;
  fullwidht?: boolean;
  className?: string;
}

const CardFooter = forwardRef<HTMLDivElement, CardFooterProps>((props, ref) => {
  /* --- Set default props --- */
  const { defaultProps, styles } = cardFooterConfig;
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

CardFooter.displayName = 'CardFooter';

export default CardFooter;
