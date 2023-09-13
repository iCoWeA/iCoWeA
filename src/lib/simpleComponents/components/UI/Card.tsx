import React, { type BaseHTMLAttributes, forwardRef, useContext } from 'react';
import cardConfig from '../../configs/cardConfig';
import themeContext from '../../contexts/theme';
import { mergeClasses } from '../../utils/propsHelper';

export type CardVariants = 'plain' | 'filled' | 'outlined';

export interface CardProps extends BaseHTMLAttributes<HTMLDivElement> {
  variant?: CardVariants;
  elevated?: boolean;
}

const Card = forwardRef<HTMLDivElement, CardProps>((props, ref) => {
  /* --- Set context props --- */
  const theme = useContext(themeContext).theme;

  /* --- Set default props --- */
  const styles = cardConfig.styles;
  const { variant, elevated, className, ...restProps } = { ...cardConfig.defaultProps, ...props };

  /* --- Set props --- */
  const mergedClassName = mergeClasses(styles.base, styles.variants[variant][theme], elevated && styles.elevated[theme], className);

  return (
    <div
      className={mergedClassName}
      ref={ref}
      {...restProps}
    />
  );
});

Card.displayName = 'Card';

export default Card;
