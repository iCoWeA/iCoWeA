import React, { type BaseHTMLAttributes, forwardRef } from 'react';
import cardBodyConfig from '../../../configs/cardBodyConfig';
import { mergeClasses } from '../../../utils/propsHelper';

export interface CardBodyProps extends BaseHTMLAttributes<HTMLDivElement> {
  columns?: boolean;
  fullwidht?: boolean;
}

const CardBody = forwardRef<HTMLDivElement, CardBodyProps>((props, ref) => {
  /* --- Set default props --- */
  const styles = cardBodyConfig.styles;
  const { columns, fullwidht, className, ...restProps } = { ...cardBodyConfig.defaultProps, ...props };

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

CardBody.displayName = 'CardBody';

export default CardBody;
