import React, { type FC } from 'react';

import { mergeClasses } from '../../../utils/utils';
import Flex, { type FlexProps } from '../../layouts/Flex/Flex';
import textareaConfig from './textareaConfig';

export type TextareaDecoratorDefaultProps = Omit<FlexProps, 'variant'> & {
  variant?: InputVariants;
};

export type TextareaDecoratorProps = TextareaDecoratorDefaultProps & {
  position: SidePositions;
  variant: InputVariants;
  theme: Themes;
  color: Colors;
  valid: boolean;
  invalid: boolean;
};

const TextareaDecorator: FC<TextareaDecoratorProps> = ({
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
  const styles = textareaConfig.styles.container;

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
      justify="start"
      align="start"
      wrap="nowrap"
      gap="base"
      className={mergedClassName}
      {...restProps}
    >
      {children}
    </Flex>
  );
};

export default TextareaDecorator;
