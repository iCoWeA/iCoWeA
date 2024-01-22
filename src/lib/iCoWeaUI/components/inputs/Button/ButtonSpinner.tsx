import React, { type FC } from 'react';

import { mergeClasses } from '../../../utils/utils';
import Spinner, { type SpinnerProps } from '../../feedback/Spinner/Spinner';
import buttonConfig from './buttonConfig';

export type ButtonSpinnerDefaultProps = SpinnerProps;

export type ButtonSpinnerProps = ButtonSpinnerDefaultProps & {
  theme: Themes;
  variant: Variants;
  color: Colors;
};

const ButtonSpinner: FC<ButtonSpinnerProps> = ({
  theme,
  variant,
  color,
  className,
  ...restProps
}) => {
  /* --- Set classes --- */
  const styles = buttonConfig.styles.spinner;

  const mergedClassName = mergeClasses(
    styles.base,
    styles.variants[variant][theme][color],
    className
  );

  return (
    <Spinner
      color={color}
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
