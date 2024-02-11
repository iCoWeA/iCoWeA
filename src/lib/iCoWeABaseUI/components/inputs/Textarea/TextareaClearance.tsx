import React, { type BaseHTMLAttributes, type FC, useMemo } from 'react';

import { mergeClasses } from '../../../../iCoWeAUI/utils/utils';
import inputConfig from './textareaConfig';

export type TextareaClearanceDefaultProps = BaseHTMLAttributes<HTMLLegendElement>;

export type TextareaClearanceProps = TextareaClearanceDefaultProps;

const TextareaClearance: FC<TextareaClearanceProps> = ({ className, ...restProps }) => {
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

export default TextareaClearance;
