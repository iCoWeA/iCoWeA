import React, { type ReactNode, forwardRef, useMemo } from 'react';

import { mergeClasses } from '../../../../iCoWeAUI/utils/utils';
import useConfig from '../../../hooks/useConfig';
import { addPanelSize } from '../../../utils/utils';
import CloseButton, { type CloseButtonProps } from '../../inputs/CloseButton/CloseButton';
import Stack, { type StackProps } from '../../layouts/Stack/Stack';
import Container, { type ContainerProps } from '../../surfaces/Container/Container';
import alertConfig from './alertConfig';

export type AlerDefaultProps = {
  size?: Sizes;
  variant?: Variants;
  color?: DefaultColors;
  border?: Borders;
  closable?: Closable;
};

export type AlertProps = ContainerProps &
AlerDefaultProps & {
  leftDecorator?: ReactNode;
  rightDecorator?: ReactNode;
  bodyProps?: StackProps;
  leftDecoratorProps?: StackProps;
  rightDecoratorProps?: StackProps;
  buttonProps?: CloseButtonProps;
};

const Alert = forwardRef<HTMLDivElement, AlertProps>((props, ref) => {
  const {
    size,
    variant,
    color,
    closable,
    leftDecorator,
    rightDecorator,
    bodyProps,
    leftDecoratorProps,
    rightDecoratorProps,
    buttonProps,
    defaultClassName,
    className,
    children,
    ...restProps
  } = useConfig('alert', alertConfig.defaultProps, props);

  const spacing = addPanelSize(size);

  /* --- Set classes --- */
  const mergedClassName = useMemo(() => {
    const styles = alertConfig.styles;

    return mergeClasses(styles.base, defaultClassName, className);
  }, [defaultClassName, className]);

  return (
    <Container
      spacing={spacing}
      layout="default"
      closable={closable}
      variant={variant}
      color={color}
      radius="rounded"
      shadow
      align="start"
      wrap="nowrap"
      gap={size}
      className={mergedClassName}
      role="alert"
      ref={ref}
      {...restProps}
    >
      {leftDecorator && (
        <Stack
          justify="start"
          align="center"
          gap="base"
          {...leftDecoratorProps}
        >
          {leftDecorator}
        </Stack>
      )}
      <Stack
        justify="start"
        align="stretch"
        gap="base"
        block
        {...bodyProps}
      >
        {children}
      </Stack>
      {rightDecorator && (
        <Stack
          justify="start"
          align="center"
          gap="base"
          {...rightDecoratorProps}
        >
          {rightDecorator}
        </Stack>
      )}
      {closable !== 'none' && spacing !== 'none' && (
        <CloseButton
          placement={closable}
          size={spacing}
          variant={variant === 'default' || variant === 'solid' ? 'default' : 'text'}
          color={color}
          noRipple={false}
          {...buttonProps}
        />
      )}
    </Container>
  );
});

Alert.displayName = 'Alert';

export default Alert;
