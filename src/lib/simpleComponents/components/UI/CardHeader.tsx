import React, { forwardRef } from 'react';
import cardHeaderConfig from '../../configs/cardHeaderConfig';
import { mergeClasses } from '../../utils/utils';
import Box, { type BoxProps } from './Box';

export interface CardHeaderProps extends BoxProps {
  size?: Sizes;
  fullwidht?: boolean;
}

const CardHeader = forwardRef<HTMLDivElement, CardHeaderProps>((props, ref) => {
  /* --- Set default props --- */
  const styles = cardHeaderConfig.styles;
  const { size, fullwidht, className, ...restProps } = { ...cardHeaderConfig.defaultProps, ...props };

  /* --- Set props --- */
  const mergedClassName = mergeClasses(!fullwidht && styles.sizes[size], fullwidht && styles.fullwidth, className);

  return (
    <Box
      className={mergedClassName}
      ref={ref}
      {...restProps}
    />
  );
});

CardHeader.displayName = 'CardHeader';

export default CardHeader;
