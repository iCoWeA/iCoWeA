import React, { type FC, useMemo } from 'react';

import { mergeClasses } from '../../../../iCoWeAUI/utils/utils';
import Flex, { type FlexProps } from '../../layouts/Flex/Flex';
import inputConfig from './textareaConfig';

export type TextareaDecoratorDefaultProps = FlexProps;

export type TextareaDecoratorProps = Omit<TextareaDecoratorDefaultProps, 'color'> & {
  placement: SidePlacements;
  theme: Themes;
  inputVariant: InputVariants;
  color: DefaultTextColors;
  valid?: boolean;
  invalid?: boolean;
  disabled?: boolean;
};

const TextareaDecorator: FC<TextareaDecoratorProps> = ({
  placement,
  theme,
  inputVariant,
  color,
  valid,
  invalid,
  className,
  disabled,
  children,
  ...restProps
}) => {
  /* --- Set classes --- */
  const mergedClassName = useMemo(() => {
    const styles = inputConfig.styles.container;
    const colorVariant = disabled ? 'disabled' : invalid ? 'invalid' : valid ? 'valid' : false;

    return mergeClasses(
      styles.base,
      children && styles.padding[placement],
      styles.placements[inputVariant][placement],
      colorVariant ? styles.color[colorVariant][theme] : styles.colors[theme][color],
      !colorVariant && inputVariant === 'soft' && styles.background[theme],
      className
    );
  }, [disabled, invalid, valid, inputVariant, !!children, placement, theme, color, className]);

  return (
    <Flex
      direction="row"
      wrap="nowrap"
      justify="start"
      align="start"
      gap="base"
      className={mergedClassName}
      {...restProps}
    >
      {children}
    </Flex>
  );
};

export default TextareaDecorator;
