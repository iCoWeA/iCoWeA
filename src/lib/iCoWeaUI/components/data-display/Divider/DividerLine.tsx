import React, { type BaseHTMLAttributes, type FC } from 'react';

import { mergeClasses } from '../../../utils/utils';
import dividerConfig from './dividerConfig';

export type DividerLineDefaultProps = BaseHTMLAttributes<HTMLHRElement>;

export type DividerLineProps = DividerLineDefaultProps & {
  position: ContainerPositions;
  orientation: Orientations;
  spacing: Spacing;
  panel: boolean;
};

const DividerLine: FC<DividerLineProps> = ({
  position,
  orientation,
  spacing,
  panel,
  className,
  ...restProps
}) => {
  /* --- Set classes --- */
  const styles = dividerConfig.styles.line;
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

export default DividerLine;
