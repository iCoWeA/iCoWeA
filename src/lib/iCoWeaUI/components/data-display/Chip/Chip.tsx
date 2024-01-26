import React, { type ReactNode, forwardRef } from 'react';

import useConfig from '../../../hooks/useConfig';
import { mergeClasses } from '../../../utils/utils';
import Flex, { type FlexProps } from '../../layouts/Flex/Flex';
import { type IconProps } from '../Icon/Icon';
import ChipButton, { type ChipButtonDefaultProps } from './ChipButton';
import chipConfig from './chipConfig';

export type ChipDefaultProps = {
  variant?: Variants;
  color?: Colors;
  size?: Sizes;
  bordered?: boolean;
};

export type ChipProps = FlexProps &
ChipDefaultProps & {
  leftCloseButton?: boolean;
  rightCloseButton?: boolean;
  leftDecorator?: ReactNode;
  rightDecorator?: ReactNode;
  leftButtonProps?: ChipButtonDefaultProps;
  rightButtonProps?: ChipButtonDefaultProps;
  leftButtonIconProps?: IconProps;
  rightButtonIconProps?: IconProps;
  disabled?: boolean;
};

const Chip = forwardRef<HTMLDivElement, ChipProps>((props, ref) => {
  const {
    variant,
    color,
    size,
    leftCloseButton,
    rightCloseButton,
    leftDecorator,
    rightDecorator,
    leftButtonProps,
    rightButtonProps,
    leftButtonIconProps,
    rightButtonIconProps,
    defaultClassName,
    className,
    children,
    ...restProps
  } = useConfig('chip', chipConfig.defaultProps, props);

  /* --- Set classes --- */
  const styles = chipConfig.styles.root;

  const mergedClassName = mergeClasses(
    styles.base,
    styles.sizes[size],
    defaultClassName,
    className
  );

  return (
    <Flex
      variant={variant}
      color={color}
      spacing={size}
      direction="row"
      wrap="nowrap"
      justify="start"
      align="center"
      gap="base"
      grow={false}
      className={mergedClassName}
      ref={ref}
      {...restProps}
    >
      {leftCloseButton && (
        <ChipButton
          position="left"
          variant={variant}
          color={color}
          iconProps={leftButtonIconProps}
          {...leftButtonProps}
        />
      )}
      {leftDecorator}
      {children}
      {rightDecorator}
      {rightCloseButton && (
        <ChipButton
          position="right"
          variant={variant}
          color={color}
          iconProps={rightButtonIconProps}
          {...rightButtonProps}
        />
      )}
    </Flex>
  );
});

Chip.displayName = 'Chip';

export default Chip;
