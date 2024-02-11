import React, { type FC, useMemo } from 'react';

import DefaultSpinner, {
  type DefaultSpinnerProps
} from '../../../iCoWeAUI/components/DefaultSpinner/DefaultSpinner';
import { mergeClasses } from '../../../iCoWeAUI/utils/utils';
import navlinkConfig from './navlinkConfig';

export type NavlinkSpinnerDefaultProps = DefaultSpinnerProps;

export type NavlinkSpinnerProps = NavlinkSpinnerDefaultProps & {
  color: DefaultTextColors;
};

const NavlinkSpinner: FC<NavlinkSpinnerProps> = ({ className, ...restProps }) => {
  /* --- Set classes --- */
  const mergedClassName = useMemo(() => {
    const styles = navlinkConfig.styles.spinner;

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

export default NavlinkSpinner;
