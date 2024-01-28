import React, { type FC } from 'react';

import { mergeClasses } from '../../../utils/utils';
import Mark, { type MarkProps } from '../../data-display/Mark/Mark';
import spinnerConfig from './spinnerConfig';

export type SpinnerLabelDefaultProps = MarkProps;

export type SpinnerLabelProps = SpinnerLabelDefaultProps & {
  size: Sizes;
};

const SpinnerLabel: FC<SpinnerLabelProps> = ({ className, ...restProps }) => {
  /* -- Set classes --- */
  const styles = spinnerConfig.styles.label;

  const mergedClassName = mergeClasses(styles.base, className);

  return (
    <Mark
      variant="default"
      color="inherit"
      border={false}
      className={mergedClassName}
      {...restProps}
    />
  );
};

export default SpinnerLabel;
