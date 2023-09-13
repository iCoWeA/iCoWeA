import React, { type BaseHTMLAttributes, forwardRef } from 'react';
import cardHeaderConfig from '../../configs/cardHeaderConfig';
import { mergeClasses } from '../../utils/propsHelper';

export interface CardHeaderProps extends BaseHTMLAttributes<HTMLDivElement> {
  fullwidht?: boolean;
}

const CardHeader = forwardRef<HTMLDivElement, CardHeaderProps>((props, ref) => {
  /* --- Set default props --- */
  const styles = cardHeaderConfig.styles;
  const { fullwidht, className, ...restProps } = { ...cardHeaderConfig.defaultProps, ...props };

  /* --- Set props --- */
  const mergedClassName = mergeClasses(styles.base, fullwidht && styles.fullwidth, className);

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
