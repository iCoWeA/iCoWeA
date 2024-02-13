import React, { type BaseHTMLAttributes, type FC, useMemo } from 'react';

import { mergeClasses } from '../../../../iCoWeAUI/utils/utils';
import { cutPanelSize } from '../../../utils/utils';
import dividerConfig from './dividerConfig';

export type DividerLineDefaultProps = BaseHTMLAttributes<HTMLHRElement>;

export type DividerLineProps = DividerLineDefaultProps & {
  placement: BoxPlacements;
  vertical: boolean;
  spacing: PanelSpacings;
};

const DividerLine: FC<DividerLineProps> = ({
  placement,
  vertical,
  spacing,
  className,
  ...restProps
}) => {
  /* --- Set classes --- */
  const mergedClassName = useMemo(() => {
    const styles = dividerConfig.styles.line;
    const orientation = vertical ? 'vertical' : 'horizontal';
    const horizontalSpacing = cutPanelSize(spacing);

    return mergeClasses(
      styles.base,
      styles.orientations[orientation],
      horizontalSpacing !== 'none' && !vertical && styles.spacing.horizontal[placement][horizontalSpacing],
      spacing !== 'none' && vertical && styles.spacing.vertical[placement][spacing],
      className
    );
  }, [vertical, spacing, placement, className]);

  return (
    <hr
      className={mergedClassName}
      {...restProps}
    />
  );
};

export default DividerLine;
