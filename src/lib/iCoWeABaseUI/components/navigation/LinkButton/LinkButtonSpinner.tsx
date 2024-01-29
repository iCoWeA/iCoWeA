import React, { type FC } from 'react';

import { mergeClasses } from '../../../../iCoWeAUI/utils/utils';
import Spinner, { type SpinnerProps } from '../../feedback/Spinner/Spinner';
import linkButtonConfig from './linkButtonConfig';

export type LinkButtonSpinnerDefaultProps = SpinnerProps;

export type LinkButtonSpinnerProps = LinkButtonSpinnerDefaultProps & {
  variant: Variants;
  color: Colors;
};

const ButtonSpinner: FC<LinkButtonSpinnerProps> = ({ className, ...restProps }) => {
  /* --- Set classes --- */
  const styles = linkButtonConfig.styles.spinner;

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
