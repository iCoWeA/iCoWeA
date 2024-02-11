import React, { type FC, useMemo } from 'react';

import { mergeClasses } from '../../../../iCoWeAUI/utils/utils';
import Mark, { type MarkProps } from '../../data-display/Mark/Mark';
import linearProgressConfig from './linearProgressConfig';

export type LinearProgressLabelDefaultProps = MarkProps;

export type LinearProgressLabelProps = LinearProgressLabelDefaultProps & {
  vertical: boolean;
};

const LinearProgressLabel: FC<LinearProgressLabelProps> = ({
  vertical,
  className,
  ...restProps
}) => {
  /* -- Set classes --- */
  const mergedClassName = useMemo(() => {
    const styles = linearProgressConfig.styles.label;

    return mergeClasses(styles.base, vertical && styles.vertical, className);
  }, [vertical, className]);

  return (
    <Mark
      size="sm"
      variant="default"
      color="inherit"
      border={false}
      className={mergedClassName}
      {...restProps}
    />
  );
};

export default LinearProgressLabel;
