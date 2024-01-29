import React, { type BaseHTMLAttributes, forwardRef } from 'react';

import useTheme from '../../../../iCoWeAUI/hooks/useTheme';
import { mergeClasses } from '../../../../iCoWeAUI/utils/utils';
import useConfig from '../../../hooks/useConfig';
import rippleConfig from './rippleConfig';

export type RippleDefaultProps = {
  variant?: Variants;
  color?: Colors;
  sibling?: boolean;
};

export type RippleProps = BaseHTMLAttributes<HTMLSpanElement> & RippleDefaultProps;

const Ripple = forwardRef<HTMLSpanElement, RippleProps>((props, ref) => {
  const { variant, color, sibling, defaultClassName, className, ...restProps } = useConfig(
    'ripple',
    rippleConfig.defaultProps,
    props
  );
  const theme = useTheme();

  /* --- Set classes --- */
  const styles = rippleConfig.styles;
  const selector = sibling ? 'sibling' : 'parent';

  const mergedClassName = mergeClasses(
    styles.base,
    styles.variants[selector][variant][theme][color],
    defaultClassName,
    className
  );

  return (
    <span
      className={mergedClassName}
      ref={ref}
      {...restProps}
    />
  );
});

Ripple.displayName = 'Ripple';

export default Ripple;
