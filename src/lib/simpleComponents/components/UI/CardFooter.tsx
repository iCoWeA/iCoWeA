import React, { type BaseHTMLAttributes, forwardRef } from 'react';
import cardFooterConfig from '../../configs/cardFooterConfig';
import { mergeClasses } from '../../utils/propsHelper';

export interface CardFooterProps extends BaseHTMLAttributes<HTMLDivElement> {}

const CardFooter = forwardRef<HTMLDivElement, CardFooterProps>((props, ref) => {
  /* --- Set default props --- */
  const styles = cardFooterConfig.styles;
  const { className, ...restProps } = { ...props };

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

CardFooter.displayName = 'CardFooter';

export default CardFooter;
