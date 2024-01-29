import React, { type FC } from 'react';

import { mergeClasses } from '../../../../iCoWeAUI/utils/utils';
import Flex, { type FlexProps } from '../../layouts/Flex/Flex';
import inputConfig from './inputConfig';

export type InputDecoratorDefaultProps = Omit<FlexProps, 'variant'> & {
  variant?: InputVariants;
};

export type InputDecoratorProps = InputDecoratorDefaultProps & {
  position: SidePositions;
  variant: InputVariants;
  theme: Themes;
  color: Colors;
  valid: boolean;
  invalid: boolean;
};

const InputDecorator: FC<InputDecoratorProps> = ({
  position,
  variant,
  theme,
  color,
  valid,
  invalid,
  disabled,
  className,
  children,
  ...restProps
}) => {
  /* --- Set classes --- */
  const styles = inputConfig.styles.container;

  const mergedClassName = mergeClasses(
    styles.base,
    styles.positions[position],
    styles.variants[variant][position],
    children && styles.padding[position],
    !disabled && variant === 'soft' && styles.background[theme],
    !valid && !invalid && !disabled && styles.colors[theme][color],
    valid && !disabled && styles.valid[theme],
    invalid && !disabled && styles.invalid[theme],
    disabled && styles.disabled[theme],
    className
  );

  return (
    <Flex
      direction="row"
      wrap="nowrap"
      justify="start"
      align="center"
      gap="base"
      grow={false}
      className={mergedClassName}
      {...restProps}
    >
      {children}
    </Flex>
  );
};

export default InputDecorator;
