import React, { forwardRef } from 'react';
import cardFooterConfig from '../../configs/cardFooterConfig';
import { mergeClasses } from '../../utils/utils';
import Box, { type BoxProps } from './Box';

export interface CardFooterProps extends BoxProps {
  size?: Sizes;
}

const CardFooter = forwardRef<HTMLDivElement, CardFooterProps>((props, ref) => {
  /* --- Set default props --- */
  const styles = cardFooterConfig.styles;
  const { size, className, ...restProps } = { ...cardFooterConfig.defaultProps, ...props };

  /* --- Set props --- */
  const mergedClassName = mergeClasses(styles.sizes[size], className);

  return (
    <Box
      className={mergedClassName}
      ref={ref}
      {...restProps}
    />
  );
});

CardFooter.displayName = 'CardFooter';

export default CardFooter;
