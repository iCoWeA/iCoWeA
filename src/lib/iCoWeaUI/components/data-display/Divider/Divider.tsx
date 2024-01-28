import React, { forwardRef, type ReactNode } from 'react';

import useConfig from '../../../hooks/useConfig';
import useTheme from '../../../hooks/useTheme';
import { mergeClasses } from '../../../utils/utils';
import Flex, { type FlexProps } from '../../layouts/Flex/Flex';
import DividerLine, { type DividerLineDefaultProps } from './DividerLine';
import dividerConfig from './dividerConfig';

export type DividerDefaultProps = {
  color?: TextColors;
  vertical?: boolean;
  spacing?: Spacing;
  panel?: boolean;
  justify?: ContainerPositions;
  gap?: Gaps;
};

export type DividerProps = Omit<FlexProps, 'justify'> &
DividerDefaultProps & {
  leftLineProps?: DividerLineDefaultProps;
  rightLineProps?: DividerLineDefaultProps;
};

const Divider = forwardRef<HTMLDivElement, DividerProps>((props, ref) => {
  const {
    color,
    vertical,
    spacing,
    panel,
    justify,
    leftLineProps,
    rightLineProps,
    defaultClassName,
    className,
    children,
    ...restProps
  } = useConfig('divider', dividerConfig.defaultProps, props);

  const theme = useTheme();

  /* --- Set classes --- */
  const styles = dividerConfig.styles.root;
  const orientation = vertical ? 'vertical' : 'horizontal';

  const mergedClassName = mergeClasses(
    styles.orientations[orientation],
    color === 'neutral' && styles.color[theme],
    defaultClassName,
    className
  );

  let node: ReactNode;

  if (children && justify === 'left') {
    node = (
      <>
        {children}
        <DividerLine
          position="right"
          orientation={orientation}
          spacing={spacing}
          panel={panel}
          {...rightLineProps}
        />
      </>
    );
  } else if (children && justify === 'middle') {
    node = (
      <>
        <DividerLine
          position="left"
          orientation={orientation}
          spacing={spacing}
          panel={panel}
          {...leftLineProps}
        />
        {children}
        <DividerLine
          position="right"
          orientation={orientation}
          spacing={spacing}
          panel={panel}
          {...rightLineProps}
        />
      </>
    );
  } else if (children && justify === 'right') {
    node = (
      <>
        <DividerLine
          position="left"
          orientation={orientation}
          spacing={spacing}
          panel={panel}
          {...leftLineProps}
        />
        {children}
      </>
    );
  } else {
    node = (
      <DividerLine
        position="middle"
        orientation={orientation}
        spacing={spacing}
        panel={panel}
        {...leftLineProps}
      />
    );
  }

  return (
    <Flex
      color={color === 'neutral' ? 'inherit' : color}
      direction={vertical ? 'col' : 'row'}
      wrap="nowrap"
      justify="stretch"
      align="center"
      grow={false}
      className={mergedClassName}
      ref={ref}
      {...restProps}
    >
      {node}
    </Flex>
  );
});

Divider.displayName = 'Divider';

export default Divider;
