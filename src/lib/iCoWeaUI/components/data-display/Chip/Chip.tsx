import React, { type ReactNode, forwardRef } from 'react';

import useConfig from '../../../hooks/useConfig';
import { mergeClasses } from '../../../utils/utils';
import Box, { type BoxProps } from '../../surfaces/Box/Box';
import chipConfig from './chipConfig';

export type ChipDefaultProps = {
  variant?: Variants;
  color?: Colors;
  size?: Sizes;
  bordered?: boolean;
};

export type ChipProps = BoxProps &
ChipDefaultProps & {
  leftDecorator?: ReactNode;
  rightDecorator?: ReactNode;
};

const Chip = forwardRef<HTMLDivElement, ChipProps>((props, ref) => {
  const {
    leftDecorator,
    rightDecorator,
    defaultClassName,
    className,
    children,
    ...restProps
  } = useConfig('chip', chipConfig.defaultProps, props);

  /* --- Set classes --- */
  const styles = chipConfig.styles;

  const mergedClassName = mergeClasses(styles.base, defaultClassName, className);

  return (
    <Box
      layout="panel"
      inner
      closable="none"
      buttonGap="base"
      className={mergedClassName}
      ref={ref}
      {...restProps}
    >
      {leftDecorator}
      {children}
      {rightDecorator}
    </Box>
  );
});

Chip.displayName = 'Chip';

export default Chip;
