import React, { type BaseHTMLAttributes, type FC, useMemo } from 'react';

import { mergeClasses } from '../../../../iCoWeAUI/utils/utils';
import inputConfig from './inputConfig';

export type InputClearanceDefaultProps = BaseHTMLAttributes<HTMLLegendElement>;

export type InputClearanceProps = InputClearanceDefaultProps;

const InputClearance: FC<InputClearanceProps> = ({ className, ...restProps }) => {
  /* --- Set classes --- */
  const mergedClassName = useMemo(() => {
    const styles = inputConfig.styles.clearance;

    return mergeClasses(styles.base, className);
  }, [className]);

  return (
    <legend
      className={mergedClassName}
      {...restProps}
    />
  );
};

export default InputClearance;
