import React, { type BaseHTMLAttributes, type FC } from 'react';

import { mergeClasses } from '../../../utils/utils';
import inputConfig from './inputConfig';

export type InputClearanceDefaultProps = BaseHTMLAttributes<HTMLLegendElement>;

export type InputClearanceProps = InputClearanceDefaultProps;

const InputClearance: FC<InputClearanceProps> = ({ className, ...restProps }) => {
  /* --- Set classes --- */
  const styles = inputConfig.styles.clearance;

  const mergedClassName = mergeClasses(styles.base, className);

  return (
    <legend
      className={mergedClassName}
      {...restProps}
    />
  );
};

export default InputClearance;
