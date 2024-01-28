import React, { type FC } from 'react';

import { mergeClasses } from '../../../utils/utils';
import Mark, { type MarkProps } from '../../data-display/Mark/Mark';
import linearProgressConfig from './linearProgressConfig';

export type LinearProgressLabelDefaultProps = MarkProps;

export type LinearProgressLabelProps = LinearProgressLabelDefaultProps & {
  vertical: boolean;
};

const LinearProgressLabel: FC<LinearProgressLabelProps> = ({
  vertical,
  className,
  disabled,
  ...restProps
}) => {
  /* -- Set classes --- */
  const styles = linearProgressConfig.styles.label;

  const mergedClassName = mergeClasses(styles.base, vertical && styles.vertical, className);

  return (
    <Mark
      variant="default"
      color="inherit"
      size="sm"
      border={false}
      disabled={disabled}
      className={mergedClassName}
      {...restProps}
    />
  );
};

export default LinearProgressLabel;
