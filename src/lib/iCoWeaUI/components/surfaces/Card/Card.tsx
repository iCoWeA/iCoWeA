import React, { forwardRef } from 'react';

import useConfig from '../../../hooks/useConfig';
import { mergeClasses } from '../../../utils/utils';
import Stack, { type StackProps } from '../../layouts/Stack/Stack';
import cardConfig from './cardConfig';

export type CardDefaultProps = {
  variant?: Variants;
  color?: Colors;
  spacing?: Spacing;
  bordered?: Borders;
  shadow?: boolean;
};

export type CardProps = StackProps & CardDefaultProps;

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
    <Stack
      justify="start"
      align="stretch"
      gap="none"
      className={mergedClassName}
      ref={ref}
      {...restProps}
    />
  );
});

Card.displayName = 'Card';

export default Card;
