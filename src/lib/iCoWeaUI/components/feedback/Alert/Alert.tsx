import React, { type ReactNode, forwardRef } from 'react';

import useConfig from '../../../hooks/useConfig';
import { mergeClasses } from '../../../utils/utils';
import CloseButton, { type CloseButtonProps } from '../../inputs/CloseButton/CloseButton';
import Stack, { type StackProps } from '../../layouts/Stack/Stack';
import Container, { type ContainerProps } from '../../surfaces/Container/Container';
import AlertBody from './AlertBody';
import alertConfig from './alertConfig';

export type AlerDefaultProps = {
  variant?: Variants;
  color?: Colors;
  size?: Sizes;
  border?: Borders;
  shadow?: boolean;
  closable?: Closable;
};

export type AlertProps = ContainerProps &
AlerDefaultProps & {
  leftDecorator?: ReactNode;
  rightDecorator?: ReactNode;
  bodyProps?: StackProps;
  leftDecoratorProps?: StackProps;
  rightDecoratorProps?: StackProps;
  closeButton?: CloseButtonProps;
};

const Alert = forwardRef<HTMLDivElement, AlertProps>((props, ref) => {
  const {
    variant,
    color,
    size,
    shadow,
    closable,
    leftDecorator,
    rightDecorator,
    bodyProps,
    leftDecoratorProps,
    rightDecoratorProps,
    closeButton,
    defaultClassName,
    className,
    children,
    ...restProps
  } = useConfig('alert', alertConfig.defaultProps.alert, props);

  /* --- Set classes --- */
  const styles = alertConfig.styles.root;

  const mergedClassName = mergeClasses(
    styles.base,
    shadow && styles.shadow,
    defaultClassName,
    className
  );

  return (
    <Container
      variant={variant}
      color={color}
      layout="default"
      spacing={size}
      panel
      align="start"
      wrap="nowrap"
      gap={size}
      closable={closable}
      closeGap={size}
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
      <AlertBody {...bodyProps}>{children}</AlertBody>
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
      {closable !== 'none' && (
        <CloseButton
          position={closable}
          panel
          variant={variant}
          color={color}
          size={size}
          border={false}
          noRipple={false}
          {...closeButton}
        />
      )}
    </Container>
  );
});

Alert.displayName = 'Alert';

export default Alert;
