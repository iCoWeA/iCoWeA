import React, { forwardRef } from 'react';

import useConfig from '../../../hooks/useConfig';
import { mergeClasses } from '../../../utils/utils';
import Box, { type BoxProps } from '../Box/Box';
import cardConfig from './cardConfig';

export type CardDefaultProps = {
  variant?: Variants;
  color?: Colors;
  bordered?: boolean;
  simple?: boolean;
  shadow?: boolean;
};

export type CardProps = BoxProps & CardDefaultProps;

const Card = forwardRef<HTMLDivElement, CardProps>((props, ref) => {
  const { simple, shadow, defaultClassName, className, ...restProps } = useConfig(
    'card',
    cardConfig.defaultProps,
    props
  );
  /* --- Set classes --- */
  const styles = cardConfig.styles;

  const mergedClassName = mergeClasses(
    styles.base,
    !simple && styles.multiline,
    shadow && styles.shadow,
    defaultClassName,
    className
  );

  return (
    <Box
      layout="body"
      size="md"
      inner={false}
      closable="none"
      buttonGap="md"
      className={mergedClassName}
      ref={ref}
      {...restProps}
    />
  );
});

Card.displayName = 'Card';

export default Card;
