import React, { type BaseHTMLAttributes, forwardRef, useContext, type ReactNode } from 'react';
import cardConfig from '../../configs/cardConfig';
import themeContext from '../../contexts/theme';
import { mergeClasses } from '../../utils/propsHelper';

export type CardVariants = 'plain' | 'filled' | 'outlined';

export interface CardProps extends BaseHTMLAttributes<HTMLDivElement> {
  variant?: CardVariants;
  elevated?: boolean;
  clickable?: boolean;
  grabed?: boolean;
  stateLayerProps?: BaseHTMLAttributes<HTMLSpanElement>;
}

const Card = forwardRef<HTMLDivElement, CardProps>((props, ref) => {
  /* --- Set context props --- */
  const theme = useContext(themeContext).theme;

  /* --- Set default props --- */
  const styles = cardConfig.styles;
  const { variant, elevated, clickable, grabed, stateLayerProps, className, children, ...restProps } = { ...cardConfig.defaultProps, ...props };

  /* --- Set state props --- */
  let clickableProps;
  let stateLayerNode: ReactNode;

  if (clickable) {
    clickableProps = { tabIndex: 0, role: 'button' };
  }

  /* --- Set props --- */
  const mergedClassName = mergeClasses(
    styles.base,
    styles.variants[variant][theme],
    elevated && styles.elevated,
    clickable && styles.clickable[theme],
    grabed && styles.grabed[theme],
    className
  );

  return (
    <div
      className={mergedClassName}
      ref={ref}
      {...clickableProps}
      {...restProps}
    >
      {children}
      {stateLayerNode}
    </div>
  );
});

Card.displayName = 'Card';

export default Card;
