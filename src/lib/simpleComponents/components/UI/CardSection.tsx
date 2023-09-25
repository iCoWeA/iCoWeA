import React, { forwardRef } from 'react';
import cardSectionConfig from '../../configs/cardSectionConfig';
import { mergeClasses } from '../../utils/utils';
import Box, { type BoxProps } from './Box';

export interface CardSectionProps extends BoxProps {
  size?: Sizes;
}

const CardSection = forwardRef<HTMLDivElement, CardSectionProps>((props, ref) => {
  /* --- Set default props --- */
  const styles = cardSectionConfig.styles;
  const { size, className, ...restProps } = { ...cardSectionConfig.defaultProps, ...props };

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

CardSection.displayName = 'CardSection';

export default CardSection;
