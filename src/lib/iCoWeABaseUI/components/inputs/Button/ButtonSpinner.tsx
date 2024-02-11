import React, { type FC, useMemo } from 'react';

import DefaultSpinner, {
  type DefaultSpinnerProps
} from '../../../../iCoWeAUI/components/DefaultSpinner/DefaultSpinner';
import { mergeClasses } from '../../../../iCoWeAUI/utils/utils';
import buttonConfig from './buttonConfig';

export type ButtonSpinnerDefaultProps = DefaultSpinnerProps;

export type ButtonSpinnerProps = ButtonSpinnerDefaultProps & {
  color: DefaultTextColors;
};

const ButtonSpinner: FC<ButtonSpinnerProps> = ({ className, ...restProps }) => {
  /* --- Set classes --- */
  const mergedClassName = useMemo(() => {
    const styles = buttonConfig.styles.spinner;

    return mergeClasses(styles.base, className);
  }, [className]);

  return (
    <DefaultSpinner
      size="none"
      stable={false}
      value="75"
      className={mergedClassName}
      {...restProps}
    />
  );
};

export default ButtonSpinner;
