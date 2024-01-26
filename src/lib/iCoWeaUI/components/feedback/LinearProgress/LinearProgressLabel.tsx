import React, { type FC } from 'react';

import { mergeClasses } from '../../../utils/utils';
import Mark, { type MarkProps } from '../../data-display/Mark/Mark';
import linearProgressConfig from './linearProgressConfig';

export type LinearProgressLabelDefaultProps = MarkProps & {
  color?: Colors;
};

export type LinearProgressLabelProps = LinearProgressLabelDefaultProps & {
  color: Colors;
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
      variant={disabled ? 'default' : 'solid'}
      size="sm"
      bordered={false}
      disabled={disabled}
      className={mergedClassName}
      {...restProps}
    />
  );
};

export default LinearProgressLabel;
