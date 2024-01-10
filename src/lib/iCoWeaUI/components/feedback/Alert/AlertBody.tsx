import React, { type FC } from 'react';

import { mergeClasses } from '../../../utils/utils';
import Stack, { type StackProps } from '../../layouts/Stack/Stack';
import alertConfig from './alertConfig';

export type AlertBodyDefaultProps = StackProps;

export type AlertBodyProps = AlertBodyDefaultProps;

const AlertBody: FC<AlertBodyProps> = ({ className, ...restProps }) => {
  /* --- Set classes --- */
  const styles = alertConfig.styles.body;

  const mergedClassName = mergeClasses(styles.base, className);

  return (
    <Stack
      justify="start"
      align="stretch"
      gap="base"
      className={mergedClassName}
      {...restProps}
    />
  );
};

export default AlertBody;
