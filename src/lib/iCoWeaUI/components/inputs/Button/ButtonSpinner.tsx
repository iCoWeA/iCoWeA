import React, { type FC } from 'react';

import { mergeClasses } from '../../../utils/utils';
import Spinner, { type SpinnerProps } from '../../feedback/Spinner/Spinner';
import buttonConfig from './buttonConfig';

export type ButtonSpinnerDefaultProps = SpinnerProps;

export type ButtonSpinnerProps = ButtonSpinnerDefaultProps & {
  variant: Variants;
  color: Colors;
};

const ButtonSpinner: FC<ButtonSpinnerProps> = ({ className, ...restProps }) => {
  /* --- Set classes --- */
  const styles = buttonConfig.styles.spinner;

  const mergedClassName = mergeClasses(styles.base, className);

  return (
    <Spinner
      size="md"
      innerBar="inherit"
      rotate
      value="75"
      className={mergedClassName}
      {...restProps}
    />
  );
};

export default ButtonSpinner;
