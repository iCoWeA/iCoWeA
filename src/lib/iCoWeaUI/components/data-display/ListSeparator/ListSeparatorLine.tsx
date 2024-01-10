import React, { type BaseHTMLAttributes, type FC } from 'react';

import { mergeClasses } from '../../../utils/utils';
import listSeparatorConfig from './listSeparatorConfig';

export type ListSeparatorLineDefaultProps = BaseHTMLAttributes<HTMLHRElement>;

export type ListSeparatorLineProps = ListSeparatorLineDefaultProps & {
  position: RowPositions;
  orientation: Orientations;
  spacing: Spacing;
  panel: boolean;
};

const ListSeparatorLine: FC<ListSeparatorLineProps> = ({
  position,
  orientation,
  spacing,
  panel,
  className,
  ...restProps
}) => {
  /* --- Set classes --- */
  const styles = listSeparatorConfig.styles.line;
  const sizeVariant = panel ? 'panel' : 'default';

  const mergedClassName = mergeClasses(
    styles.base,
    styles.orientations[orientation],
    spacing !== 'none' &&
      orientation === 'horizontal' &&
      styles.spacing.horizontal[position][spacing],
    spacing !== 'none' &&
      orientation === 'vertical' &&
      styles.spacing.vertical[sizeVariant][position][spacing],
    className
  );

  return (
    <hr
      className={mergedClassName}
      {...restProps}
    />
  );
};

export default ListSeparatorLine;
