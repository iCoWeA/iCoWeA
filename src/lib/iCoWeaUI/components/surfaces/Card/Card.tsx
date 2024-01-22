import React, { forwardRef } from 'react';

import useConfig from '../../../hooks/useConfig';
import { mergeClasses } from '../../../utils/utils';
import Box, { type BoxProps } from '../../layouts/Box/Box';
import cardConfig from './cardConfig';

export type CardDefaultProps = {
  variant?: Variants;
  color?: Colors;
  spacing?: Spacing;
  bordered?: Borders;
  shadow?: boolean;
};

export type CardProps = BoxProps & CardDefaultProps;

const Card = forwardRef<HTMLDivElement, CardProps>((props, ref) => {
  const { shadow, defaultClassName, className, ...restProps } = useConfig(
    'card',
    cardConfig.defaultProps,
    props
  );
  /* --- Set classes --- */
  const styles = cardConfig.styles;

  const mergedClassName = mergeClasses(
    styles.base,
    shadow && styles.shadow,
    defaultClassName,
    className
  );

  return (
    <Box
      panel={false}
      direction="col"
      wrap="wrap"
      justify="start"
      align="stretch"
      gap="none"
      block={false}
      className={mergedClassName}
      ref={ref}
      {...restProps}
    />
  );
});

Card.displayName = 'Card';

export default Card;
