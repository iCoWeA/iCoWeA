import React, { type ReactNode, forwardRef } from 'react';

import useConfig from '../../../hooks/useConfig';
import { mergeClasses } from '../../../utils/utils';
import Stack, { type StackProps } from '../../layouts/Stack/Stack';
import Box, { type BoxProps } from '../../surfaces/Box/Box';
import AlertBody from './AlertBody';
import alertConfig from './alertConfig';

export type AlerDefaultProps = {
  variant?: Variants;
  color?: Colors;
  bordered?: boolean;
  size?: Sizes;
  closable?: Closable;
  buttonGap?: Gaps;
};

export type AlertProps = BoxProps &
AlerDefaultProps & {
  leftDecorator?: ReactNode;
  rightDecorator?: ReactNode;
  bodyProps?: StackProps;
  leftDecoratorProps?: StackProps;
  rightDecoratorProps?: StackProps;
};

const Alert = forwardRef<HTMLDivElement, AlertProps>((props, ref) => {
  const {
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

  const mergedClassName = mergeClasses(styles.base, defaultClassName, className);

  return (
    <Box
      layout="panel"
      inner={false}
      align="start"
      wrap="nowrap"
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
    </Box>
  );
});

Alert.displayName = 'Alert';

export default Alert;
