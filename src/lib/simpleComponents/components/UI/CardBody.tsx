import React, { type BaseHTMLAttributes, forwardRef } from 'react';
import cardBodyConfig from '../../configs/cardBodyConfig';
import { mergeClasses } from '../../utils/propsHelper';

export interface CardBodyProps extends BaseHTMLAttributes<HTMLDivElement> {}

const CardBody = forwardRef<HTMLDivElement, CardBodyProps>((props, ref) => {
  /* --- Set default props --- */
  const styles = cardBodyConfig.styles;
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

CardBody.displayName = 'CardBody';

export default CardBody;
