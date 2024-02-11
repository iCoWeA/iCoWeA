import React, { forwardRef, useMemo } from 'react';

import DefaultRipple, {
  type DefaultRippleProps
} from '../../../../iCoWeAUI/components/DefaultRipple/DefaultRipple';
import { mergeClasses } from '../../../../iCoWeAUI/utils/utils';
import useConfig from '../../../hooks/useConfig';
import rippleConfig from './rippleConfig';

export type RippleDefaultProps = {
  color?: DefaultTextColors;
  border: boolean;
  sibling?: boolean;
};

export type RippleProps = DefaultRippleProps & RippleDefaultProps;

const Ripple = forwardRef<HTMLSpanElement, RippleProps>((props, ref) => {
  const { defaultClassName, className, ...restProps } = useConfig(
    'ripple',
    rippleConfig.defaultProps,
    props
  );

  /* --- Set classes --- */
  const mergedClassName = useMemo(
    () => mergeClasses(defaultClassName, className),
    [defaultClassName, className]
  );

  return (
    <DefaultRipple
      className={mergedClassName}
      ref={ref}
      {...restProps}
    />
  );
});

Ripple.displayName = 'Ripple';

export default Ripple;
