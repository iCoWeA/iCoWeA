import React, { type LiHTMLAttributes, forwardRef, type ReactNode } from 'react';

import useConfig from '../../../hooks/useConfig';
import useTheme from '../../../hooks/useTheme';
import { mergeClasses } from '../../../utils/utils';
import ListSeparatorLine, { type ListSeparatorLineDefaultProps } from './ListSeparatorLine';
import listSeparatorConfig from './listSeparatorConfig';

export type ListSeparatorDefaultProps = {
  color?: TextColors;
  vertical?: boolean;
  spacing?: Spacing;
  panel?: boolean;
  justify?: RowPositions;
  gap?: Gaps;
};

export type ListSeparatorProps = LiHTMLAttributes<HTMLLIElement> &
ListSeparatorDefaultProps & {
  leftLineProps?: ListSeparatorLineDefaultProps;
  rightLineProps?: ListSeparatorLineDefaultProps;
};

const ListSeparator = forwardRef<HTMLLIElement, ListSeparatorProps>((props, ref) => {
  const {
    color,
    vertical,
    spacing,
    panel,
    justify,
    gap,
    leftLineProps,
    rightLineProps,
    defaultClassName,
    className,
    children,
    ...restProps
  } = useConfig('listSeparator', listSeparatorConfig.defaultProps, props);
  const theme = useTheme();

  /* --- Set classes --- */
  const styles = listSeparatorConfig.styles.root;
  const orientation = vertical ? 'vertical' : 'horizontal';

  const mergedClassName = mergeClasses(
    styles.base,
    styles.orientations[orientation],
    color !== 'inherit' && styles.colors[theme][color],
    gap !== 'none' && styles.gaps[gap],
    defaultClassName,
    className
  );

  /* -- Set line --- */
  let node: ReactNode;

  if (children && justify === 'left') {
    node = (
      <>
        {children}
        <ListSeparatorLine
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
        <ListSeparatorLine
          position="left"
          orientation={orientation}
          spacing={spacing}
          panel={panel}
          {...leftLineProps}
        />
        {children}
        <ListSeparatorLine
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
        <ListSeparatorLine
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
      <ListSeparatorLine
        position="middle"
        orientation={orientation}
        spacing={spacing}
        panel={panel}
        {...leftLineProps}
      />
    );
  }

  return (
    <li
      role="separator"
      className={mergedClassName}
      ref={ref}
      {...restProps}
    >
      {node}
    </li>
  );
});

ListSeparator.displayName = 'ListSeparator';

export default ListSeparator;
