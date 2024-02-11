import React, { forwardRef } from 'react';

import useConfig from '../../../hooks/useConfig';
import Stack, { type StackProps } from '../../layouts/Stack/Stack';
import cardConfig from './cardConfig';

export type CardDefaultProps = {
  spacing?: PanelSpacings;
  variant?: Variants;
  color?: DefaultColors;
  border?: Borders;
};

export type CardProps = StackProps & CardDefaultProps;

const Card = forwardRef<HTMLDivElement, CardProps>((props, ref) => {
  const mergedProps = useConfig('card', cardConfig.defaultProps, props);

  return (
    <Stack
      justify="start"
      align="stretch"
      gap="none"
      radius="rounded"
      ref={ref}
      {...mergedProps}
    />
  );
});

Card.displayName = 'Card';

export default Card;
