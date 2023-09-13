import React, { type BaseHTMLAttributes, forwardRef, useContext } from 'react';
import stateLayerConfig from '../../configs/clickLayerConfig';
import themeContext from '../../contexts/theme';
import { mergeClasses } from '../../utils/propsHelper';

export type StateLayerVariants = 'plain' | 'text' | 'outlined' | 'filled' | 'checked' | 'unchecked';

export interface StateLayerProps extends BaseHTMLAttributes<HTMLSpanElement> {
  variant?: StateLayerVariants;
  color?: Colors;
  valid?: boolean;
  invalid?: boolean;
}

const StateLayer = forwardRef<HTMLSpanElement, StateLayerProps>((props, ref) => {
  /* --- Set context props --- */
  const theme = useContext(themeContext).theme;

  /* --- Set default props --- */
  const styles = stateLayerConfig.styles;
  const { variant, color, valid, invalid, className, ...restProps } = {
    ...stateLayerConfig.defaultProps,
    ...props
  };

  const mergedClassName = mergeClasses(styles.base, styles.variants[variant][theme][color], className);

  return (
    <span
      className={mergedClassName}
      ref={ref}
      {...restProps}
    ></span>
  );
});

StateLayer.displayName = 'ClickLayer';

export default StateLayer;
