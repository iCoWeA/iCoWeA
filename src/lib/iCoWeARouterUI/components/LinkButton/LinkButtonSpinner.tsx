import React, { type FC, useMemo } from 'react';

import DefaultSpinner, {
  type DefaultSpinnerProps
} from '../../../iCoWeAUI/components/DefaultSpinner/DefaultSpinner';
import { mergeClasses } from '../../../iCoWeAUI/utils/utils';
import linkButtonConfig from './linkButtonConfig';

export type LinkButtonSpinnerDefaultProps = DefaultSpinnerProps;

export type LinkButtonSpinnerProps = LinkButtonSpinnerDefaultProps & {
  color: DefaultTextColors;
};

const LinkButtonSpinner: FC<LinkButtonSpinnerProps> = ({ className, ...restProps }) => {
  /* --- Set classes --- */
  const mergedClassName = useMemo(() => {
    const styles = linkButtonConfig.styles.spinner;

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

export default LinkButtonSpinner;
