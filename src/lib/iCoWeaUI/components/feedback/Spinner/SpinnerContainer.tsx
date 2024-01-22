import React, { type SVGAttributes, type FC } from 'react';

import { mergeClasses } from '../../../utils/utils';
import spinnerConfig from './spinnerConfig';

export type SpinnerContainerDefaultProps = Omit<SVGAttributes<SVGSVGElement>, 'rotate'> & {
  rotate?: boolean;
};

export type SpinnerContainerProps = SpinnerContainerDefaultProps & {
  rotate: boolean;
};

const SpinnerContainer: FC<SpinnerContainerProps> = ({ rotate, className, ...restProps }) => {
  /* --- Set classes --- */
  const styles = spinnerConfig.styles.container;

  const mergedClassName = mergeClasses(styles.base, rotate && styles.rotate, className);

  return (
    <svg
      viewBox="0 0 40 40"
      className={mergedClassName}
      {...restProps}
    />
  );
};

export default SpinnerContainer;
