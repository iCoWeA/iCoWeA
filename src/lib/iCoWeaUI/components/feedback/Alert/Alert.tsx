import React, { type ReactNode, forwardRef } from 'react';

import useConfig from '../../../hooks/useConfig';
import { mergeClasses } from '../../../utils/utils';
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
};

const Alert = forwardRef<HTMLDivElement, AlertProps>((props, ref) => {
  const {
    size,
    shadow,
    leftDecorator,
    rightDecorator,
    bodyProps,
    leftDecoratorProps,
    rightDecoratorProps,
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
      layout="default"
      spacing={size}
      panel
      align="start"
      wrap="nowrap"
      gap={size}
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
    </Container>
  );
});

Alert.displayName = 'Alert';

export default Alert;
