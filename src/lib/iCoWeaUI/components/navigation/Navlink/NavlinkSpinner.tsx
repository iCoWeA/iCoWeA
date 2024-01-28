import React, { type FC } from 'react';

import { mergeClasses } from '../../../utils/utils';
import Spinner, { type SpinnerProps } from '../../feedback/Spinner/Spinner';
import navlinkConfig from './navlinkConfig';

export type NavlinkSpinnerDefaultProps = SpinnerProps;

export type NavlinkSpinnerProps = NavlinkSpinnerDefaultProps & {
  variant: Variants;
  activeVariant: Variants;
  color: Colors;
  activeColor: Colors;
  active?: boolean;
};

const ButtonSpinner: FC<NavlinkSpinnerProps> = ({
  variant,
  activeVariant,
  color,
  activeColor,
  active,
  className,
  ...restProps
}) => {
  /* --- Set classes --- */
  const styles = navlinkConfig.styles.spinner;

  const mergedClassName = mergeClasses(styles.base, active, className);

  return (
    <Spinner
      variant={active ? activeVariant : variant}
      color={active ? activeColor : color}
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
