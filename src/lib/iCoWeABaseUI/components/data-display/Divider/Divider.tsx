import React, { forwardRef, useMemo, type ReactNode } from 'react';

import useTheme from '../../../../iCoWeAUI/hooks/useTheme';
import { mergeClasses } from '../../../../iCoWeAUI/utils/utils';
import useConfig from '../../../hooks/useConfig';
import { cutTextColor } from '../../../utils/utils';
import Flex, { type FlexProps } from '../../layouts/Flex/Flex';
import DividerLine, { type DividerLineDefaultProps } from './DividerLine';
import dividerConfig from './dividerConfig';

export type DividerDefaultProps = {
  placement?: ContainerPlacements;
  vertical?: boolean;
  spacing?: PanelSpacings;
  color?: TextColors;
  gap?: Gaps;
};

export type DividerProps = Omit<FlexProps, 'color'> &
DividerDefaultProps & {
  leftLineProps?: DividerLineDefaultProps;
  rightLineProps?: DividerLineDefaultProps;
};

const Divider = forwardRef<HTMLDivElement, DividerProps>((props, ref) => {
  const {
    placement,
    vertical,
    spacing,
    color,
    gap,
    leftLineProps,
    rightLineProps,
    defaultClassName,
    className,
    children,
    ...restProps
  } = useConfig('divider', dividerConfig.defaultProps, props);

  const theme = useTheme();

  /* --- Set classes --- */
  const mergedClassName = useMemo(() => {
    const styles = dividerConfig.styles.root;
    const orientation = vertical ? 'vertical' : 'horizontal';

    return mergeClasses(
      styles.base,
      styles.orientations[orientation],
      color === 'neutral' && styles.color[theme],
      defaultClassName,
      className
    );
  }, [vertical, theme, color, defaultClassName, className]);

  let node: ReactNode;

  if (children && placement === 'left') {
    node = (
      <>
        {children}
        <DividerLine
          placement="right"
          vertical={vertical}
          spacing={spacing}
          {...rightLineProps}
        />
      </>
    );
  } else if (children && placement === 'middle') {
    node = (
      <>
        <DividerLine
          placement="left"
          vertical={vertical}
          spacing={spacing}
          {...leftLineProps}
        />
        {children}
        <DividerLine
          placement="right"
          vertical={vertical}
          spacing={spacing}
          {...rightLineProps}
        />
      </>
    );
  } else if (children && placement === 'right') {
    node = (
      <>
        <DividerLine
          placement="left"
          vertical={vertical}
          spacing={spacing}
          {...leftLineProps}
        />
        {children}
      </>
    );
  } else {
    node = (
      <DividerLine
        placement="middle"
        vertical={vertical}
        spacing={spacing}
        {...leftLineProps}
      />
    );
  }

  return (
    <Flex
      direction={vertical ? 'col' : 'row'}
      wrap="nowrap"
      justify="stretch"
      align="center"
      gap={children ? gap : 'none'}
      variant={color.startsWith('on') ? 'default' : 'text'}
      color={color === 'neutral' ? 'inherit' : cutTextColor(color)}
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
