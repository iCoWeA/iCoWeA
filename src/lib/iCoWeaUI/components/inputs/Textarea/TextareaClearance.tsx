import React, { type BaseHTMLAttributes, type FC } from 'react';

import { mergeClasses } from '../../../utils/utils';
import textareaConfig from './textareaConfig';

export type TextareaClearanceDefaultProps = BaseHTMLAttributes<HTMLLegendElement>;

export type TextareaClearanceProps = TextareaClearanceDefaultProps;

const TextareaClearance: FC<TextareaClearanceProps> = ({ className, ...restProps }) => {
  /* --- Set classes --- */
  const styles = textareaConfig.styles.clearance;

  const mergedClassName = mergeClasses(styles.base, className);

  return (
    <legend
      className={mergedClassName}
      {...restProps}
    />
  );
};

export default TextareaClearance;
