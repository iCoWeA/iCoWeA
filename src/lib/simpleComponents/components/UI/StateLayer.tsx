import React, { type BaseHTMLAttributes, forwardRef, useContext } from 'react';
import stateLayerConfig from '../../configs/stateLayerConfig';
import themeContext from '../../contexts/theme';
import { mergeClasses } from '../../utils/propsHelper';

export type StateLayerStates = 'plain-click' | 'text-click' | 'outlined-click' | 'filled-click' | 'checked' | 'unchecked' | 'grab';

export interface StateLayerProps extends BaseHTMLAttributes<HTMLSpanElement> {
  state?: StateLayerStates;
  color?: Colors;
}

const StateLayer = forwardRef<HTMLSpanElement, StateLayerProps>((props, ref) => {
  /* --- Set context props --- */
  const theme = useContext(themeContext).theme;

  /* --- Set default props --- */
  const styles = stateLayerConfig.styles;
  const { state, color, className, ...restProps } = {
    ...stateLayerConfig.defaultProps,
    ...props
  };

  const mergedClassName = mergeClasses(styles.base, styles.variants[state][theme][color], className);

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
