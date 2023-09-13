import React, { type BaseHTMLAttributes, forwardRef, useContext } from 'react';
import cardConfig from '../../configs/cardConfig';
import themeContext from '../../contexts/theme';
import { mergeClasses } from '../../utils/propsHelper';

export type CardVariants = 'plain' | 'filled' | 'outlined';

export interface CardProps extends BaseHTMLAttributes<HTMLDivElement> {
  variant?: CardVariants;
  elevated?: boolean;
  clickable?: boolean;
  grabed?: boolean;
}

const Card = forwardRef<HTMLDivElement, CardProps>((props, ref) => {
  /* --- Set context props --- */
  const theme = useContext(themeContext).theme;

  /* --- Set default props --- */
  const { container: containerStyles, layer: layerStyles } = cardConfig.styles;
  const { variant, elevated, clickable, grabed, className, ...restProps } = { ...cardConfig.defaultProps, ...props };

  /* --- Set props --- */
  const clickableProps = clickable ? { tabIndex: 0, role: 'button' } : {};

  const mergedClassName = mergeClasses(
    containerStyles.base,
    containerStyles.variants[variant][theme],
    elevated && containerStyles.elevated,
    layerStyles.base,
    clickable && layerStyles.colors[theme],
    grabed && layerStyles.grabed[theme],
    className
  );

  return (
    <div
      className={mergedClassName}
      ref={ref}
      {...clickableProps}
      {...restProps}
    />
  );
});

Card.displayName = 'Card';

export default Card;
