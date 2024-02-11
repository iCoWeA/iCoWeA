import React, { type ReactNode, forwardRef, useMemo } from 'react';

import { mergeClasses } from '../../../../iCoWeAUI/utils/utils';
import useConfig from '../../../hooks/useConfig';
import CloseButton, { type CloseButtonProps } from '../../inputs/CloseButton/CloseButton';
import Flex, { type FlexProps } from '../../layouts/Flex/Flex';
import chipConfig from './chipConfig';

export type ChipDefaultProps = {
  size?: Sizes;
  variant?: Variants;
  color?: DefaultColors;
  border?: boolean;
};

export type ChipProps = FlexProps &
ChipDefaultProps & {
  leftDecorator?: ReactNode;
  rightDecorator?: ReactNode;
  leftCloseButton?: boolean;
  rightCloseButton?: boolean;
  leftButtonProps?: CloseButtonProps;
  rightButtonProps?: CloseButtonProps;
  disabled?: boolean;
};

const Chip = forwardRef<HTMLDivElement, ChipProps>((props, ref) => {
  const {
    size,
    variant,
    color,
    leftDecorator,
    rightDecorator,
    leftCloseButton,
    rightCloseButton,
    leftButtonProps,
    rightButtonProps,
    defaultClassName,
    className,
    children,
    ...restProps
  } = useConfig('chip', chipConfig.defaultProps, props);

  /* --- Set classes --- */
  const mergedClassName = useMemo(() => {
    const styles = chipConfig.styles;

    return mergeClasses(styles.base, styles.sizes[size], defaultClassName, className);
  }, [size, defaultClassName, className]);

  return (
    <Flex
      direction="row"
      wrap="nowrap"
      justify="start"
      align="center"
      gap="base"
      variant={variant}
      color={color}
      radius="circular"
      className={mergedClassName}
      ref={ref}
      {...restProps}
    >
      {leftCloseButton && (
        <CloseButton
          placement="none"
          size="none"
          variant={variant === 'default' || variant === 'solid' ? 'default' : 'text'}
          color={color}
          noRipple={false}
          {...leftButtonProps}
        />
      )}
      {leftDecorator}
      {children}
      {rightDecorator}
      {rightCloseButton && (
        <CloseButton
          placement="none"
          size="none"
          variant={variant === 'default' || variant === 'solid' ? 'default' : 'text'}
          color={color}
          noRipple={false}
          {...rightButtonProps}
        />
      )}
    </Flex>
  );
});

Chip.displayName = 'Chip';

export default Chip;
